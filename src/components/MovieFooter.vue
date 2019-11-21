<template>
  <div class="page">
    <span class="BtnContainer">
      <i class="leftBtn fas fa-chevron-left" v-on:click="prePage"></i>
      <i class="rightBtn fas fa-chevron-right" v-on:click="nextPage"></i>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    prePage() {
      if(this.$store.state.page > 1) {
        this.$store.state.page--;
        this.$store.commit("doDataLoad");
      }
    },
    nextPage() {
      if(this.$store.state.movies.movie_count / 4 > this.$store.state.page) {
        this.$store.state.page++;
        this.$store.commit("doDataLoad");
      }
    }
  }
};
</script>

<style>
.page {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  width: 60%;
}
.BtnContainer {
  margin-left: auto;
  margin-right: auto;
  float: center;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 70px;
}
.leftBtn {
  color: white;
  vertical-align: middle;
}
.rightBtn {
  color: white;
  vertical-align: middle;
}
</style>