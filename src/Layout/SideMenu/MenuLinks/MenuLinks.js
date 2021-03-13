import { CarryOutOutlined, HomeOutlined, LogoutOutlined } from "@ant-design/icons";

export const MenuLinks = [
  {
    title: "Dashboard",
    name: "dashboard",
    href: "/dashboard",
    icon: <HomeOutlined />,
  },

  {
    title: "Todos",
    name: "todos",
    href: "/todos",
    icon: <CarryOutOutlined />,
  },

  {
    title: "Logout",
    name: "logout",
    href: "/",
    icon: <LogoutOutlined />,
  },
];
