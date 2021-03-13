import React from "react";
import { Todos } from "../../../../private/Todos";

export const DemoApp = () => {
  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <center>
        <h1>Demo</h1>
      </center>

      <div
        style={{
          border: "2px solid white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "10px 18px 16px -6px #424144",
        }}
      >
        <Todos type='demo'/>
      </div>
    </div>
  );
};
