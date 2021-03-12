import React, { useCallback, useState } from "react";
import { Button, Card, Popover } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import Avatar from "antd/lib/avatar/avatar";
import PostImages from "./PostImages";

const PostCard = ({ post }) => {
  const [liked, useLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);

  //optional chaning me && 이면 id 반환 , false이면 undfined 반환
  const id = useSelector((state) => state.user.me?.id);

  const onToggleLiked = useCallback(() => {
    useLiked((pre) => !pre);
  });

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((pre) => !pre);
  });

  return (
    <div>
      <Card
        cover={post.Images[0] && <PostImages images={post.images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone
              twoToneColor="#eb2f97"
              key="heart"
              onClick={onToggleLiked}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLiked} />
          ),
          <MessageOutlined key="message" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button>삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined key="ellipsis" />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
      </Card>
      {commentFormOpened && <div>입력창</div>}
    </div>
  );
};

export default PostCard;
