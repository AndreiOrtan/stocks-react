import { useContext, useState } from "react";
import { CompaniesContext } from "../CompaniesProvider/CompaniesContext";
import { Company } from "../../types/types";

const CompaniesSorting = () => {
  const [isAscending, setIsAscending] = useState(true); //false mean descending

  const { companies, setCompanies } = useContext(CompaniesContext);

  function getSortingValues(company: Company) {
    return company.companyName;
  }
  const sortAscending = () => {
    const sortedCompanies = [...companies];
    sortedCompanies.sort((a, b) => {
      const valueA = getSortingValues(a);
      const valueB = getSortingValues(b);
      if (!isAscending) {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
    setIsAscending(!isAscending);
    setCompanies(sortedCompanies);
  };

  return (
    <>
      <button onClick={sortAscending}>Sort companies alphabetically</button>
    </>
  );
};

export default CompaniesSorting;
