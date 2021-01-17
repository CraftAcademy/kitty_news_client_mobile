const rootReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLE_INDEX':
      return {
        ...state,
        articles: action.payload,
      }
    case 'SET_CURRENT_ARTICLE':
      return {
        ...state,
        currentArticle: action.payload,
      }
    case 'SET_CREDENTIALS':
      return {
        ...state,
        credentials: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
