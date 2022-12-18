import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "./components/CompaniesProvider/CompaniesContext";
import { BrowserRouter } from "react-router-dom";

const el = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(el);

root.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
