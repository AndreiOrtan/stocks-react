import { useState, useEffect } from "react";
import { Company } from "../../types/types";
import { fetchCompany } from "../../components/api/fetchCompanies";

const useGetCompanyDetails = (id: string) => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCompany(id)
      .then((data) => setSelectedCompany(data))
      .then(() => setIsLoading(false));
  }, [id]);

  return { isLoading, selectedCompany, setSelectedCompany };
};

export default useGetCompanyDetails;
