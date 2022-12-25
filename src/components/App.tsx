import React from "react";
import ReactStocksRoutes from "../routes";
import Header from "./Header/Header";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <ReactStocksRoutes />
    </React.Fragment>
  );
};

export default App;
