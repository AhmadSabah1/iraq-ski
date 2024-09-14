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
        title: 'Serviceaftale med TechSupplies',
        status: AgreementStatus.Aktiv,
        supplier: 'TechSupplies',
        startDate: '2023-01-01',
        endDate: '2023-12-31',
        terms: 'Årlig support og vedligeholdelse.',
    },
    {
        id: 2,
        title: 'Leveringsaftale med FastTrans',
        status: AgreementStatus.UnderForhandling,
        supplier: 'FastTrans',
        startDate: '2023-06-01',
        endDate: '2024-05-31',
        terms: 'Månedlige leverancer af transporttjenester.',
    },
    {
        id: 3,
        title: 'Købsaftale med BuildMaster',
        status: AgreementStatus.Udloebet,
        supplier: 'BuildMaster',
        startDate: '2022-01-01',
        endDate: '2022-12-31',
        terms: 'Engroskøb af byggematerialer.',
    },
    {
        id: 4,
        title: 'Softwarelicens med CloudCorp',
        status: AgreementStatus.Aktiv,
        supplier: 'CloudCorp',
        startDate: '2023-03-15',
        endDate: '2024-03-14',
        terms: 'Årlig licens for cloud-software.',
    },
    {
        id: 5,
        title: 'Kontorartikler med OfficeGoods',
        status: AgreementStatus.Aktiv,
        supplier: 'OfficeGoods',
        startDate: '2023-02-01',
        endDate: '2024-01-31',
        terms: 'Levering af kontorartikler efter behov.',
    },
];
