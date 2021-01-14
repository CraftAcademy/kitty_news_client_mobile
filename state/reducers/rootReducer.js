const rootReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ARTICLE_INDEX":
      return {
        ...state,
        articles: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
