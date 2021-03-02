import React, { useCallback } from "react";
import { Button, Card, Avatar } from "antd";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLoggedOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">짹짹</div>, //
        <div key="followings">짹짹</div>,
        <div key="followings">짹짹</div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>With</Avatar>} title="Withd" />
      <Button onClick={onLoggedOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
