import React, { useCallback } from "react";
import { Button, Card, Avatar } from "antd";

import { logoutAction } from "../reducers/user";
import { useDispatch } from "react-redux";

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLoggedOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">짹짹</div>, //
        <div key="followings">팔로잉</div>,
        <div key="followers">팔로워</div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>With</Avatar>} title="Withd" />
      <Button onClick={onLoggedOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
