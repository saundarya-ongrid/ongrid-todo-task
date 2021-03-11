import { Col, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../../actions/allActions";
import { BasicForm } from "../../../components/Forms/BasicForm";
import { loginForm } from "../../../static/FormJsonObj/FormJsonObj";

export const Login = (props) => {
  const dispatch = useDispatch();
  const login = (values) => {
    // console.log("values", values);

    if (values.username === "admin" && values.password === "ongrid") {
      dispatch(loginUserAction(values));
      props.history.push("/dashboard");
    } else {
      message.info("Wrong Credentials");
    }
  };
  return (
    <div style={{ background: "#F6F5F7", height: "100vh" }}>
      <div style={{ paddingTop: "13%" }}>
        <Col
          lg={{ span: 10, offset: 7 }}
          xs={{ span: 20, offset: 2 }}
          style={{
            padding: "15px",
            borderRadius: "10px",
            backgroundImage:
              "linear-gradient(to right bottom, #f1bbbd, #eebecd, #e7c3dc, #dbc9e8, #cfcfef)",
            boxShadow:
              "0 0 0 1px rgb(16 22 26 / 10%), 0 4px 8px rgb(16 22 26 / 20%), 0 18px 46px 6px rgb(16 22 26 / 20%)",
          }}
        >
          <h1>Login</h1>

          <BasicForm onSuccess={login} title="Login" FormJson={loginForm} />
        </Col>
      </div>
    </div>
  );
};
