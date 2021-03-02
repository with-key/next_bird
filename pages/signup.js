import React from "react";
import Head from "next/head";

const Singup = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>노드버드 | 회원가입</title>
      </Head>
      <div>회원가입 페이지</div>
    </>
  );
};

export default Singup;

// 서버가 돌아가고 있는 와중에 페이지를 만들면 next가 잘 인식못한다. 서버 재실행
