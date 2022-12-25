import { useParams } from "react-router-dom";

const useGetCompanyIdRouteParam: () => string = () => {
  const { selectedCompanyId } = useParams();

  if (!selectedCompanyId) {
    throw new Error("Can't use this route param on your current route");
  }

  return selectedCompanyId;
};

export default useGetCompanyIdRouteParam;
