import axios from "axios";

const fetchCompanies = () => {
  return axios.get("https://637905857419b414df889986.mockapi.io/api/stocks");
};
export default fetchCompanies;
