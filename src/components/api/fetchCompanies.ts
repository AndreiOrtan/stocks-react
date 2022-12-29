import axios, { AxiosResponse } from "axios";
import { Company } from "../../types/types";

const URL = "https://637905857419b414df889986.mockapi.io";
const apiNamespace = "api";

function apiAdapter<T>(response: AxiosResponse<T>) {
  return response.data;
}

export const fetchCompanies = () => {
  return axios.get<Company[]>(`${URL}/${apiNamespace}/stocks`).then(apiAdapter);
};

export const updateCompany = (companyId: String, data: {}) => {
  return axios
    .put<Company>(`${URL}/${apiNamespace}/stocks/${companyId}`, data)
    .then(apiAdapter);
};

export const fetchCompany = (companyId: String) => {
  return axios
    .get<Company>(`${URL}/${apiNamespace}/stocks/${companyId}`)
    .then(apiAdapter);
};
