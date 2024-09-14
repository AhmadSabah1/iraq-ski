export interface FAQ {
    id: number;
    question: string;
    answer: string;
}

export const faqs: FAQ[] = [
    {
        id: 1,
        question: 'Hvordan logger jeg ind?',
        answer: 'Klik på login-knappen øverst til højre og indtast dine oplysninger.',
    },
    // Tilføj flere FAQs
];
