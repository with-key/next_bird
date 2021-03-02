import React from "react";
import { List, Button, Card } from "antd";
import styled from "styled-components";
import { StopOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const SList = styled(List)`
  margin-bottom: 20px;
  .SList__load_more {
    text-align: center;
    margin: 10px 0;
  }
`;

const FollowList = ({ header, data }) => {
  console.log(header, data);
  return (
    <SList
      grid={{ gutter: 4, xs: 2, md: 2 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div className="SList__load_more">
          <Button>더 보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card actions={[<StopOutlined key="stop"></StopOutlined>]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.arrayOf.isRequired,
};

export default FollowList;
