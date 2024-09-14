import Link from 'next/link';
import {slugify} from "@/utils/slugify";

export default function ProductsPage() {
    const categories = [
        { name: 'IT-løsninger', slug: slugify('IT-løsninger') },
        { name: 'Kontorartikler', slug: slugify('Kontorartikler') },
        { name: 'Transporttjenester', slug: slugify('Transporttjenester') },
        { name: 'Byggematerialer', slug: slugify('Byggematerialer') },
    ];

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Produkter og ydelser</h1>
            <p>Vælg en kategori for at se produkter og ydelser.</p>
            <ul>
                {categories.map((category) => (
                    <li key={category.slug} className="mb-2">
                        <Link href={`/products/${category.slug}`} className="text-blue-500 hover:underline">
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
