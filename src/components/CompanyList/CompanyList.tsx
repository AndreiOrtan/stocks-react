import { useEffect, useContext } from "react";
import "./CompanyList.css";
import { CompaniesContext } from "../CompaniesProvider/CompaniesContext";
import { fetchCompanies } from "../api/fetchCompanies";
import CompanyItem from "../CompanyItem/CompanyItem";
import useFilteredCompanies from "../../hooks/useFilteredCompanies/useFilteredComanies";
import CompaniesSorting from "../CompaniesSorting/CompaniesSorting";

const CompanyList = () => {
  const { setCompanies } = useContext(CompaniesContext);
  const { sortedCompanies } = useFilteredCompanies();

  useEffect(() => {
    console.log("ran");
    fetchCompanies().then(setCompanies);
  }, [setCompanies]);

  const renderedCompanies = sortedCompanies.map((company) => {
    return <CompanyItem key={company.id} companyData={company} />;
  });
  return (
    <div className="layout">
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Company Name {<CompaniesSorting />}</th>
            <th>Company profit</th>
            <th>Fluctation</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{renderedCompanies}</tbody>
      </table>
    </div>
  );
};
export default CompanyList;
