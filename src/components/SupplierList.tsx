import {suppliers} from "@/data/suppliers";

export default function SupplierList() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Suppliers</h2>

            {/* Grid layout for desktop view and list for mobile */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {suppliers.map((supplier) => (
                    <div
                        key={supplier.id}
                        className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-lg font-bold mb-2">{supplier.name}</h3>
                            <p className="text-gray-600 mb-1">
                                <span className="font-semibold">Type:</span> {supplier.type}
                            </p>
                            <p className="text-gray-600 mb-1">
                                <span className="font-semibold">Contact:</span> {supplier.contactInfo}
                            </p>
                            <p className="text-gray-600 mb-1">
                                <span className="font-semibold">Products:</span> {supplier.products.join(', ')}
                            </p>
                        </div>

                        {/* Rating at the bottom */}
                        <div className="mt-4 text-sm font-semibold text-yellow-500">
                            ⭐ {supplier.rating}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
