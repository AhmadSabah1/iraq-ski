// data/reports.ts

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
        title: 'Purchasing Report Q1',
        date: '2023-03-31',
        type: ReportType.Purchasing,
        summary: 'Overview of purchases in the first quarter.',
    },
    {
        id: 2,
        title: 'Financial Summary Q2',
        date: '2023-06-30',
        type: ReportType.Financial,
        summary: 'Financial overview for the second quarter.',
    },
    {
        id: 3,
        title: 'Inventory Performance Q3',
        date: '2023-09-30',
        type: ReportType.Inventory,
        summary: 'Detailed analysis of inventory performance during Q3.',
    },
    {
        id: 4,
        title: 'Sales Performance Q1',
        date: '2023-03-31',
        type: ReportType.Sales,
        summary: 'Summary of sales performance in Q1.',
    },
    {
        id: 5,
        title: 'Purchasing Report Q2',
        date: '2023-06-30',
        type: ReportType.Purchasing,
        summary: 'Overview of purchases in the second quarter.',
    },
    {
        id: 6,
        title: 'Financial Summary Q3',
        date: '2023-09-30',
        type: ReportType.Financial,
        summary: 'Financial overview for the third quarter.',
    },
    {
        id: 7,
        title: 'Company Performance Report H1',
        date: '2023-06-30',
        type: ReportType.Performance,
        summary: 'A comprehensive performance report for the first half of 2023.',
    },
    {
        id: 8,
        title: 'Inventory Analysis Q2',
        date: '2023-06-30',
        type: ReportType.Inventory,
        summary: 'Detailed analysis of inventory performance during Q2.',
    },
    {
        id: 9,
        title: 'Sales Report Q2',
        date: '2023-06-30',
        type: ReportType.Sales,
        summary: 'Summary of sales activities and performance in Q2.',
    },
    {
        id: 10,
        title: 'Purchasing Report Q3',
        date: '2023-09-30',
        type: ReportType.Purchasing,
        summary: 'Overview of purchases in the third quarter.',
    },
];
