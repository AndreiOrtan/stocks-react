import "./CompanyDetails.css";
import { Company } from "../../types/types";

interface CompanyDetailsProps {
  selectedCompany: Company | undefined;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({ selectedCompany }) => {
  // console.log(selectedCompany);
  return <div>{selectedCompany?.companyInfo}</div>;
  // return (
  //   <div className="row details">
  //     <div className="col s12 m12">
  //       <div className="card blue-grey darken-1">
  //         <div className="card-content white-text">
  //           <span className="card-title">{company.companyName}</span>
  //           <p>{company.companyInfo}</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};
export default CompanyDetails;
