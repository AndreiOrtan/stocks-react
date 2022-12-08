import axios from "axios";

const fetchCompanies = (companyId = "") => {
  return axios.get(
    `https://637905857419b414df889986.mockapi.io/api/stocks/${companyId}`
  );
};
export default fetchCompanies;
