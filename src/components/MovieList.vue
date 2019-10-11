<template>
  <section>
    <ul>
      <div class="movie" v-for="(movie, index) in movies" :key="index">
        <img :src="movie.medium_cover_image" />
        <div class="movie__data">
          <h3 class="movie__title">{{ movie.title }}</h3>
          <h5 class="movie__year">{{ movie.year }}</h5>
          <ul className="movie__genres">
            <li v-for="(genre, index2) in movies[index].genres" :key="index2" className="genres__genre">
                    {{ genre }}
            </li>
          </ul>
          <p class="movie__summary">{{ movie.summary.slice(0, 180) }}...</p>
        </div>
      </div>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchItems: [],
      movies: {}
    };
  },
  methods: {
    doDataLoad: function() {
      const baseURI =
        "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";
      this.$http
        .get(`${baseURI}`, {
          params: {}
        })
        .then(response => {
          this.movies = response.data.data.movies;
          console.log(this.movies);
        })
        .catch(function(err) {})
        .then(function() {});

      if (localStorage.length > 0) {
        for (var i = 0; i < localStorage.length; i++) {
          this.searchItems.push(localStorage.key(i));
        }
      }
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

.movie img {
  position: relative;
  top: -50px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
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
</style>