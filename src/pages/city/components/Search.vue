<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名或拼音" />
  </div>
</template>
<script>
export default {};
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl';

.search {
  height: 36px;
  padding: 0 10px;
  background-color: $bgColor;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    padding: 0 2px;
    border-radius: 5px;
    font-size: 16px;
    color: #666;
  }
}
</style>