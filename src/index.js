import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { createRoot } from "react-dom/client";

const domain = "dev-31w4lual6cup2bug.us.auth0.com";
const clientId = "yPwEXx1Hjleid7a5YQEiNkSLdDV4WbM2";

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

// ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
