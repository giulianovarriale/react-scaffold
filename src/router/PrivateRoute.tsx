import React from "react";
import { Redirect, Route } from "react-router-dom";

import useAuth from "../concepts/auth/hooks/use-auth";

interface IProps {
  path: string;
  children: React.ReactNode;
}

export default function PrivateRoute({ path, children }: IProps) {
  const { isLoading, data: auth } = useAuth();

  return (
    <Route path={path}>
      {isLoading ? (
        "Loading..."
      ) : (
        <>{auth ? children : <Redirect to="/login" />}</>
      )}
    </Route>
  );
}
