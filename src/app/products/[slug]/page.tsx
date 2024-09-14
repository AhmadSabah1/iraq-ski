'use client';
import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import { ProductCategory } from '@/data/enums';
import ProductList from '../../../components/ProductList';

export default function CategoryPage() {
    const params = useParams();
    const slugParam = params.slug;

    // Ensure 'slug' is a string
    const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

    // Map slug to product category
    const categoryMap: { [key: string]: ProductCategory } = {
        'it-solutions': ProductCategory.ITSolutions,
        'office-supplies': ProductCategory.OfficeSupplies,
        'transport-services': ProductCategory.TransportServices,
        'building-materials': ProductCategory.BuildingMaterials,
    };

    const category = categoryMap[slug];

    if (!category) {
        return <p>Category not found.</p>;
    }

    // Filter products based on category
    const categoryProducts = products.filter(
        (product) => product.category === category
    );

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">{category}</h1>
            <ProductList products={categoryProducts} />
        </div>
    );
}
