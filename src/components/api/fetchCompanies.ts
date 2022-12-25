import axios from "axios";
import { Company } from "../../types/types";

const URL = "https://637905857419b414df889986.mockapi.io";
const apiNamespace = "api";

export const fetchCompanies = () => {
  return axios
    .get<Company[]>(`${URL}/${apiNamespace}/stocks`)
    .then((response) => {
      return response.data;
    });
};

export const updateCompany = (companyId: String, data: {}) => {
  return axios
    .put<Company>(`${URL}/${apiNamespace}/stocks/${companyId}`, data)
    .then((response) => {
      return response.data;
    });
};

export const fetchCompany = (companyId: String) => {
  return axios
    .get<Company>(`${URL}/${apiNamespace}/stocks/${companyId}`)
    .then((response) => {
      return response.data;
    });
};
