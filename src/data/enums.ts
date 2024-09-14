// data/enums.ts

export enum AgreementStatus {
    Active = 'Active',
    Expired = 'Expired',
    Negotiation = 'Under Negotiation',
    Pending = 'Pending',
    Canceled = 'Cancelled'
}

export enum ReportType {
    Purchasing = 'Purchasing',
    Financial = 'Financial',
    Inventory = 'Inventory',
    Sales = 'Sales',
    Performance = 'Supplier Performance',

}

export enum ProductCategory {
    ITSolutions = 'IT Solutions',
    OfficeSupplies = 'Office Supplies',
    TransportServices = 'Transport Services',
    BuildingMaterials = 'Building Materials',
}

export enum SupplierType {
    Approved = 'Approved',
    Potential = 'Potential',
    Suspended = 'Suspended',
}