import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./router/PrivateRoute";

import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import ForgotPassword from "./screens/ForgotPassword";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/sign-up">
          <SignUp />
        </Route>

        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>

        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
