'use client';
import { useState } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Header() {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const notifications = [
        'Aftale med leverandør X fornyet.',
        'Du har en ny besked fra support.',
        'Leverandør Y har opdateret deres tilbud.',
    ];

    const menuItems = [
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/products', label: 'Produkter og ydelser' },
        { href: '/agreements', label: 'Aftaler' },
        { href: '/suppliers', label: 'Leverandører' },
        { href: '/reports', label: 'Rapporter' },
        { href: '/support', label: 'Support' },
    ];

    return (
        <header className="bg-white shadow p-4 flex justify-between items-center relative">
            {/* Logo */}
            <div className="flex items-center">
                <div className="text-xl font-bold">Logo</div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-4 ml-6">
                {menuItems.map((item) => (
                    <Link key={item.href} href={item.href} className="hover:text-accent">
                        {item.label}
                    </Link>
                ))}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
                {/* SearchBar */}
                <div className="hidden sm:block">
                    <SearchBar />
                </div>

                {/* Notifications */}
                <div className="relative">
                    <button onClick={() => setIsNotificationOpen(!isNotificationOpen)}>
                        🔔
                    </button>
                    {isNotificationOpen && (
                        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg border rounded z-50">
                            <ul className="list-none p-2">
                                {notifications.map((notification, index) => (
                                    <li
                                        key={index}
                                        className="p-2 border-b last:border-b-0 hover:bg-gray-200 cursor-pointer"
                                    >
                                        {notification}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* User Icon */}
                <button>👤</button>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    ☰ {/* Hamburger icon */}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50">
                    <div className="p-4">
                        {/* SearchBar in mobile menu */}
                        <div className="mb-4">
                            <SearchBar />
                        </div>
                        <nav className="flex flex-col space-y-2">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="hover:text-accent"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
