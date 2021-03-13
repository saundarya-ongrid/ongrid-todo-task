import { Col, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { BasicForm } from "../../../shared/Forms/BasicForm";
import { loginForm } from "../../../static/FormJsonObj/FormJsonObj";
import { loginUserAction } from "./actions/loginUserAction";


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
    <div style={{ backgroundImage:'linear-gradient(to right bottom, #08272c, #02232d, #011f2d, #031b2c, #08162a, #071427, #051224, #030f21, #000f1c, #000e17, #000c10, #010809)', height: "100vh" }}>
      <div style={{ paddingTop: "13%" }}>
        <Col
          lg={{ span: 10, offset: 7 }}
          xs={{ span: 20, offset: 2 }}
          style={{
            padding: "15px",
            borderRadius: "10px",
            backgroundImage:
              "linear-gradient(to right bottom, #05191c, #021a19, #031b14, #091b0c, #131a02)",
            boxShadow:
              "10px 18px 16px -6px black",
          }}
        >
          <h1>Login</h1>

          <BasicForm onSuccess={login} title="Login" FormJson={loginForm} />
        </Col>
      </div>
    </div>
  );
};
