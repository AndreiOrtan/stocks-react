import { createContext, useState, ReactNode, useMemo } from "react";
import { Company, ICompaniesContext } from "../../types/types";

const defaultValue = {
  companies: [],
  selectedCompany: undefined,
  setSelectedCompanyId: () => null,
  setCompanies: () => "",
};

export const CompaniesContext = createContext<ICompaniesContext>(defaultValue);

interface ChildrenProps {
  children: ReactNode;
}

export const Provider = ({ children }: ChildrenProps) => {
  const [companies, setCompanies] = useState<[]>([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState(-1);
  console.log(companies);

  const selectedCompany = useMemo(
    () =>
      companies.find((company: Company) => {
        return company.id === selectedCompanyId;
      }),
    [selectedCompanyId, companies]
  );

  const asd = {
    companies,
    setCompanies,
    selectedCompany,
    setSelectedCompanyId,
  };
  return (
    <CompaniesContext.Provider value={asd}>
      {children}
    </CompaniesContext.Provider>
  );
};
