// app/agreements/new/page.tsx

'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AgreementStatus } from '../../../data/enums';
import { agreements, Agreement } from '../../../data/agreements';

export default function NewAgreementPage() {
    const router = useRouter();

    // Form state
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState<AgreementStatus>(AgreementStatus.Active);
    const [supplier, setSupplier] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [terms, setTerms] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newAgreement: Agreement = {
            id: agreements.length + 1,
            title,
            status,
            supplier,
            startDate,
            endDate,
            terms,
        };

        agreements.push(newAgreement);

        router.push('/agreements');
    };

    return (
        <div className="p-8 bg-background min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Create New Agreement</h1>
            <form onSubmit={handleSubmit} className="bg-surface p-6 shadow-card rounded-lg">
                {/* Title */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border rounded focus:border-primary focus:outline-none"
                        required
                    />
                </div>

                {/* Status */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Status</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value as AgreementStatus)}
                        className="w-full p-2 border rounded focus:border-primary focus:outline-none"
                    >
                        {Object.values(AgreementStatus).map((statusOption) => (
                            <option key={statusOption} value={statusOption}>
                                {statusOption}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Supplier */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Supplier</label>
                    <input
                        type="text"
                        value={supplier}
                        onChange={(e) => setSupplier(e.target.value)}
                        className="w-full p-2 border rounded focus:border-primary focus:outline-none"
                        required
                    />
                </div>

                {/* Start Date */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full p-2 border rounded focus:border-primary focus:outline-none"
                        required
                    />
                </div>

                {/* End Date */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full p-2 border rounded focus:border-primary focus:outline-none"
                        required
                    />
                </div>

                {/* Terms */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">Terms</label>
                    <textarea
                        value={terms}
                        onChange={(e) => setTerms(e.target.value)}
                        className="w-full p-2 border rounded focus:border-primary focus:outline-none"
                        rows={4}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
                >
                    Create Agreement
                </button>
            </form>
        </div>
    );
}
