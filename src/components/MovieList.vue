<template>
  <section>
    <ul>
      <div class="movie" v-for="(movie, index) in movies" :key="index">
          <img class="movie__poster" :src="movie.medium_cover_image" />
        <div class="movie__data">
          <h3 class="movie__title">{{ movie.title }}</h3>
          <h5 class="movie__year">{{ movie.year }}</h5>
          <ul className="movie__genres">
            <!-- <li v-for="(genre, index2) in movies[index].genres" :key="index2" className="genres__genre">
              {{ genre }}
            </li> -->
            <span v-for="(genre, index) in movie.genres" :key="genre">
              <li className="genres__genre" v-if="index < 2">
                {{ genre }}
              </li>
            </span>
          </ul>
          <p class="movie__summary">{{ movie.summary.slice(0, 180) }}...</p>
        </div>
      </div>
    </ul>
  </section>
</template>

<script>
import axios from 'axios';
import MovieInputVue from './MovieInput.vue';
import { bus } from './EventBus';

export default {
  data() {
    return {
      movies: {}
    };
  },
  methods: {
    doDataLoad: function() {
      var that = this;
      bus.$on("bus:call", function(title) {
        axios.get('https://yts-proxy.now.sh/list_movies.json', {
          params: {
            sort_by: "rating",
            query_term: title
          }
        })
        .then(response => {
          if(response.data.data.movie_count !== 0) {
            that.movies = response.data.data.movies;
          }
          else {
            alert("Input Full Movie Title");
          }
        })
        .catch(function(err) { })
        .then(function() { });
      })
    }
  },
  mounted() {
    this.doDataLoad();
  }
};
</script>

<style>
.movie {
  float: left;
  width: 45%;
  height: 300px;
  background-color: white;
  margin-top: 2%;
  margin-bottom: 2%;
  margin-left: 1%;
  margin-right: 1%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
}

.movie .movie__data{
    width:30%;
    box-sizing:border-box;
    text-overflow: ellipsis;
}

.movie .movie__data:last-child{
    padding:20px 0;
    width:60%;
}

.movie .movie__title,
.movie .movie__year {
  margin: 0;
  font-weight: 300;
}

.movie .movie__title {
  margin-bottom: 5px;
  font-size: 24px;
  color: #2c2c2c;
}

.movie .movie__genres {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  margin: 5px 0px;
}

.movie__genres li,
.movie .movie__year {
  margin-right: 10px;
  font-size: 14px;
}

.movie .movie__poster {
  position: relative;
  top: -50px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
}

@media screen and (min-width:320px) and (max-width:667px){
    .movie{
        width:100%;
    }
}

@media screen and (min-width:320px) and (max-width:667px) and (orientation: portrait){
    .movie .movie__poster{
      top: 0;
      left: 0;
      width: 100%;
    }
    .movie .movie__data{
      width: 100%!important;
      font-size: 10px;
    }
    .movie .movie__title,
    .movie .movie__year {
      font-size: 15px;
    }
}
</style>
