import React from "react";
import { Layout, Menu } from "antd";
import { MenuLinks } from "./MenuLinks/MenuLinks";
import { useDispatch } from "react-redux";
import { history } from "../../store/store";
import { logoutAction } from "../../screens/public/Login/actions/loginUserAction";



const { Sider } = Layout;

export const SideMenu = (props) => {
const dispatch = useDispatch();

  // console.log(props)

  const onClickMenu = (url) => {
    if (url === "/") {
      dispatch(logoutAction());
      localStorage.clear();
      return history.push(url);
    }
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
        <img src='https://ongrid.in/images/home/logo/logo_ongrid-darkbakground.png' style={{height:'60px', padding:'5px', marginLeft:'15px'}} alt='logo'/>
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
