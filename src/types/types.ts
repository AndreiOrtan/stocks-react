export interface Company {
  id: number;
  companyName: string;
  companyInfo: string;
  currentPrice: number;
  oldPrice: number;
}

export interface ICompaniesContext {
  companies: Company[];
  asyncFetchCompanies: () => Promise<void>;
  selectedCompany: undefined | Company | {};
  setSelectedCompanyId: (id: number) => void;
}
