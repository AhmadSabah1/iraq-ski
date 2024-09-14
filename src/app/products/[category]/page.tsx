'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { products } from '@/data/products';
import ProductList from '../../../components/ProductList';

export default function CategoryPage({ params }: { params: { category: string } }) {
    const router = useRouter();
    const { category } = params;

    // Filtrer produkter baseret på kategori
    const categoryProducts = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
    );

    // State til filtrering
    const [priceFilter, setPriceFilter] = useState<number | null>(null);
    const [supplierFilter, setSupplierFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState<number | null>(null);

    // Anvend filtrering
    const filteredProducts = categoryProducts.filter((product) => {
        let matches = true;
        if (priceFilter !== null) matches = matches && product.price <= priceFilter;
        if (supplierFilter) matches = matches && product.supplier === supplierFilter;
        if (ratingFilter !== null) matches = matches && product.rating >= ratingFilter;
        return matches;
    });

    // Unikke leverandører til filtermuligheder
    const suppliers = Array.from(new Set(categoryProducts.map((product) => product.supplier)));

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">{category}</h1>

            {/* Filtrering */}
            <div className="mt-4 mb-8">
                <h2 className="text-xl font-semibold">Filtrering</h2>
                <div className="flex space-x-4 mt-2">
                    {/* Prisfilter */}
                    <div>
                        <label className="block text-sm font-medium">Maks pris:</label>
                        <input
                            type="number"
                            value={priceFilter || ''}
                            onChange={(e) => setPriceFilter(e.target.value ? parseInt(e.target.value) : null)}
                            className="border p-1 rounded"
                        />
                    </div>

                    {/* Leverandørfilter */}
                    <div>
                        <label className="block text-sm font-medium">Leverandør:</label>
                        <select
                            value={supplierFilter}
                            onChange={(e) => setSupplierFilter(e.target.value)}
                            className="border p-1 rounded"
                        >
                            <option value="">Alle</option>
                            {suppliers.map((supplier) => (
                                <option key={supplier} value={supplier}>
                                    {supplier}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Rating-filter */}
                    <div>
                        <label className="block text-sm font-medium">Minimum rating:</label>
                        <select
                            value={ratingFilter || ''}
                            onChange={(e) => setRatingFilter(e.target.value ? parseFloat(e.target.value) : null)}
                            className="border p-1 rounded"
                        >
                            <option value="">Alle</option>
                            <option value="5">5 stjerner</option>
                            <option value="4">4 stjerner og op</option>
                            <option value="3">3 stjerner og op</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Produktliste */}
            <ProductList products={filteredProducts} />
        </div>
    );
}
