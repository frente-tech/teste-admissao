import React from "react";
import GlobalStyle from "./globalStyles";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";

//config routes
import routes from "./config/routes";

const App: React.FunctionComponent<{}> = (props) => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                <route.component {...props} {...route.props} />
              )}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default App;
