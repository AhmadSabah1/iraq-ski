import { Product } from '@/data/products';

export default function ProductList({ products }: { products: Product[] }) {
    if (products.length === 0) {
        return <p>Ingen produkter fundet.</p>;
    }

    return (
        <ul className="space-y-4">
            {products.map((product) => (
                    <li key={product.id} className="border p-4 rounded shadow">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p>Pris: {product.price} DKK</p>
    <p>Leverandør: {product.supplier}</p>
    <p>Rating: {product.rating} stjerner</p>
    </li>
))}
    </ul>
);
}
