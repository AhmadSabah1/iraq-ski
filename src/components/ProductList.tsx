import {Product} from "@/data/products";

interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
                >
                    <div>
                        <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-1">
                            <span className="font-semibold">Supplier:</span> {product.supplier}
                        </p>
                        <p className="text-gray-600 mb-1">
                            <span className="font-semibold">Price:</span> ${product.price}
                        </p>
                        <p className="text-gray-600 mb-4">
                            <span className="font-semibold">Category:</span> {product.category}
                        </p>
                    </div>

                    {/* Rating at the bottom */}
                    <div className="mt-4 text-sm font-semibold text-yellow-500">
                        ⭐ {product.rating}
                    </div>
                </div>
            ))}
        </div>
    );
}
