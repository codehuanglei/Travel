<template>
  <div>
    <home-header></home-header>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeIcons,
    HomeRecommend
  }
};
</script>
<style lang="stylus"></style>