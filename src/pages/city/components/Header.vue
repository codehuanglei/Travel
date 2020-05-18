<template>
  <div class="header">
    <router-link to="/">
      <i class="iconfont city-icon">&#xe769;</i>
    </router-link>城市选择
  </div>
</template>
<script>
export default {
  name: "City"
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  position: relative;
  height: 35px;
  line-height: 35px;
  overflow: hidden;
  text-align: center;
  background-color: $bgColor;
  font-size: 16px;
  color: #eee;

  .city-icon {
    position: absolute;
    left: 0;
    color: #eee;
    padding-left: 10px;
  }
}
</style>