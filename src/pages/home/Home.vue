<template>
  <div>
    <home-header></home-header>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-footer></home-footer>
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeFooter from "./components/Footer";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeIcons,
    HomeRecommend,
    HomeFooter
  }
};
</script>
<style lang="stylus"></style>