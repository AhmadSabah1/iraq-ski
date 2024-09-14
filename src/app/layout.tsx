import './globals.css';
import {ReactNode} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { slugify } from '../utils/slugify';


export default function RootLayout({children}: { children: ReactNode }) {
    const categories = [
        { name: 'IT-løsninger', slug: slugify('IT-løsninger') },
        { name: 'Kontorartikler', slug: slugify('Kontorartikler') },
        { name: 'Transporttjenester', slug: slugify('Transporttjenester') },
        { name: 'Byggematerialer', slug: slugify('Byggematerialer') },
    ];
    return (
        <html lang="da">
        <body className="min-h-screen flex flex-col">
        <Header/>
        <div className="flex flex-1">
            <Sidebar categories={categories}/>
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
        <Footer/>
        </body>
        </html>
    );
}
