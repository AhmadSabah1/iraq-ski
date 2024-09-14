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
    {
        id: 2,
        question: 'Hvordan opretter jeg en ny aftale?',
        answer: 'Gå til "Aftaler"-siden og klik på "Opret ny aftale"-knappen.',
    },
    {
        id: 3,
        question: 'Hvordan kontakter jeg support?',
        answer: 'Gå til "Support"-siden og udfyld kontaktformularen eller ring til os på 1234 5678.',
    },
    {
        id: 4,
        question: 'Hvordan finder jeg produkter?',
        answer: 'Brug søgefeltet øverst eller naviger til "Produkter og ydelser" i menuen.',
    },
    {
        id: 5,
        question: 'Hvordan ændrer jeg mine kontooplysninger?',
        answer: 'Klik på brugerikonet øverst og vælg "Indstillinger" for at opdatere dine oplysninger.',
    },
];
