import {agreements} from "@/data/agreements";
import {AgreementStatus} from "@/data/enums";

export default function AgreementList() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Agreements</h2>

            {/* Grid layout for desktop view and list for mobile */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {agreements.map((agreement) => (
                    <div
                        key={agreement.id}
                        className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-lg font-bold mb-2">{agreement.title}</h3>
                            <p className="text-gray-600 mb-1">
                                <span className="font-semibold">Supplier:</span> {agreement.supplier}
                            </p>
                            <p className="text-gray-600 mb-1">
                                <span className="font-semibold">Start Date:</span> {agreement.startDate}
                            </p>
                            <p className="text-gray-600 mb-1">
                                <span className="font-semibold">End Date:</span> {agreement.endDate}
                            </p>
                            <p className="text-gray-600 mb-4">
                                <span className="font-semibold">Terms:</span> {agreement.terms}
                            </p>
                        </div>

                        {/* Status icon and styled text, fixed at the bottom */}
                        <div className={`text-sm font-semibold ${getStatusClass(agreement.status)} mt-4`}>
                            {renderStatusIcon(agreement.status)} {agreement.status}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Helper function to apply different styles based on the agreement status
function getStatusClass(status: AgreementStatus): string {
    switch (status) {
        case AgreementStatus.Active:
            return 'text-green-600';
        case AgreementStatus.Expired:
            return 'text-red-600';
        case AgreementStatus.Pending:
            return 'text-yellow-600';
        case AgreementStatus.Canceled:
            return 'text-gray-500';
        case AgreementStatus.Negotiation:
            return 'text-blue-600';
        default:
            return '';
    }
}

// Optional helper function to add icons based on the agreement status
function renderStatusIcon(status: AgreementStatus) {
    switch (status) {
        case AgreementStatus.Active:
            return '✔️';
        case AgreementStatus.Expired:
            return '❌';
        case AgreementStatus.Pending:
            return '⏳';
        case AgreementStatus.Canceled:
            return '🚫';
        case AgreementStatus.Negotiation:
            return '🔄';
        default:
            return '';
    }
}
