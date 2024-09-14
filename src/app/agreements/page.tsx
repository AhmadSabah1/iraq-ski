// /pages/agreements/page.tsx

import AgreementList from '../../components/AgreementList';

export default function AgreementsPage() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Agreements</h1>
            <AgreementList />
        </div>
    );
}
