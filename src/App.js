import { Route, Switch } from "react-router";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1>hello</h1>
          </Route>
          <Route path="/papaya">
            <h1>papaya</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
