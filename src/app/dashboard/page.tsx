'use client';
import Link from 'next/link';

export default function DashboardPage() {
    // Dummy-data for KPI'er
    const kpis = {
        activeAgreements: 23,
        upcomingDeadlines: 5,
        newNotifications: 3,
    };

    // Dummy-data for aktivitetsfeed
    const activityFeed = [
        'Leverandør X opdaterede aftalen.',
        'Du modtog en ny besked fra support.',
        'Leverandør Y har opdateret deres tilbud.',
        'Ny rapport tilgængelig: Indkøbsrapport Q2.',
        'Du har en kommende deadline for aftale med TechSupplies.',
    ];

    // Handler-funktioner til genvejsknapper
    const handleViewFavorites = () => {
        alert('Se favoritter');
    };

    const handleSubmitReport = () => {
        alert('Indsend rapport');
    };

    return (
        <div className="p-8 bg-background min-h-screen text-text">
            <h1 className="text-2xl font-bold">Velkommen tilbage, [Brugernavn]!</h1>

            {/* KPI-sektion */}
            <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-xl font-semibold">Aktive aftaler</h2>
                    <p className="text-3xl font-bold">{kpis.activeAgreements}</p>
                </div>
                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-xl font-semibold">Kommende deadlines</h2>
                    <p className="text-3xl font-bold">{kpis.upcomingDeadlines}</p>
                </div>
                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-xl font-semibold">Nye notifikationer</h2>
                    <p className="text-3xl font-bold">{kpis.newNotifications}</p>
                </div>
            </section>

            {/* Genveje */}
            <section className="mt-8">
                <h2 className="text-xl font-semibold">Genveje</h2>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
                    {/* Link til oprettelse af ny aftale */}
                    <Link href="/agreements/new" className="bg-accent text-white p-4 rounded text-center">
                        Opret ny aftale
                    </Link>
                    {/* Knap til at se favoritter */}
                    <button onClick={handleViewFavorites} className="bg-accent text-white p-4 rounded">
                        Se favoritter
                    </button>
                    {/* Knap til at indsende rapport */}
                    <button onClick={handleSubmitReport} className="bg-success text-white p-4 rounded">
                        Indsend rapport
                    </button>
                </div>
            </section>

            {/* Aktivitetsfeed */}
            <section className="mt-8">
                <h2 className="text-xl font-semibold">Seneste aktiviteter</h2>
                <div className="bg-white p-4 shadow rounded mt-4">
                    <ul className="list-disc list-inside space-y-2">
                        {activityFeed.map((activity, index) => (
                            <li key={index} className="text-muted">
                                {activity}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
