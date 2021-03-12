//react, next
import React, { useCallback, useState } from "react";
import Link from "next/link";

//antd
import { Form, Input, Button } from "antd";

// redux
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers/user";

//components
const LoginForm = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  return (
    <Form onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          value={password}
          onChange={onChangePassword}
          type="password"
          required
        />
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        {/* Link에 href 를 넣고 a에는 넣지 않는다. */}
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </div>
      <div></div>
      <div></div>
    </Form>
  );
};

export default LoginForm;
