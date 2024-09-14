import { ProductCategory } from './enums';

export interface Product {
    id: number;
    name: string;
    category: ProductCategory;
    price: number;
    supplier: string;
    rating: number;
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Laptop Pro',
        category: ProductCategory.ITLoesninger,
        price: 15000,
        supplier: 'TechSupplies',
        rating: 4.8,
    },
    {
        id: 2,
        name: 'Ergonomisk Stol',
        category: ProductCategory.Kontorartikler,
        price: 1200,
        supplier: 'OfficeGoods',
        rating: 4.2,
    },
    {
        id: 3,
        name: 'Transport Service X',
        category: ProductCategory.Transporttjenester,
        price: 5000,
        supplier: 'FastTrans',
        rating: 4.5,
    },
    {
        id: 4,
        name: 'Cement Mix 500kg',
        category: ProductCategory.Byggematerialer,
        price: 2500,
        supplier: 'BuildMaster',
        rating: 4.0,
    },
    // Tilføjer flere produkter
    {
        id: 5,
        name: 'Cloud Software Suite',
        category: ProductCategory.ITLoesninger,
        price: 10000,
        supplier: 'CloudCorp',
        rating: 4.7,
    },
    {
        id: 6,
        name: 'Papir A4 500 ark',
        category: ProductCategory.Kontorartikler,
        price: 50,
        supplier: 'PaperWorld',
        rating: 4.1,
    },
    {
        id: 7,
        name: 'Lastbil Transport',
        category: ProductCategory.Transporttjenester,
        price: 8000,
        supplier: 'TransLogistics',
        rating: 4.3,
    },
    {
        id: 8,
        name: 'Mursten 100 stk',
        category: ProductCategory.Byggematerialer,
        price: 3000,
        supplier: 'BrickMakers',
        rating: 3.9,
    },
    {
        id: 9,
        name: 'Netværksudstyr',
        category: ProductCategory.ITLoesninger,
        price: 7000,
        supplier: 'NetSolutions',
        rating: 4.4,
    },
    {
        id: 10,
        name: 'Kontorstole 5-pak',
        category: ProductCategory.Kontorartikler,
        price: 5000,
        supplier: 'OfficeGoods',
        rating: 4.0,
    },
];
