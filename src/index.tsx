import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "./components/CompaniesProvider/CompaniesContext";

const el = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(el);

root.render(
  <Provider>
    <App />
  </Provider>
);
