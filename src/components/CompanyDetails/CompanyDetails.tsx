import "./CompanyDetails.css";
// import { Company } from "../../types/types";

interface CompanyDetailsProps {
  companyId: number;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({ companyId }) => {
  return <div>{companyId}</div>;
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
