export interface Company {
  id: number;
  companyName: string;
  companyInfo: string;
  currentPrice: number;
  oldPrice: number;
}

export interface ICompaniesContext {
  companies: Company[];
  filters: { sortingOrder: String };
  setCompanies: (value: any) => void;
  setFilters: (value: any) => void;
}

export interface IEditCompanyForm {
  selectedCompany: Company | null;
  setIsOpen: (boolean: boolean) => void;
  selectedCompanyId: String;
  setSelectedCompany: (company: Company | null) => void;
}
