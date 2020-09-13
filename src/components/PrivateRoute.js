import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function PrivateRoute({ children, path, ...rest }) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  useEffect(() => {
    if (isAuthenticated || isLoading) return;
    // this will redirect user to auth0 login screen if not yet authenticated
    // then redirect to original route after authentication
    const cb = async () =>
      await loginWithRedirect({ redirectUri: `http://localhost:3000${path}` });
    cb();
  }, [isAuthenticated, isLoading, path, loginWithRedirect]);

  return (
    <Route path={path} {...rest}>
      {children}
    </Route>
  );
}
