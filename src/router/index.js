import React from "react";
import { Route, Switch } from "react-router-dom";
import {router} from "./router";

function IndexRoute() {
  return (
    <Switch>
      {router.map((item, index) => {
        return (
          <Route
            path={item.path}
            exact={item.exact}
            render={item.render}
            key={index}
          ></Route>
        );
      })}
    </Switch>
  );
}
export default IndexRoute;
