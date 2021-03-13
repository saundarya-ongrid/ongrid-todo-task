import React from "react";
import { CustomButton } from "../../../shared/UI/CustomButton";
import { DemoApp } from "./components/DemoApp/DemoApp";
import { WelcomeHead } from "./components/WelcomeHead/WelcomeHead";

export const Home = (props) => {
  return (
    <div>
      <WelcomeHead />
      <DemoApp />
      <center>
        <CustomButton
          shape="round"
          style={{
            width: "250px",
            height: "70px",
            fontSize: "22px",
            marginBottom: "2%",
            border: "none",
            background: "#1F837D",
          }}
          title="Login"
          onClick={() => props.history.push("/login")}
        />
      </center>
    </div>
  );
};
