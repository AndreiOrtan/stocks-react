import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "./components/CompaniesProvider/CompaniesContext";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const el = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(el);

root.render(
  <Provider>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-eggyuo3hd8fqyl5b.us.auth0.com"
        clientId="9z8DVvYEf5kiDebqOugd8ueOmjVAxFUq"
        redirectUri={window.location.origin}
        audience="https://dev-eggyuo3hd8fqyl5b.us.auth0.com/api/v2/"
        scope="read:current_user update:current_user_metadata"
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>
);
