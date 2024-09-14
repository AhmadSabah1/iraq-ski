'use client';
import Link from 'next/link';

export default function HomePage() {
    const userName = "John Doe"; // This can be dynamically fetched based on the user

    return (
        <div className="p-8">
            {/* Welcome Section */}
            <h1 className="text-3xl font-bold mb-4">Welcome back, {userName}!</h1>
            <p className="mb-8">Here is an overview of your recent activities and system status.</p>

            {/* KPIs Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <KpiCard
                    title="Active Agreements"
                    value="15"
                    description="Ongoing agreements."
                    link="/agreements"
                />
                <KpiCard
                    title="Suppliers"
                    value="8"
                    description="Approved suppliers."
                    link="/suppliers"
                />
                <KpiCard
                    title="Upcoming Deadlines"
                    value="3"
                    description="Agreements with deadlines this month."
                    link="/agreements/upcoming"
                />
            </section>

            {/* Quick Actions */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="flex space-x-4">
                    <Link href="/agreements/new" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition">
                        Create New Agreement
                    </Link>
                    <Link href="/reports" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-500 transition">
                        View Reports
                    </Link>
                    <Link href="/support" className="bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition">
                        Contact Support
                    </Link>
                </div>
            </section>

            {/* Recent Activity Feed */}
            <section>
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <RecentActivityList activities={recentActivities} />
            </section>
        </div>
    );
}

// Component for KPI Cards
function KpiCard({
                     title,
                     value,
                     description,
                     link,
                 }: {
    title: string;
    value: string;
    description: string;
    link: string;
}) {
    return (
        <Link href={link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition block">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-2xl font-bold text-blue-600 mb-1">{value}</p>
            <p className="text-gray-500">{description}</p>
        </Link>
    );
}

// Recent Activity List Component
function RecentActivityList({ activities }: { activities: { id: number; text: string; date: string }[] }) {
    return (
        <ul className="space-y-4">
            {activities.map((activity) => (
                <li key={activity.id} className="p-4 bg-white rounded-lg shadow-md">
                    <p>{activity.text}</p>
                    <p className="text-sm text-gray-500">{activity.date}</p>
                </li>
            ))}
        </ul>
    );
}

// Mock data for recent activities
const recentActivities = [
    { id: 1, text: "Agreement with Supplier X has been renewed.", date: "September 12, 2024" },
    { id: 2, text: "New Q3 report has been added.", date: "September 10, 2024" },
    { id: 3, text: "Supplier Y has updated their offer.", date: "September 8, 2024" },
];
