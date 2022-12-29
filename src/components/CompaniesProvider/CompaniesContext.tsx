import { createContext, useState, ReactNode, useEffect } from "react";
import { ICompaniesContext, Company } from "../../types/types";
import { fetchCompanies } from "../api/fetchCompanies";

const defaultValue = {
  companies: [],
  filters: { sortingOrder: "" },
  setCompanies: () => "",
  setFilters: () => "",
};

export const CompaniesContext = createContext<ICompaniesContext>(defaultValue);

interface ChildrenProps {
  children: ReactNode;
}

export const Provider = ({ children }: ChildrenProps) => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [filters, setFilters] = useState({ sortingOrder: "asc" });

  const contextValues = {
    companies,
    setCompanies,
    filters,
    setFilters,
  };

  return (
    <CompaniesContext.Provider value={contextValues}>
      {children}
    </CompaniesContext.Provider>
  );
};
