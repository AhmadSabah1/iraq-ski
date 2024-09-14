'use client';
import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import { ProductCategory } from '@/data/enums';
import ProductList from '../../../components/ProductList';

export default function CategoryPage() {
    const params = useParams();
    const slugParam = params.slug;

    // Sikrer, at 'slug' er en streng
    const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

    // Map slug til produktkategori
    const categoryMap: { [key: string]: ProductCategory } = {
        'it-loesninger': ProductCategory.ITLoesninger,
        'kontorartikler': ProductCategory.Kontorartikler,
        'transporttjenester': ProductCategory.Transporttjenester,
        'byggematerialer': ProductCategory.Byggematerialer,
    };

    const category = categoryMap[slug];

    if (!category) {
        return <p>Kategorien blev ikke fundet.</p>;
    }

    // Filtrer produkter baseret på kategori
    const categoryProducts = products.filter(
        (product) => product.category === category
    );

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">{category}</h1>
            {/* Din filtrerings- og produktlistekode */}
            <ProductList products={categoryProducts} />
        </div>
    );
}