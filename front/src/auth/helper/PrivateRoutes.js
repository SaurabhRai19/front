import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAutheticated } from "./index";

/*reacttraining->out of react/core/web select web->Redirects(Auth)
here we want to mount a single component so defined as component: Component
in case u want to mount multiple components we can use children
these Components come from whatever component we mount in Routes.js
For PrivateRoute it will just check isAuthenticated that is islogged in
For AdminRoute will also check the role of it
*/
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAutheticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;