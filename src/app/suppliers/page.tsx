import SupplierList from "@/components/SupplierList";

export default function SuppliersPage() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Approved and Potential Suppliers</h1>
            <SupplierList />
        </div>
    );
}
