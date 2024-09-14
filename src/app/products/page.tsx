import Link from 'next/link';

export default function ProductsPage() {
    const categories = ['IT-løsninger', 'Kontorartikler', 'Transporttjenester', 'Byggematerialer'];

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Produkter og ydelser</h1>
            <p>Vælg en kategori for at se produkter og ydelser.</p>
            <ul className="mt-4 space-y-2">
                {categories.map((category) => (
                    <li key={category}>
                        <Link
                            href={`/products/${encodeURIComponent(category)}`}
                            className="text-accent hover:underline"
                        >
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
