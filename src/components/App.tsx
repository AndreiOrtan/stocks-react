import React, { useEffect, useMemo, useState, useContext } from "react";
import Header from "./Header/Header";
import CompanyList from "./CompanyList/CompanyList";
import CompanyDetails from "./CompanyDetails/CompanyDetails";
import { CompaniesContext } from "./CompaniesProvider/CompaniesContext";

const App = () => {
  const [selectedCompanyId, setSelectedCompanyId] = useState(-1);

  const { companies, asyncFetchCompanies } = useContext(CompaniesContext);

  useEffect(() => {
    asyncFetchCompanies();
  }, [asyncFetchCompanies]);

  const selectedCompany = useMemo(
    () =>
      companies.find((company) => {
        return company.id === selectedCompanyId;
      }),
    [selectedCompanyId, companies]
  );

  return (
    <React.Fragment>
      <Header />
      <CompanyList
        setSelectedCompanyId={setSelectedCompanyId}
        companies={companies}
      />
      <CompanyDetails selectedCompany={selectedCompany} />
    </React.Fragment>
  );
};

export default App;
