import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link"; //링크 컴포넌트
import styled from "styled-components";
import { Menu, Input, Row, Col } from "antd";

//
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";

const SCol = styled(Col)``;

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </SCol>
        <SCol xs={24} md={12}>
          {children}
        </SCol>
        <SCol xs={24} md={6}>
          <a href="https://naver.com" target="_blank" rel="noreferrer noopener">
            made by WithYe
          </a>
        </SCol>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
