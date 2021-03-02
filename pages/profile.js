import React from "react";
import AppLayout from "../components/AppLayout";

const Profile = () => {
  const followerList = [
    { nickname: "김길동" },
    { nickname: "김둘리" },
    { nickname: "도우너" },
  ];
  const followingList = [
    { nickname: "마이콜" },
    { nickname: "피카츄" },
    { nickname: "루피" },
  ];
  return (
    <>
      <Head>
        <title>노드버드 | 프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm></NicknameEditForm>
        <FollowerList header="팔로워 목록" data={followerList}></FollowerList>
        <FollowingList
          header="팔로잉 목록"
          data={followingList}
        ></FollowingList>
      </AppLayout>
    </>
  );
};

export default Profile;
