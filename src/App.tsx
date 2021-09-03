import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

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
      </Switch>
    </Router>
  );
}

export default App;
