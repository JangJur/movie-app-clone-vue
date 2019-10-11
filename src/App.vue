<template>
  <div id="app">
    <MovieHeader></MovieHeader>
    <MovieInput></MovieInput>
    <MovieList></MovieList>
    <MovieFooter></MovieFooter>
  </div>
</template>

<script>
import MovieHeader from './components/MovieHeader.vue';
import MovieInput from './components/MovieInput.vue';
import MovieList from './components/MovieList.vue';
import MovieFooter from './components/MovieFooter.vue';

export default {
    components: {
      'MovieHeader' : MovieHeader,
      'MovieInput' : MovieInput,
      'MovieList' : MovieList,
      'MovieFooter' : MovieFooter
    }
}
</script>

<style>
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }

  * {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #F6F6F8;
  height: 100%;
}
</style>