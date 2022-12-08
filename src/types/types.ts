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
}

export interface CompanyDetailsProps {
  selectedCompany: Company | undefined;
}
