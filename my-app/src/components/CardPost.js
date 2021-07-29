import React, { useState, useEffect } from "react";
import Avatar from "antd/lib/avatar/avatar";
import Meta from "antd/lib/card/Meta";
import { Button, Card } from "react-bootstrap";
import styled from "styled-components";
import typicodeApi from "../api/typicodeApi";

export default function CardPost({ data }) {
  const [isHiddenText, setIsHiddenText] = useState(true);
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [dataComment, setDataComment] = useState([])

  useEffect(() => {
    if (data?.id) {
      typicodeApi.getCommentOnPost(data?.id).then(res=>{
        if(res.status!==200){
          throw res
        }
        let {data} = res
        setDataComment(data)
      });
    }
  }, []);

  function HiddenText(value) {
    if (isHiddenText && value) {
      return value.slice(0, 100) + "...";
    }
    return value;
  }

  HiddenText();
  return (
    <RootCard>
      <Card>
        <Card.Header>{data?.title}</Card.Header>
        <Card.Body>
          <Card.Title>Author: {data?.userId}</Card.Title>
          <Card.Title>Created: {data?.id}</Card.Title>
          <Card.Text>{HiddenText(data?.body)}</Card.Text>
          <Button
            variant="primary"
            onClick={() => setIsHiddenText(!isHiddenText)}
          >
            {isHiddenText ? "Read More" : "Hidden"}
          </Button>
        </Card.Body>
      </Card>
      <TitleComment onClick={() => setIsOpenComment(!isOpenComment)}>
        {dataComment.length} Replices
      </TitleComment>
      {isOpenComment && (
        <Comment>
          {dataComment.length ? dataComment.map(elm=>{
            return(
              <Card
              key = {elm.id}
              style={{
                width: "100%",
                marginTop: 8,
                borderLeft: "none",
                borderRight: "none",
              }}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={elm.name}
                description={elm.body}
              />
            </Card>
            )
          }):""}

        </Comment>
      )}
    </RootCard>
  );
}

const RootCard = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 920px;
  width: 100%;
  background: #fff;
  margin-top: 12px;
  border-radius: 8px;
  padding-bottom: 24px;
  -webkit-box-shadow: 0px 1px 5px 0px #000000;
  box-shadow: 0px 1px 5px 0px #000000;

  .card {
    border: none;
  }
  .card-header {
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 500;
  }
`;

const TitleComment = styled.div`
  display: flex;
  margin: 0 20px;
  font-size: 16px;
  font-weight: 500;
  color: #806767cc;
  padding-bottom: 12px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
`;

const Comment = styled.div`
  width: 100%;
  padding: 0 24px;

  .ant-card-meta {
    margin-top: 8px 0;
  }
`;
