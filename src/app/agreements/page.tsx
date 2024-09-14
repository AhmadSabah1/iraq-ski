import { agreements } from '@/data/agreements';

export default function AgreementsPage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Aftaler</h1>
            <ul className="mt-4 space-y-4">
                {agreements.map((agreement) => (
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
