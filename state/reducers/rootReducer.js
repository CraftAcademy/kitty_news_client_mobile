import { action } from "commander";

const rootReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ARTICLE_INDEX":
      return {
        ...state,
        articles: action.payload,
      };
case "SET_CURRENT_ARTICLE":
  return {
    ...state,
    currentArticle: action.payload,
  }
    default:
      return state;
  }
};

export default rootReducer;
