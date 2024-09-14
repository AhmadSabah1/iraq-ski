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
        type: SupplierType.Godkendt,
        contactInfo: 'kontakt@techsupplies.dk',
        products: ['Laptop Pro', 'Netværksudstyr'],
        rating: 4.8,
    },
    {
        id: 2,
        name: 'OfficeGoods',
        type: SupplierType.Godkendt,
        contactInfo: 'info@officegoods.dk',
        products: ['Ergonomisk Stol', 'Kontorstole 5-pak'],
        rating: 4.2,
    },
    {
        id: 3,
        name: 'FastTrans',
        type: SupplierType.Potentiel,
        contactInfo: 'support@fasttrans.dk',
        products: ['Transport Service X', 'Lastbil Transport'],
        rating: 4.5,
    },
    {
        id: 4,
        name: 'BuildMaster',
        type: SupplierType.Godkendt,
        contactInfo: 'sales@buildmaster.dk',
        products: ['Cement Mix 500kg', 'Mursten 100 stk'],
        rating: 4.0,
    },
    {
        id: 5,
        name: 'CloudCorp',
        type: SupplierType.Godkendt,
        contactInfo: 'cloud@cloudcorp.dk',
        products: ['Cloud Software Suite'],
        rating: 4.7,
    },
    {
        id: 6,
        name: 'PaperWorld',
        type: SupplierType.Potentiel,
        contactInfo: 'hello@paperworld.dk',
        products: ['Papir A4 500 ark'],
        rating: 4.1,
    },
    {
        id: 7,
        name: 'TransLogistics',
        type: SupplierType.Godkendt,
        contactInfo: 'contact@translogistics.dk',
        products: ['Lastbil Transport'],
        rating: 4.3,
    },
    {
        id: 8,
        name: 'NetSolutions',
        type: SupplierType.Potentiel,
        contactInfo: 'service@netsolutions.dk',
        products: ['Netværksudstyr'],
        rating: 4.4,
    },
    {
        id: 9,
        name: 'BrickMakers',
        type: SupplierType.Godkendt,
        contactInfo: 'info@brickmakers.dk',
        products: ['Mursten 100 stk'],
        rating: 3.9,
    },
];
