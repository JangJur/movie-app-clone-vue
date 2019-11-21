<template>
  <div>
    <b-row>
      <b-col sm="3">
      </b-col>
      <b-col sm="6">
        <b-form-input class="text-center" v-model="searchTitle" v-on:keyup.enter="searchMovie" placeholder="What do you want to Movie Title"></b-form-input>
      </b-col>
      <b-col sm="3">
        <b-button variant="outline-primary" v-on:click="clearInput"><i class="searchBtn fas fa-sync-alt"></i></b-button>
        <b-button variant="outline-primary" v-on:click="searchMovie"><i class="searchBtn fas fa-search"></i></b-button>
      </b-col>
    </b-row>
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