import { createContext, useState, ReactNode } from "react";
import { ICompaniesContext } from "../../types/types";

const defaultValue = {
  companies: [],

  setCompanies: () => "",
};

export const CompaniesContext = createContext<ICompaniesContext>(defaultValue);

interface ChildrenProps {
  children: ReactNode;
}

export const Provider = ({ children }: ChildrenProps) => {
  const [companies, setCompanies] = useState<[]>([]);
  console.log(companies);

  const contextValues = {
    companies,
    setCompanies,
  };
  return (
    <CompaniesContext.Provider value={contextValues}>
      {children}
    </CompaniesContext.Provider>
  );
};
