<template>
  <div class="page">
    <span class="BtnContainer">
      <i class="leftBtn fas fa-chevron-left" v-on:click="prePage"></i>
      <i class="rightBtn fas fa-chevron-right" v-on:click="nextPage"></i>
    </span>
  </div>
</template>

<script>
import { bus } from "./EventBus";

export default {
  data() {
    return {
      title: "",
      pageNumber: 1
    };
  },
  methods: {
    prePage() {
      bus.$on("bus:call", function(title, pageNumber) {
        this.title = title;
      });
      bus.$emit("bus:call", this.title, --this.pageNumber);
    },
    nextPage() {
      bus.$on("bus:call", function(title, pageNumber) {
        this.title = title;
      });
      bus.$emit("bus:call", this.title, ++this.pageNumber);
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
  width: 6%;
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