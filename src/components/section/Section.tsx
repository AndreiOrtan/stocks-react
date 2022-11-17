import { useState, useEffect } from "react";
import companies from "../../mockData/companies";
import "./Section.css";

const Section = () => {
  const [companyIndex, setCompanyIndex] = useState(-1);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target !== document.body) {
        return;
      }
      setCompanyIndex(-1);
    });
  }, []);

  const renderedCompanies = companies.map(
    ({ company, companyInfo, currentPrice, oldPrice }, index) => {
      //calculation values
      const percent = (100 - (oldPrice / currentPrice) * 100).toFixed(2);
      const priceDiff = (currentPrice - oldPrice).toFixed(2);
      let operator = "";
      if (currentPrice > oldPrice) {
        operator = "+";
      }

      //logic for the component
      const status = companyIndex === index ? "highlight" : "";
      return (
        <section
          key={company}
          className={`row card-panel ${status}`}
          onClick={(e) => {
            if (e.currentTarget.classList.contains("highlight")) {
              setCompanyIndex(-1);
              return;
            }
            setCompanyIndex(index);
          }}
        >
          <div className="col s12 m4 l6">
            <div className="company">{company}</div>
            <div className="company-info">{companyInfo}</div>
          </div>
          <div className="col s12 m4 l6 right-align">
            <div className="current-price">{`$${currentPrice}`}</div>
            <div
              className="old-price"
              style={{ color: +priceDiff < 0 ? "red" : "green" }}
            >
              {`$${priceDiff}(${operator}${percent}%)`}
            </div>
            <div className="current-date">{`${new Date()}`}</div>
          </div>
        </section>
      );
    }
  );
  return <div className="layout">{renderedCompanies}</div>;
};
export default Section;
