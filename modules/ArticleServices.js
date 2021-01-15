import axios from "axios";
import store from "../state/store/store";

const API_URL = "http://localhost:3000/api";
const ArticleServices = {
  async index() {
    let response = await axios.get(API_URL + "/articles");
    store.dispatch({
      type: "FETCH_ARTICLE_INDEX",
      payload: response.data.articles,
    });
  },
  async show(id) {
    let response = await axios.get(API_URL + `/articles/${id}`);
    store.dispatch({
      type: "SET_CURRENT_ARTICLE",
      payload: response.data.article,
    });
  },
};

export default ArticleServices;
