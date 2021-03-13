import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout } from "antd";
import { SideMenu } from "../../layout/SideMenu/Index";

const { Content } = Layout;

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.loginReducer.isAuth);

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Layout>
            <SideMenu {...rest}/>
            <Layout>
              <Content style={{ margin: '24px 16px 0' }}>
                <Component {...props} />
              </Content>
            </Layout>
          </Layout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
