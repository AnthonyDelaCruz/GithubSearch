import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Auth0Provider
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    redirectUri={
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/home"
        : "https://user-github-search.vercel.app/home"
    }
  >
    <App />
  </Auth0Provider>,
  rootElement
);

serviceWorker.unregister();
