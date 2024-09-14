// components/Header.tsx

'use client';
import { useState } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

interface MenuItem {
    href: string;
    label: string;
}

// Define Type for Menu Item with Submenu
interface MenuItemWithSubmenu {
    label: string;
    submenu: MenuItem[];
}

// Union Type for Menu Item (can be with or without submenu)
type Menu = MenuItem | MenuItemWithSubmenu;

export default function Header() {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const notifications = [
        'Contract with Supplier X renewed.',
        'You have a new message from support.',
        'Supplier Y has updated their offer.',
    ];

    // Use the type for menu items
    const menuItems: Menu[] = [
        { href: '/dashboard', label: 'Dashboard' },
        {
            label: 'Products & Services',
            submenu: [
                { href: '/products/it-solutions', label: 'IT Solutions' },
                { href: '/products/office-supplies', label: 'Office Supplies' },
                { href: '/products/transport-services', label: 'Transport Services' },
                { href: '/products/building-materials', label: 'Building Materials' },
            ],
        },
        { href: '/agreements', label: 'Agreements' },
        { href: '/suppliers', label: 'Suppliers' },
        { href: '/reports', label: 'Reports' },
        { href: '/support', label: 'Support' },
    ];

    return (
        <header className="bg-surface shadow-md fixed w-full z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="text-primary text-2xl font-bold">
                        FlowCore
                    </Link>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex space-x-6">
                    {menuItems.map((item, index) => {
                        // Check if item has submenu
                        if ('submenu' in item) {
                            return (
                                <div key={index} className="relative group">
                                    <button
                                        className="text-secondary hover:text-primary transition inline-flex items-center"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        {item.label}
                                        <svg
                                            className="ml-1 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {/* Submenu */}
                                    <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ul className="py-1">
                                            {item.submenu.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link
                                                        href={subItem.href}
                                                        className="block px-4 py-2 text-secondary hover:bg-gray-100"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="text-secondary hover:text-primary transition"
                                >
                                    {item.label}
                                </Link>
                            );
                        }
                    })}
                </nav>

                {/* Right Side Icons */}
                <div className="flex items-center space-x-4">
                    {/* SearchBar */}
                    <div className="hidden md:block">
                        <SearchBar />
                    </div>

                    {/* Notifications */}
                    <div className="relative">
                        <button
                            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                            className="text-secondary hover:text-primary transition"
                            aria-haspopup="true"
                            aria-expanded={isNotificationOpen ? 'true' : 'false'}
                            aria-label="Notifications"
                        >
                            {/* Bell Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                {/* Bell Icon Path */}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-5-5.917V4a1 1 0 10-2 0v1.083A6.002 6.002 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                        </button>
                        {isNotificationOpen && (
                            <div className="absolute right-0 mt-2 w-80 bg-white shadow-dropdown border rounded z-50">
                                <ul className="list-none p-4">
                                    {notifications.map((notification, index) => (
                                        <li
                                            key={index}
                                            className="p-2 border-b last:border-b-0 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {notification}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* User Icon */}
                    <div className="relative">
                        <Link href="/profile">
                            <button
                                className="text-secondary hover:text-primary transition"
                                aria-label="Go to Profile"
                            >
                                {/* User Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    stroke="none"
                                    aria-hidden="true"
                                >
                                    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                                </svg>
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-secondary hover:text-primary transition"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Mobile Menu"
                    >
                        {/* Hamburger Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    isMobileMenuOpen
                                        ? 'M6 18L18 6M6 6l12 12' // Cross icon when menu is open
                                        : 'M4 6h16M4 12h16M4 18h16' // Hamburger icon when menu is closed
                                }
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-surface shadow-md">
                    <div className="px-6 py-4">
                        {/* SearchBar in mobile menu */}
                        <div className="mb-4">
                            <SearchBar />
                        </div>
                        <nav className="flex flex-col space-y-2">
                            {menuItems.map((item, index) =>
                                'submenu' in item ? (
                                    <div key={index} className="relative">
                                        <button
                                            className="text-secondary hover:text-primary transition flex items-center justify-between w-full"
                                            onClick={() => {
                                                // Handle submenu toggle in mobile view
                                            }}
                                        >
                                            {item.label}
                                            <svg
                                                className="ml-2 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {/* Mobile Submenu */}
                                        <div className="mt-2 ml-4">
                                            {item.submenu.map((subItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    href={subItem.href}
                                                    className="block text-secondary hover:text-primary transition py-1"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="text-secondary hover:text-primary transition"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            )}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
