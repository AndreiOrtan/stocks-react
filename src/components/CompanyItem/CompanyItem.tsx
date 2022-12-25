import { Company } from "../../types/types";
import { useNavigate } from "react-router-dom";
import "./CompanyItem.css";

interface ICompanyItem {
  companyData: Company;
}

const CompanyItem = ({ companyData }: ICompanyItem) => {
  let navigate = useNavigate();

  //calculation values
  const percent = (
    100 -
    (companyData.oldPrice / companyData.currentPrice) * 100
  ).toFixed(2);
  const priceDiff = (companyData.currentPrice - companyData.oldPrice).toFixed(
    2
  );

  return (
    <section
      className={`row card-panel highlight`}
      onClick={() => {
        navigate(`${companyData.id}`);
      }}
    >
      <div className="col s12 m4 l6">
        <div className="companyName">{companyData.companyName}</div>
        <div className="company-info">{companyData.companyInfo}</div>
      </div>
      <div className="col s12 m4 l6 right-align">
        <div className="current-price">{`$${companyData.currentPrice}`}</div>
        <div
          className="old-price"
          style={{ color: +priceDiff < 0 ? "red" : "green" }}
        >
          {`$${priceDiff}(${
            companyData.currentPrice > companyData.oldPrice ? "+" : ""
          }${percent}%)`}
        </div>
        <div className="current-date">{`${new Date()}`}</div>
      </div>
    </section>
  );
};

export default CompanyItem;
