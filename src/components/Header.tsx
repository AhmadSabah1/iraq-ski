import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <div className="text-xl font-bold">Logo</div>
            <nav className="hidden md:flex space-x-4">
                <Link href="/dashboard" className="hover:text-accent">Dashboard</Link>
                <Link href="/products" className="hover:text-accent">Produkter og ydelser</Link>
                <Link href="/agreements" className="hover:text-accent">Aftaler</Link>
                <Link href="/suppliers" className="hover:text-accent">Leverandører</Link>
                <Link href="/reports" className="hover:text-accent">Rapporter</Link>
                <Link href="/support" className="hover:text-accent">Support</Link>
            </nav>
        </header>
    );
}
