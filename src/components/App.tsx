import React, { useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import CompanyList from "./CompanyList/CompanyList";
import CompanyDetails from "./CompanyDetails/CompanyDetails";
import { CompaniesContext } from "./CompaniesProvider/CompaniesContext";

const App = () => {
  const { asyncFetchCompanies } = useContext(CompaniesContext);

  useEffect(() => {
    asyncFetchCompanies();
  }, [asyncFetchCompanies]);

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<CompanyList />} />
        <Route path="/:selectedCompanyId" element={<CompanyDetails />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
