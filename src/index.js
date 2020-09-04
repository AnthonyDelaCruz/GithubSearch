import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubUsersProvider, AuthContextProvider } from "./context";
import { hydrate, render } from "react-dom";

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
  <AuthContextProvider>
    <GithubUsersProvider>
      <App />
    </GithubUsersProvider>
  </AuthContextProvider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
