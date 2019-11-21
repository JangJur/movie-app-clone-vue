import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: "",
    page: "",
    movies: {}
  },
  mutations: {
    doDataLoad: function(state) {
      let that = this;
      
      axios
        .get("https://yts-proxy.now.sh/list_movies.json", {
          params: {
            sort_by: "rating",
            query_term: state.title,
            limit: 4,
            page: state.page
          }
        })
        .then(response => {
          if (response.data.data.movie_count !== 0) {
            state.movies = response.data.data;
          } else {
            alert("Input Full Movie Title");
          }
        })
        .catch(function(err) {})
        .then(function() {});
      }
  }
});