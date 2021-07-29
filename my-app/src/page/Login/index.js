import React,{useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button, Menu } from "antd";
import logo from "../../assets/image/logo.png";
import {
  ContentHeader,
  ContentPost,
  RootPost,
  StyleHeader,
  WrapForm,
  WrapHomePage,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/action/login";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

export default function Login() {
  let history = useHistory()
  let dispatch = useDispatch();

 const User = useSelector(state=>state.user)

  const onFinish = (values) => {
    const {user} = values;
    dispatch(login(user.name,user.email))

  };

  return (
    <RootPost>
      {User.User && history.push("/post")}
      <WrapHomePage>
        <StyleHeader style={{ zIndex: 1, width: "100%" }}>
          <ContentHeader>
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="headerRight">
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[""]}>
                <Menu.Item key="1">
                  <Link to="/">Blog</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/post">Post</Link>
                </Menu.Item>
              </Menu>
              <div className="logo"> Author</div>
            </div>
          </ContentHeader>
        </StyleHeader>
      </WrapHomePage>
      <ContentPost>
        <div className="titleLogin">Vui lòng đăng nhập trước khi Post bài.</div>
        <WrapForm>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
            style={{width:"100%"}}
            labelAlign="left"
          >
            <Form.Item
              name={["user", "name"]}
              label="User Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ type: "email",required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </WrapForm>
      </ContentPost>
      <span>Data Login exemple:Bret/ Sincere@april.biz</span>
    </RootPost>
  );
}
