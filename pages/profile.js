import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

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
        <FollowList header="팔로워 목록" data={followerList} />
        <FollowList header="팔로잉 목록" data={followingList} />
      </AppLayout>
    </>
  );
};

export default Profile;
