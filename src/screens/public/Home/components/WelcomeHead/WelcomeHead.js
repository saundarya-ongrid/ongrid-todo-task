import React from "react";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Zoom from "react-reveal/Zoom";

import homeImg from "../../../../../assests/images/home.jpg";
import DashboardImg from "../../../../../assests/images/dashboard.png";
import todoImg from "../../../../../assests/images/todo2.png";

import { Col, Row } from "antd";

export const WelcomeHead = () => {
  return (
    <div>
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
          position: "absolute",
          top: 0,
          color: "black",
        }}
      >
        <img
          style={{
            width: "100%",
            zIndex: -1,
            position: "relative",
            filter: "blur(10px)",
          }}
          src={homeImg}
          alt="home"
        />
      </div>
      <div style={{ marginTop: "5%" }}>
        <Fade>
          <center>
            {" "}
            <h1 style={{ fontSize: "44px" }}>TODO Application</h1>{" "}
          </center>
        </Fade>

        <Row type="flex">
          <Col lg={{span:10, offset:1}} xs={{span:20, offset:2}}>
            <Zoom>
              <h2>Todo</h2>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Zoom>
          </Col>

          <Col lg={{span:11, offset:1}} xs={{span:20, offset:2}}>
            <Pulse>
              <img
                style={{
                  width: "100%",
                  borderRadius:'10px',
                  boxShadow:
              "10px 18px 16px -6px #424144",
                }}
                src={todoImg}
                alt="dashboard"
              />
            </Pulse>
          </Col>
        </Row>


        <Row type="flex" style={{marginTop:'2%'}}>
        <Col lg={{span:11, offset:1}} xs={{span:20, offset:2}}>
            <Pulse>
              <img
                style={{
                  width: "100%",
                  borderRadius:'10px',
                  boxShadow:
              "10px 18px 16px -6px #424144",
                }}
                src={DashboardImg}
                alt="todo"
              />
            </Pulse>
          </Col>

          <Col lg={{span:10, offset:1}} xs={{span:20, offset:2}}>
            <Zoom>
              <h2>About</h2>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Zoom>
          </Col>

          
        </Row>
      </div>
    </div>
  );
};
