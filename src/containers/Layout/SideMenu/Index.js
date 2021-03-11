import React from "react";
import { Layout, Menu } from "antd";
import { MenuLinks } from "./MenuLinks/MenuLinks";
import { history } from "../../../store/store";

const { Sider } = Layout;

export const SideMenu = (props) => {
  // console.log(props)

  const onClickMenu = (url) => {
    return history.push(url);
  };
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["/dashboard"]}
        selectedKeys={[`${props.location.pathname}`]}
        style={{
          //   color: "#FFF8F9",
          minHeight: "100vh",
        }}
      >
        {MenuLinks.map((value) => {
          return (
            <Menu.Item
              onClick={() => onClickMenu(value.href)}
              key={value.href}
              style={{ marginBottom: "0px", background: "none" }}
            >
              {value.icon}
              <span
                className="nav-text"
                style={{ fontWeight: "500", fontSize: "13px" }}
              >
                {value.title}
              </span>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};
