import { defineStore } from "pinia";
import axios from "axios";
export const postStore = defineStore("post", {
  state: () => ({
    posts: [],
    title: "Thierry projet et Hervé man",
  }),
  getters: {
    getPosts: (state) => state.posts,
    getTitle: (state) => state.title,
  },
  actions: {
    ajouter(post) {
      const res = axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: "",
        content: "",
      });
    },
    async fetch() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      this.posts = res.data;
      return this.posts;
    },
  },
});
