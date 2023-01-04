import React from "react";
import { Route, Routes } from "react-router-dom";
import CompanyList from "../components/CompanyList/CompanyList";
import CompanyDetails from "../components/CompanyDetails/CompanyDetails";
import CompaniesSorting from "../components/CompaniesSorting/CompaniesSorting";

const ReactStocksRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CompanyList />
          </>
        }
      />
      <Route path="/:selectedCompanyId" element={<CompanyDetails />} />
    </Routes>
  );
};

export default ReactStocksRoutes;
