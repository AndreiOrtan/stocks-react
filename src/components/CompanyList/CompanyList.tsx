import React, { useState, useEffect, useContext } from "react";
import "./CompanyList.css";
import { CompaniesContext } from "../CompaniesProvider/CompaniesContext";
import { Link } from "react-router-dom";

const Section = () => {
  const { companies, setSelectedCompanyId } = useContext(CompaniesContext);
  const [companyId, setCompanyId] = useState(-1);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target !== document.body) {
        return;
      }
      setCompanyId(-1);
    });
  }, []);

  const renderedCompanies = companies?.map(
    ({ companyName, companyInfo, currentPrice, oldPrice, id }) => {
      //calculation values
      const percent = (100 - (oldPrice / currentPrice) * 100).toFixed(2);
      const priceDiff = (currentPrice - oldPrice).toFixed(2);

      //logic for the component
      const status = companyId === id ? "highlight" : "";
      return (
        <Link to={`/${id}`} key={id}>
          {
            <section
              className={`row card-panel ${status}`}
              onClick={(e) => {
                if (e.currentTarget.classList.contains("highlight")) {
                  setCompanyId(-1);
                  return;
                }
                setCompanyId(id);
                setSelectedCompanyId(id);
              }}
            >
              <div className="col s12 m4 l6">
                <div className="companyName">{companyName}</div>
                <div className="company-info">{companyInfo}</div>
              </div>
              <div className="col s12 m4 l6 right-align">
                <div className="current-price">{`$${currentPrice}`}</div>
                <div
                  className="old-price"
                  style={{ color: +priceDiff < 0 ? "red" : "green" }}
                >
                  {`$${priceDiff}(${
                    currentPrice > oldPrice ? "+" : ""
                  }${percent}%)`}
                </div>
                <div className="current-date">{`${new Date()}`}</div>
              </div>
            </section>
          }
        </Link>
      );
    }
  );
  return <div className="layout">{renderedCompanies}</div>;
};
export default Section;
