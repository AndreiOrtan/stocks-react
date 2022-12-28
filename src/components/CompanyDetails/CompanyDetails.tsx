import "./CompanyDetails.css";
import useGetCompanyIdRouteParam from "../../hooks/useGetCompanyIdRouteParam/useGetCompanyIdRouteParam";
import { useState } from "react";
import Modal from "../Modal";
import EditCompanyForm from "../EditCompanyForm/EditCompanyForm";
import useGetCompanyDetails from "../../hooks/useGetCompanyDetails/useGetCompanyDetails";
import Spinner from "../Spinner/Spinner";

const CompanyDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedCompanyId = useGetCompanyIdRouteParam();

  const { isLoading, selectedCompany, setSelectedCompany } =
    useGetCompanyDetails(selectedCompanyId);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
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
              <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
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
    </>
  );
};
export default CompanyDetails;
