import "./CompanyDetails.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchCompanies from "../api/fetchCompanies";
import { Company } from "../../types/types";

const CompanyDetails = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const { selectedCompanyId } = useParams();
  console.log(selectedCompanyId);

  useEffect(() => {
    fetchCompanies(selectedCompanyId).then((response) =>
      setSelectedCompany(response.data)
    );
  }, []);

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
