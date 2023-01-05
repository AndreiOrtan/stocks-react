import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  FC,
} from "react";
import { ICompaniesContext, Company } from "../../types/types";
import { fetchCompanies } from "../api/fetchCompanies";

const defaultValue = {
  companies: [],
  filters: { sortingOrder: "" },
  setCompanies: () => {},
  setFilters: () => {},
};

export const CompaniesContext = createContext<ICompaniesContext>(defaultValue);

interface ProviderProps {
  children: ReactNode;
}

export const Provider: FC<ProviderProps> = ({ children }) => {
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
