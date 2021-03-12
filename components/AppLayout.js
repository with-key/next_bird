import React from "react";
import Link from "next/link"; //링크 컴포넌트
import styled from "styled-components";
import { Menu, Input, Row, Col } from "antd";

import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";

const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => {
    console.log(state.user.user);
    return state.user.isLoggedIn;
  });
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={20}>
        <SCol xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </SCol>
        <SCol xs={24} md={12}>
          {children}
        </SCol>
        <SCol xs={24} md={6}></SCol>Z
      </Row>
    </div>
  );
};

const SCol = styled(Col)``;

export default AppLayout;
