<template>
  <div class="inputBox shadow">
    <input
      type="text"
      v-model="searchTitle"
      placeholder="What do you want to Movie Title"
      v-on:keyup.enter="searchMovie"
    />
    <span class="searchContainer" v-on:click="searchMovie">
      <i class="searchBtn fas fa-search" aria-hidden="true"></i>
    </span>
    <span class="refreshContainer" v-on:click="clearInput">
      <i class="refreshBtn fas fa-sync-alt" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>

export default {
  
  data() {
    return {
      searchTitle: ""
    };
  },
  methods: {
    searchMovie() {
      this.$store.state.title = this.searchTitle;
      this.$store.state.page = 1;
      this.$store.commit("doDataLoad");
    },
    clearInput() {
      this.searchTitle = "";
    }
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  float: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  width: 50%;
}
.inputBox input {
  text-align: center;
  border-style: none;
  font-size: 0.9rem;
  width: 60%;
}
.refreshContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 40px;
}
.refreshBtn {
  color: white;
  vertical-align: middle;
}
.searchContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 40px;
  border-radius: 0 5px 5px 0;
}
.searchBtn {
  color: white;
  vertical-align: middle;
}
</style>