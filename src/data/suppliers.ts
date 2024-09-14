// data/suppliers.ts

import { SupplierType } from './enums';

export interface Supplier {
    id: number;
    name: string;
    type: SupplierType;
    contactInfo: string;
    products: string[];
    rating: number;
}

export const suppliers: Supplier[] = [
    {
        id: 1,
        name: 'TechSupplies',
        type: SupplierType.Approved,
        contactInfo: 'contact@techsupplies.com',
        products: ['Laptop Pro', 'Network Equipment'],
        rating: 4.8,
    },
    {
        id: 2,
        name: 'OfficeGoods',
        type: SupplierType.Approved,
        contactInfo: 'support@officegoods.com',
        products: ['Ergonomic Chair', 'Office Desk'],
        rating: 4.5,
    },
    {
        id: 3,
        name: 'Speedy Delivery',
        type: SupplierType.Approved,
        contactInfo: 'info@speedydelivery.com',
        products: ['Delivery Truck', 'Express Shipping'],
        rating: 4.7,
    },
    {
        id: 4,
        name: 'BuilderPro',
        type: SupplierType.Approved,
        contactInfo: 'sales@builderpro.com',
        products: ['Concrete Mix', 'Reinforced Steel Bars'],
        rating: 4.6,
    },
    {
        id: 5,
        name: 'InnovateTech',
        type: SupplierType.Approved,
        contactInfo: 'innovate@innovatetech.com',
        products: ['Cloud Storage Subscription', 'Cybersecurity Solutions'],
        rating: 4.9,
    },
    {
        id: 6,
        name: 'AdWave',
        type: SupplierType.Potential,
        contactInfo: 'hello@adwave.com',
        products: ['SEO Services', 'Social Media Marketing'],
        rating: 4.4,
    },
    {
        id: 7,
        name: 'Rent-A-Desk',
        type: SupplierType.Suspended,
        contactInfo: 'support@rentadesk.com',
        products: ['Office Space Leasing'],
        rating: 3.8,
    },
    {
        id: 8,
        name: 'HelpDesk Solutions',
        type: SupplierType.Potential,
        contactInfo: 'support@helpdesksolutions.com',
        products: ['IT Support', 'On-site Maintenance'],
        rating: 4.3,
    },
    {
        id: 9,
        name: 'E-Supply Chain Co.',
        type: SupplierType.Potential,
        contactInfo: 'contact@esupply.com',
        products: ['Warehouse Management Systems', 'Inventory Tracking Software'],
        rating: 4.5,
    },
    {
        id: 10,
        name: 'PowerGrid Inc.',
        type: SupplierType.Approved,
        contactInfo: 'energy@powergrid.com',
        products: ['Energy Supply Contracts'],
        rating: 4.7,
    },
];
