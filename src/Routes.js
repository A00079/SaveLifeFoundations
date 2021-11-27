import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPageLayout from "./layouts/LandingPageLayout";
import LandingPage from "./pages/LandingPage";
import SaveLifeCases from "./pages/SaveLifeCases";
import PayCheckout from "./pages/PayCheckout";
import TermsAndCondition from "./pages/TermsAndCondition";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
        <WithLayoutRoute
          exact
          path="/cases"
          layout={LandingPageLayout}
          component={SaveLifeCases}
        />
        <WithLayoutRoute
          exact
          path="/check-out-pay-ment"
          layout={LandingPageLayout}
          component={PayCheckout}
        />
        <WithLayoutRoute
          exact
          path="/terms-conditions"
          layout={LandingPageLayout}
          component={TermsAndCondition}
        />
        <WithLayoutRoute
          exact
          path="/refund-policy"
          layout={LandingPageLayout}
          component={RefundPolicy}
        />
        <WithLayoutRoute
          exact
          path="/privacy-policy"
          layout={LandingPageLayout}
          component={PrivacyPolicy}
        />
      </Switch>
    </Router>
  );
}

export default Routes;
