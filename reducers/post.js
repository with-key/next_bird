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
            "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80",
        },
        {
          src:
            "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80",
        },
        {
          src:
            "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80",
        },
      ],
      Comments: [
        { User: { nickname: "nero" }, content: "얼른 사고 싶어요" },
        { User: { nickname: "nero" }, content: "얼른 사고 싶어요" },
        { User: { nickname: "nero" }, content: "얼른 사고 싶어요" },
      ],
    },
  ],
  ImagePaths: [],
  postAdded: false,
};

// action.type
const ADD_POST = "ADD_POST";

// action creator
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
