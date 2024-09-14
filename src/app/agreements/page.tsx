'use client';
import {useState} from 'react';
import Link from 'next/link';
import {agreements} from '../../data/agreements';

export default function AgreementsPage() {
    const [agreementList] = useState(agreements);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Aftaler</h1>

            {/* Knap til at oprette ny aftale */}
            <div className="mt-4">
                <Link href="/agreements/new" className="bg-accent text-white p-2 rounded">
                    Opret ny aftale
                </Link>
            </div>

            {/* Liste over aftaler */}
            <ul className="mt-4 space-y-4">
                {agreementList.map((agreement) => (
                    <li key={agreement.id} className="border p-4 rounded shadow">
                        <h2 className="text-lg font-semibold">{agreement.title}</h2>
                        <p>Status: {agreement.status}</p>
                        <p>Leverandør: {agreement.supplier}</p>
                        <p>Startdato: {agreement.startDate}</p>
                        <p>Slutdato: {agreement.endDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
