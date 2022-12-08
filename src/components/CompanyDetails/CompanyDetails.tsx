import "./CompanyDetails.css";
import { Company } from "../../types/types";
import { Link } from "react-router-dom";

interface CompanyDetailsProps {
  selectedCompany: Company | undefined;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({ selectedCompany }) => {
  return (
    <>
      <div className="row details">
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{selectedCompany?.companyName}</span>
              <p>{selectedCompany?.companyInfo}</p>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/"}>Back to main page</Link>
    </>
  );
};
export default CompanyDetails;
