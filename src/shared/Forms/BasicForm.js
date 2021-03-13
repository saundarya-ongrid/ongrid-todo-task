import { Form } from "antd";
import React from "react";
import { CustomButton } from "../UI/CustomButton";
import { CustomInput } from "../UI/CustomInput";

export const BasicForm = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // console.log("form value", values);
    props.onSuccess(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      {props.FormJson.map((value, index) => {
        return (
          <Form.Item
            key={index}
            name={value.name}
            label={value.title}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <CustomInput
              type={value.name === "password" ? "password" : null}
              placeholder={`Please Enter ${value.title}`}
            />
          </Form.Item>
        );
      })}

      <Form.Item>
        <center><CustomButton size='large' shape='round' type="primary" htmlType="submit" title={props.title} /></center>
      </Form.Item>
    </Form>
  );
};
