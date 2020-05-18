<template>
  <div>
    <div class="title">特惠度假</div>
    <div class="nav-today">
      <div class="nav-today-1">当季热门度假</div>
      <div class="nav-today-2">今日特惠度假</div>
    </div>
    <div class="icons">
    <div class="icons-hot" v-for="item of imgList" :key="item.id">
      <img :src="item.imgUrl" />
      <p>{{item.text}}</p>
    </div>
    </div>
    <div class="more">更多特惠度假</div>
    <div class="title">特惠门票</div>
    <div class="nav-today">
      <div class="nav-today-1">当季景点门票</div>
      <div class="nav-today-2">特惠门票</div>
    </div>
    <div class="icons">
      <div class="icons-hot" v-for="item of recommendList" :key="item.id">
        <img :src="item.imgUrl" />
        <p>{{item.text}}</p>
      </div>
    </div>
     <div class="more">更多精彩攻略</div>
    </div>
        
</template>
<script>
export default {
  name: "HomeRecommend",
  data(){
    return{
      imgList:[{
        id:"0001",
        imgUrl:"//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg",
        text:"往返飞机票+4晚住宿"
      },{
        id:"0002",
        imgUrl:"//imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg",
        text:"往返飞机票+4晚住宿"
      },{
        id:"0003",
        imgUrl:"//imgs.qunarzz.com/p/p27/201302/28/d14185ac8a47f6f993835fbb.jpg_256x160_c2ab9336.jpg",
        text:"往返飞机票+4晚住宿"
      },{
        id:"0004",
        imgUrl:"//imgs.qunarzz.com/p/p27/201302/28/d14185ac8a47f6f993835fbb.jpg_256x160_c2ab9336.jpg",
        text:"往返飞机票+4晚住宿"
      }],
      recommendList:[{
        id:"0001",
        imgUrl:"//img1.qunarzz.com/sight/p0/2004/5c/5c97bfb4aaf82866a3.img.jpg_256x160_eb9cb87f.jpg",
        text:"南昌融创乐园"
      },{
        id:"0002",
        imgUrl:"//img1.qunarzz.com/sight/p0/1702/db/dbc8f6cf051b3803a3.water.jpg_256x160_0cff5839.jpg",
        text:"龙虎山"
      },{
        id:"0003",
        imgUrl:"//imgs.qunarzz.com/p/p71/1809/50/b5597c7332bef702.jpg_256x160_2bf11d51.jpg",
        text:"仙凤三宝"
      },{
        id:"0004",
        imgUrl:"//img1.qunarzz.com/sight/p0/201311/19/1e9607bb9cd43d7fdbbe7f8970a3789d.jpg_256x160_7a66ffcc.jpg",
        text:"南昌之星摩天轮"
      }]
    }
  }
};
</script>
<style lang='stylus' scoped>
.title {
  margin: 30px 30px 15px 15px;
  color: #26282a;
  font-size: 18px;
  font-weight: 700;
}

.nav-today {
  display: flex;
  align-items: center;
  margin: 10px;

  .nav-today-1 {
    display: flex;
    padding: 0 13px;
    margin-right: 7.5px;
    width: 72px;
    height: 30px;
    border: 1px solid #17c0c8;
    font-size: 12px;
    color: #fff;
    background-color: #17c0c8;
    border-radius: 3px;
    align-items: center;
  }

  .nav-today-2 {
    display: flex;
    padding: 0 13px;
    width: 72px;
    height: 30px;
    color: #666;
    border: 1px solid #eee;
    border-radius: 3px;
    background-color: white;
    font-size: 12px;
    align-items: center;
  }
}
.icons{
   display: flex;
    flex-wrap:wrap
  .icons-hot {
    width :50%
    padding:5px;
    box-sizing:border-box

    img {
      width: 100%;
    }

    p {
      padding:3px
      font-size: 14px;
      text-align:center
    }
  }
}

.more {
  font-size: 14px;
  border: 1px solid #00d0d4;
  border-radius: 3px;
  margin: 15px;
  line-height: 40px;
  text-align: center;
  color: #00d0d4;
}
</style>