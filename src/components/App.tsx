import React, { useState } from "react";
import Header from "./Header/Header";
import CompanyList from "./CompanyList/CompanyList";
import CompanyDetails from "./CompanyDetails/CompanyDetails";
import companies from "../mockData/companies";

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);

  const selectedCompanyHandler = (id: number) => {
    setSelectedCompany(companies[id]);
  };
  return (
    <React.Fragment>
      <Header />
      <CompanyList setSelectedCompany={selectedCompanyHandler} />
      <CompanyDetails company={selectedCompany} />
    </React.Fragment>
  );
};

export default App;
