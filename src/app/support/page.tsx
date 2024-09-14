// app/support/page.tsx

import SupportList from '../../components/SupportList';

export default function SupportPage() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Support</h1>
            <SupportList />
        </div>
    );
}
