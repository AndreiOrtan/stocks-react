import React, { useEffect, useMemo, useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
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
      <Routes>
        <Route
          path="/"
          element={
            <CompanyList
              setSelectedCompanyId={setSelectedCompanyId}
              companies={companies}
            />
          }
        />
        <Route
          path={`${selectedCompany?.id}`}
          element={<CompanyDetails selectedCompany={selectedCompany} />}
        />
      </Routes>
    </React.Fragment>
  );
};

export default App;
