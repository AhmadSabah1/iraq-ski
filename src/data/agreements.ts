export interface Agreement {
    id: number;
    title: string;
    status: 'Aktiv' | 'Udløbet' | 'Under Forhandling';
    supplier: string;
    startDate: string;
    endDate: string;
    terms: string;
}

export const agreements: Agreement[] = [
    {
        id: 1,
        title: 'Serviceaftale med TechSupplies',
        status: 'Aktiv',
        supplier: 'TechSupplies',
        startDate: '2023-01-01',
        endDate: '2023-12-31',
        terms: 'Årlig support og vedligeholdelse.',
    },
];
