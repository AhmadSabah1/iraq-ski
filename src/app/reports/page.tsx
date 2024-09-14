import { reports } from '../../data/reports';

export default function ReportsPage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Rapporter</h1>
            <ul className="mt-4 space-y-4">
                {reports.map((report) => (
                    <li key={report.id} className="border p-4 rounded shadow">
                        <h2 className="text-lg font-semibold">{report.title}</h2>
                        <p>Dato: {report.date}</p>
                        <p>Type: {report.type}</p>
                        <p>Resumé: {report.summary}</p>
                        <button className="mt-2 bg-accent text-white p-2 rounded">Se rapport</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
