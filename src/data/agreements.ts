import { AgreementStatus } from './enums';

export interface Agreement {
    id: number;
    title: string;
    status: AgreementStatus;
    supplier: string;
    startDate: string;
    endDate: string;
    terms: string;
}

export const agreements: Agreement[] = [
    {
        id: 1,
        title: 'Service Agreement with TechSupplies',
        status: AgreementStatus.Active,
        supplier: 'TechSupplies',
        startDate: '2023-01-01',
        endDate: '2023-12-31',
        terms: 'Annual support and maintenance.',
    },
    {
        id: 2,
        title: 'Purchase Agreement with Office Essentials',
        status: AgreementStatus.Expired,
        supplier: 'Office Essentials',
        startDate: '2021-02-01',
        endDate: '2022-02-01',
        terms: 'One-year supply of office materials.',
    },
    {
        id: 3,
        title: 'Transport Services Agreement with Speedy Delivery',
        status: AgreementStatus.Negotiation,
        supplier: 'Speedy Delivery',
        startDate: '2023-05-01',
        endDate: '2024-05-01',
        terms: 'Ongoing transportation of goods across regions.',
    },
    {
        id: 4,
        title: 'IT Solutions Contract with InnovateTech',
        status: AgreementStatus.Active,
        supplier: 'InnovateTech',
        startDate: '2022-08-01',
        endDate: '2024-08-01',
        terms: 'Provision of cloud storage and cybersecurity services.',
    },
    {
        id: 5,
        title: 'Supply Agreement with BuilderPro',
        status: AgreementStatus.Pending,
        supplier: 'BuilderPro',
        startDate: '2023-09-15',
        endDate: '2024-09-15',
        terms: 'Supply of building materials for the new construction project.',
    },
    {
        id: 6,
        title: 'Consulting Agreement with BizConsult',
        status: AgreementStatus.Canceled,
        supplier: 'BizConsult',
        startDate: '2023-03-01',
        endDate: '2023-06-01',
        terms: 'Consultation services for business restructuring.',
    },
    {
        id: 7,
        title: 'Leasing Agreement with Rent-A-Desk',
        status: AgreementStatus.Expired,
        supplier: 'Rent-A-Desk',
        startDate: '2020-09-01',
        endDate: '2021-09-01',
        terms: 'Leasing of office space in central business district.',
    },
    {
        id: 8,
        title: 'Energy Supply Contract with PowerGrid Inc.',
        status: AgreementStatus.Active,
        supplier: 'PowerGrid Inc.',
        startDate: '2022-01-01',
        endDate: '2025-01-01',
        terms: 'Three-year contract for energy supply.',
    },
    {
        id: 9,
        title: 'Marketing Services Agreement with AdWave',
        status: AgreementStatus.Negotiation,
        supplier: 'AdWave',
        startDate: '2023-06-01',
        endDate: '2024-06-01',
        terms: 'Digital marketing services including SEO and social media campaigns.',
    },
    {
        id: 10,
        title: 'Support Services Agreement with HelpDesk Solutions',
        status: AgreementStatus.Pending,
        supplier: 'HelpDesk Solutions',
        startDate: '2023-10-01',
        endDate: '2024-10-01',
        terms: 'On-site and remote support services for IT infrastructure.',
    },
];
