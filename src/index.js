import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { hydrate, render } from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const rootElement = document.getElementById("root");

// if (rootElement.hasChildNodes()) {
//   hydrate(
//     <GithubUsersProvider>
//       <App />
//     </GithubUsersProvider>,
//     rootElement
//   );
// } else {
//   render(
//     <GithubUsersProvider>
//       <App />
//     </GithubUsersProvider>,
//     rootElement
//   );
// }
ReactDOM.render(
  <Auth0Provider
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    redirectUri="https://github-search-rosy.vercel.app/home"
  >
    <App />
  </Auth0Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
