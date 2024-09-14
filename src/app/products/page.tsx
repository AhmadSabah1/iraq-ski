// components/ProductList.tsx
import {products} from "@/data/products";

export default function ProductList() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Products</h2>
            <ul className="space-y-4">
                {products.map((product) => (
                    <li key={product.id} className="border p-4 rounded-lg">
                        <h3 className="text-lg font-bold">{product.name}</h3>
                        <p>Category: {product.category}</p>
                        <p>Price: ${product.price}</p>
                        <p>Supplier: {product.supplier}</p>
                        <p>Rating: {product.rating}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
