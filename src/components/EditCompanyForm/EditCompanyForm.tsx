import axios from "axios";
import { useEffect, useState } from "react";
import { Company } from "../../types/types";

interface IEditCompanyForm {
  selectedCompany: Company | null;
  setIsOpen: (boolean: boolean) => void;
  selectedCompanyId: String | undefined;
}
const EditCompanyForm = ({
  selectedCompany,
  setIsOpen,
  selectedCompanyId,
}: IEditCompanyForm) => {
  const [companyName, setCompanyName] = useState(selectedCompany?.companyName);
  const [companyInfo, setCompanyInfo] = useState(selectedCompany?.companyInfo);

  function editFormHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsOpen(false);
    axios.put(
      `https://637905857419b414df889986.mockapi.io/api/stocks/${selectedCompanyId}`,
      { companyName, companyInfo }
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
