// data/faqs.ts

export interface FAQ {
    id: number;
    question: string;
    answer: string;
}

export const faqs: FAQ[] = [
    {
        id: 1,
        question: 'How do I log in?',
        answer: 'Click the login button at the top right and enter your credentials.',
    },
    {
        id: 2,
        question: 'How can I reset my password?',
        answer: 'Click the "Forgot Password" link on the login page and follow the instructions to reset your password.',
    },
    {
        id: 3,
        question: 'How do I contact support?',
        answer: 'You can reach support by clicking the "Support" link at the bottom of the page, or by emailing support@company.com.',
    },
    {
        id: 4,
        question: 'Where can I view my active agreements?',
        answer: 'You can view your active agreements by navigating to the "Agreements" section from the main menu.',
    },
    {
        id: 5,
        question: 'How do I update my profile information?',
        answer: 'Click on your profile icon at the top right corner, select "Profile," and then update your information.',
    },
    {
        id: 6,
        question: 'How can I track my order status?',
        answer: 'Go to the "Orders" section in the dashboard, and you will see the status of all your orders.',
    },
    {
        id: 7,
        question: 'Can I cancel an order?',
        answer: 'Yes, you can cancel an order within 24 hours of placing it. Navigate to the "Orders" section and click "Cancel" next to the relevant order.',
    },
    {
        id: 8,
        question: 'What is the refund policy?',
        answer: 'Refunds are available within 30 days of purchase. Please contact support for assistance.',
    },
    {
        id: 9,
        question: 'How do I add a new supplier?',
        answer: 'Go to the "Suppliers" section and click "Add New Supplier." Fill in the required details and submit.',
    },
    {
        id: 10,
        question: 'How can I view reports?',
        answer: 'Navigate to the "Reports" section in the main menu to view and generate reports.',
    },
];
