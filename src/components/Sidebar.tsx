// components/Sidebar.tsx

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface Category {
    name: string;
    slug: string;
    icon: JSX.Element;
}

export default function Sidebar({ categories }: { categories: Category[] }) {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <aside
            className={`${
                isCollapsed ? 'w-20' : 'w-64'
            } bg-surface border-r transition-all duration-300`}
        >
            <div className="p-6 flex flex-col h-full">
                {/* Collapse Button */}
                <button
                    className="mb-6 text-secondary hover:text-primary transition self-end"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    aria-label={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
                >
                    {/* Collapse Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        {isCollapsed ? (
                            <path d="M9 5l7 7-7 7" />
                        ) : (
                            <path d="M15 19l-7-7 7-7" />
                        )}
                    </svg>
                </button>

                <h2
                    className={`text-xl font-semibold mb-4 transition-opacity ${
                        isCollapsed ? 'opacity-0' : 'opacity-100'
                    }`}
                >
                    Categories
                </h2>

                <ul className="space-y-2 flex-1">
                    {categories.map((category) => {
                        const isActive = pathname.includes(category.slug);
                        return (
                            <li key={category.slug}>
                                <Link
                                    href={`/products/${category.slug}`}
                                    className={`flex items-center p-2 rounded hover:bg-gray-100 transition ${
                                        isActive ? 'bg-gray-100' : ''
                                    }`}
                                >
                                    {/* Icon */}
                                    <span className="text-primary">{category.icon}</span>
                                    {/* Category Name */}
                                    {!isCollapsed && (
                                        <span className="ml-3 text-secondary">{category.name}</span>
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Optional Footer */}
                {!isCollapsed && (
                    <div className="mt-auto">
                        <p className="text-sm text-muted">
                            &copy; {new Date().getFullYear()} FlowCore
                        </p>
                    </div>
                )}
            </div>
        </aside>
    );
}
