import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import CompanyList from "./CompanyList/CompanyList";
import CompanyDetails from "./CompanyDetails/CompanyDetails";

const App = () => {
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
