import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

// reducer 분리
const rootReducer = combineReducers({
  // HYDRATE 를 위한 reducer "index"
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log(HYDRATE, action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
