import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// import "antd/dist/antd.css";
import routes from "./router";
function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          // <Route exact key={route.path} path={route.path}>
          //   <route.component />
          // </Route>
          <Route
            exact
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
