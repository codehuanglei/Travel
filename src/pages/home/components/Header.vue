<template>
  <div class="header">
    <div class="header-search">
      <div class="header-input">
        <i class="iconfont search-icon">&#xe629;</i>
        <span class="search-input">搜索景点门票</span>
      </div>
    </div>
    <router-link to='/city'>
       <div class="area">
       <div class='area-text'>{{this.city}}</div>
       </div>     
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "Header",
  computed:{
    ...mapState(['city'])
  }
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

  .header-search {
    width :85%

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
 .area{
   position:relative;
      .area-text{
        min-width :40px
        position:absolute;
        top:24px
        left:10px
        font-size: 15px;
        text-align center
        color: #eee;
      }
}
}
</style>