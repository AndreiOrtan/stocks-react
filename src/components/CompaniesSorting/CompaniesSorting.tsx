import { useContext } from "react";
import { CompaniesContext } from "../CompaniesProvider/CompaniesContext";

const CompaniesSorting = () => {
  const { setFilters } = useContext(CompaniesContext);

  const descClickHandler = () => {
    setFilters((prevState: any) => ({ ...prevState, sortingOrder: "desc" }));
  };

  const ascClickHandler = () => {
    setFilters((prevState: any) => ({ ...prevState, sortingOrder: "asc" }));
  };
  return (
    <>
      <h5>Sort companies alphabetically</h5>
      <button onClick={ascClickHandler}>A-Z</button>
      <button onClick={descClickHandler}>Z-A</button>
    </>
  );
};

export default CompaniesSorting;
