import { useEffect, useContext } from "react";
import "./CompanyList.css";
import { CompaniesContext } from "../CompaniesProvider/CompaniesContext";
import { fetchCompanies } from "../api/fetchCompanies";
import CompanyItem from "../CompanyItem/CompanyItem";
import useFilteredCompanies from "../../hooks/useFilteredCompanies/useFilteredComanies";

const CompanyList = () => {
  const { companies, setCompanies } = useContext(CompaniesContext);
  const { sortedCompanies } = useFilteredCompanies();
  useEffect(() => {
    fetchCompanies().then(setCompanies);
  }, [setCompanies]);

  const renderedCompanies = sortedCompanies?.map((company) => {
    return <CompanyItem key={company.id} companyData={company} />;
  });
  return <div className="layout">{renderedCompanies}</div>;
};
export default CompanyList;
