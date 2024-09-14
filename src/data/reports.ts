export interface Report {
    id: number;
    title: string;
    date: string;
    type: 'Indkøb' | 'Udgifter' | 'Leverandørperformance';
    summary: string;
}

export const reports: Report[] = [
    {
        id: 1,
        title: 'Indkøbsrapport Q1',
        date: '2023-03-31',
        type: 'Indkøb',
        summary: 'Oversigt over indkøb i første kvartal.',
    },
    // Tilføj flere rapporter
];
