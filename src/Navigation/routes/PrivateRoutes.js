import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.loginReducer.isAuth);

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <div>
            {/* <Header /> */}
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
