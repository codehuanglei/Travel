<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li v-for="item of list" :key="item.id" class="search-item">{{item.name}}</li>
        <li v-show="hasNoData" class="search-item">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: []
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            )
              result.push(value);
          });
          this.list = result;
        }
      }, 100);
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
  }
};
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

.search-content {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  bottom: 0;
  top: 70px;
  background: #eee;
  z-index: 1;

  .search-item {
    line-height: 24px;
    font-size: 16px;
    padding-left: 5px;
    background-color: #fff;
    color: 666;
    border-bottom: solid 1px #eee;
  }
}
</style>