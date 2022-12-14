import { useState } from "react";
import { IEditCompanyForm } from "../../types/types";
import { updateCompany } from "../api/fetchCompanies";

const EditCompanyForm = ({
  selectedCompany,
  setIsOpen,
  selectedCompanyId,
  setSelectedCompany,
}: IEditCompanyForm) => {
  const [companyName, setCompanyName] = useState(selectedCompany?.companyName);
  const [companyInfo, setCompanyInfo] = useState(selectedCompany?.companyInfo);

  function editFormHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsOpen(false);
    updateCompany(selectedCompanyId, { companyName, companyInfo }).then(
      (data) => setSelectedCompany(data)
    );
  }

  return (
    <form onSubmit={editFormHandler}>
      <label>Change title</label>
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <label>Change description</label>
      <textarea
        value={companyInfo}
        className="materialize-textarea"
        style={{ height: "60px" }}
        onChange={(e) => setCompanyInfo(e.target.value)}
      />

      <button type="submit" className="waves-effect waves-light btn">
        Save
      </button>
      <button
        type="button"
        className="waves-effect waves-light btn"
        onClick={() => setIsOpen(false)}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditCompanyForm;
