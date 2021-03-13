import { Input } from "antd";
import React from "react";

export const CustomInput = ({ type, ...props }) => {
  return type === "password" ? (
    <Input.Password {...props} />
  ) : (
    <Input {...props} />
  );
};
