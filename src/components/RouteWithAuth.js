import React, { useMemo } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function RouteWithAuthState({
  component: Component,
  path,
  ...rest
}) {
  const { isAuthenticated, isLoading } = useAuth0();

  return useMemo(() => {
    return (
      <>
        {!isAuthenticated ? (
          <Route
            component={!isAuthenticated && !isLoading ? Component : null}
            path={path}
            {...rest}
          />
        ) : (
          <Redirect to="/home" />
        )}
      </>
    );
  }, [isAuthenticated, isLoading]);
}
