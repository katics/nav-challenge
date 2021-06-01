import { FC } from "react";
import { Switch, Route } from "react-router-dom";

import { ROUTE_COMPONENTS, COMPONENT_PAGES } from "./AppRoutes";
import Dashboard from "../components/dashboard/Dashboard";
import SignUp from "../components/signUp/SignUp";

const components = {
  blank: undefined,
  [COMPONENT_PAGES.dashboard]: Dashboard,
  [COMPONENT_PAGES.signUp]: SignUp,
};

const RouteCreator: FC = () => {
  const routeComponents = ROUTE_COMPONENTS; // TODO Add check if route is protected and is everything is loaded
  return (
    <Switch>
      {routeComponents.map((route, routeKey) => {
        const component = components[route.component || "blank"];
        return (
          <Route
            key={`routesKey${routeKey.toString()}`}
            component={component}
            path={route.path}
            exact
          />
        );
      })}
    </Switch>
  );
};

export default RouteCreator;
