'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AgreementStatus } from '../../../data/enums';
import { agreements, Agreement } from '../../../data/agreements';

export default function NewAgreementPage() {
    const router = useRouter();

    // State til formularfelter
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState<AgreementStatus>(AgreementStatus.Aktiv);
    const [supplier, setSupplier] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [terms, setTerms] = useState('');

    // Håndter formularindsendelse
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Opret nyt aftaleobjekt
        const newAgreement: Agreement = {
            id: agreements.length + 1,
            title,
            status,
            supplier,
            startDate,
            endDate,
            terms,
        };

        // Tilføj til agreements-arrayet (i en rigtig app ville dette være et API-kald)
        agreements.push(newAgreement);

        // Naviger tilbage til aftaler-siden
        router.push('/agreements');
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Opret ny aftale</h1>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                {/* Titel */}
                <div>
                    <label className="block text-sm font-medium">Titel:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>

                {/* Status */}
                <div>
                    <label className="block text-sm font-medium">Status:</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value as AgreementStatus)}
                        className="border p-2 rounded w-full"
                    >
                        {Object.values(AgreementStatus).map((statusOption) => (
                            <option key={statusOption} value={statusOption}>
                                {statusOption}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Leverandør */}
                <div>
                    <label className="block text-sm font-medium">Leverandør:</label>
                    <input
                        type="text"
                        value={supplier}
                        onChange={(e) => setSupplier(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>

                {/* Startdato */}
                <div>
                    <label className="block text-sm font-medium">Startdato:</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>

                {/* Slutdato */}
                <div>
                    <label className="block text-sm font-medium">Slutdato:</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>

                {/* Vilkår */}
                <div>
                    <label className="block text-sm font-medium">Vilkår:</label>
                    <textarea
                        value={terms}
                        onChange={(e) => setTerms(e.target.value)}
                        className="border p-2 rounded w-full"
                        rows={4}
                    />
                </div>

                {/* Indsend knap */}
                <button
                    type="submit"
                    className="bg-accent text-white p-2 rounded"
                >
                    Opret aftale
                </button>
            </form>
        </div>
    );
}
