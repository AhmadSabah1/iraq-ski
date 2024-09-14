'use client'
export default function DashboardPage() {
    const kpis = {
        activeContracts: 23,
        upcomingDeadlines: 5,
        newNotifications: 3,
    };

    const handleCreateContract = () => {
        alert('Opret ny aftale');
        // Implementer yderligere logik her
    };

    const handleViewFavorites = () => {
        alert('Se favoritter');
        // Implementer yderligere logik her
    };

    const handleSubmitReport = () => {
        alert('Indsend rapport');
        // Implementer yderligere logik her
    };

    const activityFeed = [
        "Leverandør X opdaterede aftalen.",
        "Du modtog en ny besked fra support.",
        "Leverandør Y har opdateret deres tilbud.",
    ];

    return (
        <div className="p-8 bg-background min-h-screen text-text">
            <h1 className="text-2xl font-bold">Velkommen tilbage, [Brugernavn]!</h1>

            {/* KPI'er */}
            <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 shadow rounded">Aktive aftaler: {kpis.activeContracts}</div>
                <div className="bg-white p-4 shadow rounded">Kommende deadlines: {kpis.upcomingDeadlines}</div>
                <div className="bg-white p-4 shadow rounded">Nye notifikationer: {kpis.newNotifications}</div>
            </section>

            {/* Genveje */}
            <section className="mt-8">
                <h2 className="text-xl font-semibold">Genveje</h2>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
                    <button onClick={handleCreateContract} className="bg-accent text-white p-4 rounded">
                        Opret ny aftale
                    </button>
                    <button onClick={handleViewFavorites} className="bg-accent text-white p-4 rounded">
                        Se favoritter
                    </button>
                    <button onClick={handleSubmitReport} className="bg-success text-white p-4 rounded">
                        Indsend rapport
                    </button>
                </div>
            </section>

            {/* Aktivitetsfeed */}
            <section className="mt-8">
                <h2 className="text-xl font-semibold">Seneste aktiviteter</h2>
                <div className="bg-white p-4 shadow rounded mt-4">
                    <ul className="list-disc list-inside">
                        {activityFeed.map((activity, index) => (
                            <li key={index} className="text-muted">{activity}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
