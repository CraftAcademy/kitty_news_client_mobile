import axios from "axios"
import store from "../state/store/store"

const API_URL = "http://localhost:3000/api"
const ArticleServices = {
  async index() {
    let response = await axios.get(API_URL + '/articles')
    store.dispatch({type: 'FETCH_ARTICLE_INDEX', payload: response.data.articles})

  }
}

export default ArticleServices