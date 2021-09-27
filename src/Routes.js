import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPageLayout from "./layouts/LandingPageLayout";
import LandingPage from "./pages/LandingPage";
import { WithLayoutRoute } from "./routers";

function Routes() {
  return (
    <Router>
      <Switch>
        <WithLayoutRoute
          exact
          path="/"
          layout={LandingPageLayout}
          component={LandingPage}
        />
       
      </Switch>
    </Router>
  );
}

export default Routes;
