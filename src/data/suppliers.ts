export interface Supplier {
    id: number;
    name: string;
    type: 'Godkendt' | 'Potentiel';
    contactInfo: string;
    products: string[];
    rating: number;
}

export const suppliers: Supplier[] = [
    {
        id: 1,
        name: 'TechSupplies',
        type: 'Godkendt',
        contactInfo: 'kontakt@techsupplies.dk',
        products: ['Laptop Pro'],
        rating: 4.8,
    },
    // Tilføj flere leverandører
];
