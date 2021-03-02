import React from "react"; // next.js에서는 안써도 됨. 다만, 폴더의 이름이 반드시 pages여야 함
import AppLayout from "../components/AppLayout";

const Home = () => {
  return (
    <AppLayout>
      <div>hello, Next!</div>
    </AppLayout>
  );
};

export default Home;
