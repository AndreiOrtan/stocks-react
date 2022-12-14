import "./CompanyDetails.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchCompanies from "../api/fetchCompanies";
import { Company } from "../../types/types";
import Modal from "../Modal/Modal";
import EditCompanyForm from "../EditCompanyForm/EditCompanyForm";

const CompanyDetails = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const { selectedCompanyId } = useParams();

  useEffect(() => {
    fetchCompanies(selectedCompanyId).then((response) => {
      setSelectedCompany(response.data);
    });
  }, []);

  return (
    <div className="containerr">
      <div className="row details">
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{selectedCompany?.companyName}</span>
              <p>{selectedCompany?.companyInfo}</p>
              <button
                className="waves-effect waves-light btn"
                onClick={() => setIsOpen(true)}
              >
                Edit
              </button>
              <Modal open={isOpen} setIsOpen={setIsOpen}>
                <div className="row">
                  <div className="col s12 m12">
                    <div className="card blue-grey darken-1">
                      <div className="card-content white-text">
                        <span className="card-title">Change fields</span>

                        <EditCompanyForm
                          selectedCompany={selectedCompany}
                          setIsOpen={setIsOpen}
                          selectedCompanyId={selectedCompanyId}
                          setSelectedCompany={setSelectedCompany}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/"}>Back to main page</Link>
    </div>
  );
};
export default CompanyDetails;
