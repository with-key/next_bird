export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "woody",
      },
      content: "첫번째 게시글",
      Images: [
        {
          src:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fgigs%2Fz7yn41576604482.jpg&imgrefurl=https%3A%2F%2Fkmong.com%2Fgig%2F19912&tbnid=ZNUUliHAqZn5GM&vet=10CGAQMyiSAWoXChMIkJ2e0qij7wIVAAAAAB0AAAAAEAI..i&docid=ChU6LCiO0sfLcM&w=652&h=488&q=%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8&ved=0CGAQMyiSAWoXChMIkJ2e0qij7wIVAAAAAB0AAAAAEAI",
        },
        {
          src:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fgigs%2Fz7yn41576604482.jpg&imgrefurl=https%3A%2F%2Fkmong.com%2Fgig%2F19912&tbnid=ZNUUliHAqZn5GM&vet=10CGAQMyiSAWoXChMIkJ2e0qij7wIVAAAAAB0AAAAAEAI..i&docid=ChU6LCiO0sfLcM&w=652&h=488&q=%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8&ved=0CGAQMyiSAWoXChMIkJ2e0qij7wIVAAAAAB0AAAAAEAI",
        },
        {
          src:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fgigs%2Fz7yn41576604482.jpg&imgrefurl=https%3A%2F%2Fkmong.com%2Fgig%2F19912&tbnid=ZNUUliHAqZn5GM&vet=10CGAQMyiSAWoXChMIkJ2e0qij7wIVAAAAAB0AAAAAEAI..i&docid=ChU6LCiO0sfLcM&w=652&h=488&q=%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8&ved=0CGAQMyiSAWoXChMIkJ2e0qij7wIVAAAAAB0AAAAAEAI",
        },
      ],
      Comments: [{ User: { nickname: "nero" }, content: "얼른 사고 싶어요" }],
    },
  ],
  ImagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: { id: 1, nickname: "woody" },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
