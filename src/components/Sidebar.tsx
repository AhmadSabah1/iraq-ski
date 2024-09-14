import Link from 'next/link';

export default function Sidebar({ categories }: { categories: { name: string; slug: string }[] }) {
    return (
        <aside className="hidden md:block w-64 bg-gray-200 p-4">
            <h2 className="text-xl font-bold mb-4">Kategorier</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category.slug} className="mb-2">
                        <Link href={`/products/${category.slug}`} className="text-blue-500 hover:underline">
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
