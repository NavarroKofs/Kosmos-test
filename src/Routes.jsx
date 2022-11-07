import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import FormPageComponent from "./components/pages/FormPageComponent/FormPageComponent";

// const FormPageComponent = lazy(
//   import("./components/pages/FormPageComponent/FormPageComponent")
// );

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <FormPageComponent />} />
      <Route path="*">
        <h1>Not Found</h1>
      </Route>
    </Switch>
  );
};

export default Routes;
