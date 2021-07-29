import React,{useRef,useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { Menu } from "antd";
import logo from "../../assets/image/logo.png";
import {
  ContentHeader,
  ContentPost,
  DivPost,
  DivTitle,
  RootPost,
  StyleHeader,
  WrapForm,
  WrapHomePage,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button } from "antd";
import { Card } from "react-bootstrap";
import ScrollView from "../../components/ScrollView";
import { setMyPost, updateMyPost } from "../../redux/action/mypost";
import { toast } from "react-toastify";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};

const validateMessages = {
  required: "${label} is required!",
};

export default function Post() {
  let history = useHistory();
  let dispatch = useDispatch();
  const User = useSelector((state) => state.user);
  const MyPost = useSelector((state) => state.myPost);
  const [myPostCurrent, setMyPostCurrent] =useState();

  let formRef = useRef()

  const onFinish = (values) => {
    if(!myPostCurrent){
      let newValuePost = {
        ...values,
        id: Math.random(),
      };
     return dispatch(setMyPost(newValuePost));
    }
    dispatch(updateMyPost({...values,id:myPostCurrent}))
    setMyPostCurrent("")
  };

  return (
    <RootPost>
      {!User.User && history.push("/login")}
      <WrapHomePage>
        <StyleHeader style={{ zIndex: 1, width: "100%" }}>
          <ContentHeader>
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="headerRight">
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                <Menu.Item key="1">
                  <Link to="/">Blog</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/post">Post</Link>
                </Menu.Item>
              </Menu>
              <div className="logo">{User.User ? User.User : "Author"}</div>
            </div>
          </ContentHeader>
        </StyleHeader>
      </WrapHomePage>
      <ContentPost>
        <WrapForm>
          <DivTitle> Post content</DivTitle>
          <Form
            {...layout}
            ref={formRef}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
            labelAlign="left"
            style={{ width: "100%" }}
          >
            <Form.Item
              name="title"
              label="Title"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="content"
              label="Content"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea style={{ height: "200px" }} />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
               {myPostCurrent? "UPDATE": "SAVE"}
              </Button>
            </Form.Item>
          </Form>
        </WrapForm>
        <DivPost>
          <div className="postInfo">Các bài post của bạn:</div>
          <ScrollView>
            {MyPost?.myPostList.length
              ? MyPost?.myPostList.map((elm) => {
                  return (
                    <Card style={{ width: "100%" }} key={elm.id}>
                      <Card.Header>{elm.title}</Card.Header>
                      <Card.Body>
                        <Card.Text>{elm.content}</Card.Text>
                        <Button
                          variant="primary"
                          onClick={() => {formRef.current.setFieldsValue(elm);setMyPostCurrent(elm.id)}}
                        >
                          Update
                        </Button>
                      </Card.Body>
                    </Card>
                  );
                })
              : "Bạn chưa có bài post nào."}
          </ScrollView>
        </DivPost>
      </ContentPost>
    </RootPost>
  );
}
