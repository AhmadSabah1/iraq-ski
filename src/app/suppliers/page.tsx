'use client';
import { useState } from 'react';
import { suppliers } from '@/data/suppliers';
import { SupplierType } from '@/data/enums';

export default function SuppliersPage() {
    const [selectedType, setSelectedType] = useState<SupplierType | ''>('');

    const filteredSuppliers = suppliers.filter(
        (supplier) => !selectedType || supplier.type === selectedType
    );

    const supplierTypes = Object.values(SupplierType);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Leverandører</h1>

            {/* Filtrering */}
            <div className="mt-4">
                <label className="block text-sm font-medium">Filter efter type:</label>
                <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value as SupplierType | '')}
                    className="border p-1 rounded"
                >
                    <option value="">Alle</option>
                    {supplierTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            {/* Liste over leverandører */}
            <ul className="mt-4 space-y-4">
                {filteredSuppliers.map((supplier) => (
                    <li key={supplier.id} className="border p-4 rounded shadow">
                        <h2 className="text-lg font-semibold">{supplier.name}</h2>
                        <p>Type: {supplier.type}</p>
                        <p>Kontakt: {supplier.contactInfo}</p>
                        <p>Produkter: {supplier.products.join(', ')}</p>
                        <p>Rating: {supplier.rating} stjerner</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
