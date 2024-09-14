// app/layout.tsx

'use client';
import './globals.css';
import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import {
    BuildingOfficeIcon,
    ClipboardDocumentListIcon,
    ComputerDesktopIcon,
    TruckIcon
} from '@heroicons/react/24/outline';

export default function RootLayout({ children }: { children: ReactNode }) {
// app/layout.tsx or wherever you define categories



    const categories = [
        {
            name: 'IT Solutions',
            slug: 'it-solutions',
            icon: <ComputerDesktopIcon className="h-6 w-6" />,
        },
        {
            name: 'Office Supplies',
            slug: 'office-supplies',
            icon: <ClipboardDocumentListIcon className="h-6 w-6" />,
        },
        {
            name: 'Transport Services',
            slug: 'transport-services',
            icon: <TruckIcon className="h-6 w-6" />,
        },
        {
            name: 'Building Materials',
            slug: 'building-materials',
            icon: <BuildingOfficeIcon className="h-6 w-6" />,
        },
    ];

    return (
        <html lang="en">
        <body className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 pt-16">
            {/* Adjusted for fixed header */}
            <Sidebar categories={categories} />
            <main className="flex-1 p-8 bg-background">{children}</main>
        </div>
        <Footer />
        </body>
        </html>
    );
}
