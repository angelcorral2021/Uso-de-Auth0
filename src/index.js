import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { Auth0Provider } from "@auth0/auth0-react";
import '../src/index.css'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-6s5ap24aokhtqm1p.us.auth0.com"
    clientId="LP5P0ASeyIyx4ri2KkojuDMc8kovXdvk"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
