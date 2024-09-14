// app/dashboard/page.tsx

'use client';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { ChartOptions } from 'chart.js';
import 'chart.js/auto';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function DashboardPage() {
    // Dummy data for KPIs
    const kpis = [
        { title: 'Active Agreements', value: 23, icon: '📄', growth: 5 },
        { title: 'Upcoming Deadlines', value: 5, icon: '⏰', growth: -1 },
        { title: 'New Notifications', value: 3, icon: '🔔', growth: 2 },
    ];

    // Dummy data for Activity Feed
    const activityFeed = [
        'Supplier X updated the agreement.',
        'You received a new message from support.',
        'Supplier Y updated their offer.',
        'New report available: Q2 Purchasing Report.',
        'Upcoming deadline with TechSupplies.',
    ];

    // Chart data with correct types
    const chartData: {
        datasets: {
            backgroundColor: string;
            borderColor: string;
            tension: number;
            data: number[];
            label: string;
            fill: boolean
        }[];
        labels: string[]
    } = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Agreements',
                data: [12, 19, 14, 20, 15, 22],
                backgroundColor: '#0052CC',
                borderColor: '#0052CC',
                tension: 0.4,
                fill: false as const, // Correctly typed 'fill' property
            },
        ],
    };

    // Chart options
    const chartOptions: ChartOptions<'line'> = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="p-8 bg-background min-h-screen text-secondary">
            <h1 className="text-3xl font-bold mb-6">Welcome back, John Doe!</h1>

            {/* KPI Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {kpis.map((kpi, index) => (
                    <div key={index} className="bg-surface p-6 shadow-card rounded-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-medium">{kpi.title}</h2>
                                <p className="text-3xl font-bold mt-2">{kpi.value}</p>
                                <p
                                    className={`mt-1 text-sm ${
                                        kpi.growth >= 0 ? 'text-success' : 'text-danger'
                                    }`}
                                >
                                    {kpi.growth >= 0 ? `+${kpi.growth}` : kpi.growth} since last
                                    month
                                </p>
                            </div>
                            <div className="text-4xl">{kpi.icon}</div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Charts Section */}
            <section className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">Agreements Over Time</h2>
                <div className="bg-surface p-6 shadow-card rounded-lg">
                    <div className="flex justify-center">
                        <ResizableBox
                            width={600}
                            height={300}
                            minConstraints={[300, 200]}
                            maxConstraints={[1000, 600]}
                            resizeHandles={['se']}
                            className="border border-gray-300"
                        >
                            <div style={{ width: '100%', height: '100%' }}>
                                <Line data={chartData} options={chartOptions} />
                            </div>
                        </ResizableBox>
                    </div>
                </div>
            </section>

            {/* Activity Feed */}
            <section className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
                <div className="bg-surface p-6 shadow-card rounded-lg">
                    <ul className="space-y-4">
                        {activityFeed.map((activity, index) => (
                            <li key={index} className="flex items-center">
                                <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
                                    {/* Activity Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 3a1 1 0 00-.894.553l-7 14A1 1 0 003 19h14a1 1 0 00.894-1.447l-7-14A1 1 0 0010 3z" />
                                    </svg>
                                </div>
                                <p>{activity}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
