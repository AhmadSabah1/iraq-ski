import { faqs } from '@/data/faqs';

export default function SupportPage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Support</h1>
            <h2 className="text-xl font-semibold mt-4">FAQ</h2>
            <ul className="mt-4 space-y-4">
                {faqs.map((faq) => (
                    <li key={faq.id} className="border p-4 rounded shadow">
                        <h3 className="text-lg font-semibold">{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
