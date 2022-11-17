export interface Company {
  id: number;
  companyName: string;
  companyInfo: string;
  currentPrice: number;
  oldPrice: number;
}

export interface Props {
  company: Company;
}
