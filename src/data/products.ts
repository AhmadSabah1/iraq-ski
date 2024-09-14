export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    supplier: string;
    rating: number;
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Laptop Pro',
        category: 'IT-løsninger',
        price: 15000,
        supplier: 'TechSupplies',
        rating: 4.8,
    },
    {
        id: 2,
        name: 'Ergonomisk Stol',
        category: 'Kontorartikler',
        price: 1200,
        supplier: 'OfficeGoods',
        rating: 4.2,
    },
    {
        id: 3,
        name: 'Transport Service X',
        category: 'Transporttjenester',
        price: 5000,
        supplier: 'FastTrans',
        rating: 4.5,
    },
    {
        id: 4,
        name: 'Cement Mix 500kg',
        category: 'Byggematerialer',
        price: 2500,
        supplier: 'BuildMaster',
        rating: 4.0,
    },
    // Tilføj flere produkter efter behov
];
