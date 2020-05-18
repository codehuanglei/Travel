<template>
  <div class="header">
    <div class="header-search">
      <div class="header-input">
        <i class="iconfont search-icon">&#xe629;</i>
        <span class="search-input">搜索景点门票</span>
      </div>
    </div>
    <div class="header-right">
      <div class="download-icon">
        <i class="iconfont download-icon">&#xe673;</i>
        <div class="download-text">下载APP</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  background-color: $bgColor;
  width: 100vw;
  height: 50px;
  margin-top: -5px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
}

.header-search {
  flex: 4;

  .header-input {
    margin-top: 15px;
    margin-left: 15px;
    height: 36px;
    background-color: #eee;
    border-radius: 5px;

    .search-icon {
      padding: 10px;
      font-size: 18px;
      border-radius: 3px;
    }

    .search-input {
      font-size: 16px;
      color: #ccc;
    }
  }
}

.header-right {
  flex: 1;

  .download-icon {
    margin: 18px 15px 0px 15px;
    font-size: 20px;
    color: #eee;

    .download-text {
      font-size: 12px;
      text-align: center;
      color: #eee;
    }
  }
}
</style>