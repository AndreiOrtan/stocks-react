import { Company } from "../../types/types";
import { useContext } from "react";
import { CompaniesContext } from "../../components/CompaniesProvider/CompaniesContext";

const useFilteredCompanies = () => {
  const { companies, filters, setFilters } = useContext(CompaniesContext);

  function getSortingValues(company: Company) {
    return company.companyName;
  }

  const sortedCompanies = [...companies];
  sortedCompanies.sort((a, b) => {
    const valueA = getSortingValues(a);
    const valueB = getSortingValues(b);
    if (filters.sortingOrder === "asc") {
      return valueA.localeCompare(valueB);
    } else {
      return valueB.localeCompare(valueA);
    }
  });
  return { setFilters, sortedCompanies };
};

export default useFilteredCompanies;
