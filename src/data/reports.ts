import { ReportType } from './enums';

export interface Report {
    id: number;
    title: string;
    date: string;
    type: ReportType;
    summary: string;
}

export const reports: Report[] = [
    {
        id: 1,
        title: 'Indkøbsrapport Q1',
        date: '2023-03-31',
        type: ReportType.Indkoeb,
        summary: 'Oversigt over indkøb i første kvartal.',
    },
    {
        id: 2,
        title: 'Udgiftsrapport April 2023',
        date: '2023-04-30',
        type: ReportType.Udgifter,
        summary: 'Detaljeret oversigt over udgifter i april måned.',
    },
    {
        id: 3,
        title: 'Leverandørperformance 2022',
        date: '2022-12-31',
        type: ReportType.LeverandoerPerformance,
        summary: 'Analyse af leverandørernes performance i 2022.',
    },
    {
        id: 4,
        title: 'Indkøbsrapport Q2',
        date: '2023-06-30',
        type: ReportType.Indkoeb,
        summary: 'Oversigt over indkøb i andet kvartal.',
    },
    {
        id: 5,
        title: 'Budgetrapport 2023',
        date: '2023-01-15',
        type: ReportType.Udgifter,
        summary: 'Forventede udgifter og budget for 2023.',
    },
];
