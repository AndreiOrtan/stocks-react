import {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from "react";
import fetchCompanies from "../api/fetchCompanies";
import { Company, ICompaniesContext } from "../../types/types";

const defaultValue = {
  companies: [],
  asyncFetchCompanies: () => Promise.resolve(),
  selectedCompany: undefined,
  setSelectedCompanyId: () => null,
};

export const CompaniesContext = createContext<ICompaniesContext>(defaultValue);

interface ChildrenProps {
  children: ReactNode;
}

export const Provider = ({ children }: ChildrenProps) => {
  const [companies, setCompanies] = useState<[]>([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState(-1);

  const selectedCompany = useMemo(
    () =>
      companies.find((company: Company) => {
        return company.id === selectedCompanyId;
      }),
    [selectedCompanyId, companies]
  );

  const asyncFetchCompanies = useCallback(async () => {
    const response = await fetchCompanies();
    setCompanies(response.data);
  }, []);

  const asd = {
    asyncFetchCompanies,
    companies,
    selectedCompany,
    setSelectedCompanyId,
  };
  return (
    <CompaniesContext.Provider value={asd}>
      {children}
    </CompaniesContext.Provider>
  );
};
