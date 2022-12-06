import { createContext, useState, ReactNode, useCallback } from "react";
import fetchCompanies from "../api/fetchCompanies";
import { ICompaniesContext } from "../../types/types";
// import { Company } from "../../types/types";

export const CompaniesContext = createContext<ICompaniesContext>({
  companies: [],
  asyncFetchCompanies: () => Promise.resolve(),
});

interface Props {
  children: ReactNode;
}

export const Provider = ({ children }: Props) => {
  const [companies, setCompanies] = useState<[]>([]);

  const asyncFetchCompanies = useCallback(async () => {
    const response = await fetchCompanies();
    setCompanies(response.data);
  }, []);

  const asd = {
    asyncFetchCompanies,
    companies,
  };
  return (
    <CompaniesContext.Provider value={asd}>
      {children}
    </CompaniesContext.Provider>
  );
};
