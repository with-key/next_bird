import React, { useCallback, useState } from "react";
import { Form, Input, Button } from "antd";
import useInput from "../hooks/useInput";
import { useSelector } from "react-redux";

const CommentForm = ({ post }) => {
  const [commentText, onChangeCommentText] = useInput();
  const onSubmitComment = useCallback(() => {}, [commentText]);
  const id = useSelector((state) => state.user.me?.id);
  //항상 없는 경우를 대비하자

  console.log(id);

  return (
    <>
      <Form onFinish={onSubmitComment}>
        <Form.Item style={{ position: "relative" }}>
          <Input.TextArea
            value={commentText}
            onChange={onChangeCommentText}
            rows={4}
          />
          <Button
            type="primary"
            htmlType="submit"
            style={{
              position: "absolute",
              right: "0",
              bottom: "-40px",
              marginTop: "10px",
            }}
          >
            삐약
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CommentForm;
