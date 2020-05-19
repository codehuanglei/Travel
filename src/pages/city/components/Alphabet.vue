<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item,key) of cities"
      :key="key"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{key}}</li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false
    };
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerHTML);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove() {},
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 86px;
  width: 20px;
  top: 71px;
  right: 0;
  bottom: 0;

  .item {
    text-align: center;
    line-height: 16px;
    font-size: 16px;
    color: $bgColor;
  }
}
</style>