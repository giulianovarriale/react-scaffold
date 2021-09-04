import React from "react";
import { Redirect, Route } from "react-router-dom";

import useCurrentUser from "../concepts/user/hooks/use-current-user";

interface IProps {
  path: string;
  children: React.ReactNode;
}

export default function PrivateRoute({ path, children }: IProps) {
  const { isLoading, data: currentUser } = useCurrentUser();

  return (
    <Route path={path}>
      {isLoading ? (
        "Loading..."
      ) : (
        <>{currentUser ? children : <Redirect to="/login" />}</>
      )}
    </Route>
  );
}
