export interface Company {
  id: number;
  companyName: string;
  companyInfo: string;
  currentPrice: number;
  oldPrice: number;
}

export interface ICompaniesContext {
  companies: Company[];
  // asyncFetchCompanies: () => Promise<void>;
  selectedCompany: undefined | Company | {};
  setSelectedCompanyId: (id: number) => void;
  setCompanies: (value: any) => void;
}

export interface IEditCompanyForm {
  selectedCompany: Company | null;
  setIsOpen: (boolean: boolean) => void;
  selectedCompanyId: String | undefined;
  setSelectedCompany: (company: Company | null) => void;
}
