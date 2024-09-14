// components/SupportList.tsx
import { faqs } from '@/data/faqs'; // Import FAQs or support data

export default function SupportList() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Support FAQs</h2>

            {/* Grid layout for desktop view and list for mobile */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {faqs.map((faq) => (
                    <div
                        key={faq.id}
                        className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                            <p className="text-gray-600 mb-4">
                                <span className="font-semibold">Answer:</span> {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
