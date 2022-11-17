import { useState, useEffect } from "react";
import companies from "../../mockData/companies";
import "./CompanyList.css";
import CompanyDetails from "../CompanyDetails/CompanyDetails";

const Section = () => {
  const [companyIndex, setCompanyIndex] = useState(-1);
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target !== document.body) {
        return;
      }
      setCompanyIndex(-1);
    });
  }, []);

  const renderedCompanies = companies.map(
    ({ companyName, companyInfo, currentPrice, oldPrice, id }, index) => {
      //calculation values
      const percent = (100 - (oldPrice / currentPrice) * 100).toFixed(2);
      const priceDiff = (currentPrice - oldPrice).toFixed(2);

      //logic for the component
      const status = companyIndex === index ? "highlight" : "";
      return (
        <section
          key={id}
          className={`row card-panel ${status}`}
          onClick={(e) => {
            if (e.currentTarget.classList.contains("highlight")) {
              setCompanyIndex(-1);
              return;
            }
            setCompanyIndex(index);
            setSelectedCompany(companies[index]);
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
      );
    }
  );
  return (
    <div className="layout">
      {renderedCompanies}
      <CompanyDetails company={selectedCompany} />
    </div>
  );
};
export default Section;
