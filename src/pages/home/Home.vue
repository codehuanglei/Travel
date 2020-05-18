<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-footer></home-footer>
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeFooter from "./components/Footer";
import axios from "axios";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeFooter
  },
  methods: {
    // getHomeInfo() {
    //   axios.get("/api/mock/index.json").then(this.getHomeInfoSucc);
    // },
    // getHomeInfoSucc(res) {
    //   console.log(res);
    // }
  },
  mounted() {
    // this.getHomeInfo();
  }
};
</script>
<style lang="stylus"></style>