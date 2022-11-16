import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const el = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(el);

root.render(<App />);
