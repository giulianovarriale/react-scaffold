import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./screens/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
