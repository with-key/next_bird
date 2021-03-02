import React from "react";
import { From, Input } from "antd";
import styled from "styled-components";

const SForm = styled(From)`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  padding: 20px;
`;

const NicknameEditForm = () => {
  return (
    <SForm>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </SForm>
  );
};

export default NicknameEditForm;
