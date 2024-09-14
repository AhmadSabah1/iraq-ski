import { suppliers } from '../../data/suppliers';

export default function SuppliersPage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Leverandører</h1>
            <ul className="mt-4 space-y-4">
                {suppliers.map((supplier) => (
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
