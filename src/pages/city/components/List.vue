<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id"
          @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <div class="item-list" >
          <div class="item" v-for="innerItem of item" :key="innerItem.id"
         @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
import { mapState,mapMutations } from 'vuex'
export default {
  name: "CityList",
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  methods:{
    handleCityClick(city){
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed:{
    ...mapState({
      currentCity:'city'
    })
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.list {
  position: absolute;
  top: 71px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;

  .title {
    line-height: 20px;
    background-color: #eee;
    padding-left: 7px;
    color: #666;
    font-size: 14px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }

  .button-list {
    overflow: hidden;
    padding: 5px 30px 5px 5px;

    .button-wrapper {
      width: 33.33%;
      float: left;

      .button {
        margin: 4px;
        text-align: center;
        padding: 2px;
        border: 1px solid #ccc;
        border-radius: 3px;
        height: 18px;
        line-height: 18px;
        font-size: 16px;
      }
    }
  }

  .item-list {
    .item {
      height: 16px;
      line-height: 16px;
      padding: 8px;
      font-size: 16px;
      color: #666;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>