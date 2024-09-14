// components/ReportList.tsx
import { reports } from "@/data/reports";

export default function ReportList() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Reports</h2>

            {/* Grid layout for desktop view and list for mobile */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {reports.map((report) => (
                    <div key={report.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-bold mb-2">{report.title}</h3>
                            <p className="text-gray-600 mb-1">
                                <span className="font-semibold">Type:</span> {report.type}
                            </p>
                            <p className="text-gray-600 mb-1">
                                <span className="font-semibold">Date:</span> {report.date}
                            </p>
                            <p className="text-gray-600 mb-4">
                                <span className="font-semibold">Summary:</span> {report.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
