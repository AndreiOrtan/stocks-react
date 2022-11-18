import React, { useState } from "react";
import Header from "./Header/Header";
import CompanyList from "./CompanyList/CompanyList";
import CompanyDetails from "./CompanyDetails/CompanyDetails";
import companies from "../mockData/companies";

const App = () => {
  const [selectedCompanyId, setSelectedCompanyId] = useState(-1);

  const selectedCompanyIdHandler = (id: number) => {
    setSelectedCompanyId(id);
  };
  return (
    <React.Fragment>
      <Header />
      <CompanyList
        setSelectedCompany={selectedCompanyIdHandler}
        companies={companies}
      />
      <CompanyDetails companyId={selectedCompanyId} />
    </React.Fragment>
  );
};

export default App;
