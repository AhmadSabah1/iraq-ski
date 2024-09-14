// data/products.ts

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
        category: ProductCategory.ITSolutions,
        price: 1500,
        supplier: 'TechSupplies',
        rating: 4.8,
    },
    {
        id: 2,
        name: 'Ergonomic Chair',
        category: ProductCategory.OfficeSupplies,
        price: 200,
        supplier: 'OfficeGoods',
        rating: 4.2,
    },
    {
        id: 3,
        name: 'Wireless Keyboard',
        category: ProductCategory.ITSolutions,
        price: 120,
        supplier: 'TechSupplies',
        rating: 4.5,
    },
    {
        id: 4,
        name: 'Office Desk',
        category: ProductCategory.OfficeSupplies,
        price: 450,
        supplier: 'OfficeGoods',
        rating: 4.0,
    },
    {
        id: 5,
        name: 'Delivery Truck',
        category: ProductCategory.TransportServices,
        price: 35000,
        supplier: 'Speedy Delivery',
        rating: 4.7,
    },
    {
        id: 6,
        name: 'Concrete Mix',
        category: ProductCategory.BuildingMaterials,
        price: 500,
        supplier: 'BuilderPro',
        rating: 4.3,
    },
    {
        id: 7,
        name: 'Cloud Storage Subscription',
        category: ProductCategory.ITSolutions,
        price: 300,
        supplier: 'InnovateTech',
        rating: 4.9,
    },
    {
        id: 8,
        name: 'Office Chair Mats',
        category: ProductCategory.OfficeSupplies,
        price: 50,
        supplier: 'OfficeGoods',
        rating: 3.8,
    },
    {
        id: 9,
        name: 'Security Camera System',
        category: ProductCategory.ITSolutions,
        price: 800,
        supplier: 'TechSupplies',
        rating: 4.6,
    },
    {
        id: 10,
        name: 'Reinforced Steel Bars',
        category: ProductCategory.BuildingMaterials,
        price: 1200,
        supplier: 'BuilderPro',
        rating: 4.4,
    },
];
