<template>
  <div>
    <div class="title">特惠度假</div>
    <div class="nav-today">
      <div class="nav-today-1">当季热门度假</div>
      <div class="nav-today-2">今日特惠度假</div>
    </div>
    <div class="icons">
      <div class="img-1">
        <img src="//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg" />
        <div>
          <span>含往返飞机票+4晚住宿</span>
        </div>
      </div>
      <div class="img-2">
        <img
          src="//imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg"
        />
        <div>
          <span>含往返飞机票+4晚住宿</span>
        </div>
      </div>

      <div class="img-3">
        <img
          src="//imgs.qunarzz.com/p/p27/201302/28/d14185ac8a47f6f993835fbb.jpg_256x160_c2ab9336.jpg"
        />
        <div>
          <span>含往返飞机票+4晚住宿</span>
        </div>
      </div>
      <div class="img-4">
        <img
          src="//imgs.qunarzz.com/p/p27/201302/28/d14185ac8a47f6f993835fbb.jpg_256x160_c2ab9336.jpg"
        />
        <div>
          <span>含往返飞机票+4晚住宿</span>
        </div>
      </div>
    </div>
    <div class="more">更多特惠度假</div>
    <div class="title">特惠门票</div>
    <div class="nav-today">
      <div class="nav-today-1">当季景点门票</div>
      <div class="nav-today-2">特惠门票</div>
    </div>
    <div class="icons">
      <div class="img-1">
        <img
          src="//img1.qunarzz.com/sight/p0/2004/5c/5c97bfb4aaf82866a3.img.jpg_256x160_eb9cb87f.jpg"
        />
        <div>
          <span>南昌融创乐园</span>
        </div>
      </div>
      <div class="img-2">
        <img
          src="//img1.qunarzz.com/sight/p0/1702/db/dbc8f6cf051b3803a3.water.jpg_256x160_0cff5839.jpg"
        />
        <div>
          <span>龙虎山</span>
        </div>
      </div>

      <div class="img-3">
        <img
          src="//img1.qunarzz.com/sight/p0/1812/a4/a40159d844958689a3.water.jpg_256x160_9f3acc66.jpg"
        />
        <div>
          <span>仙凤三宝</span>
        </div>
      </div>
      <div class="img-4">
        <img
          src="//img1.qunarzz.com/sight/p0/201311/19/1e9607bb9cd43d7fdbbe7f8970a3789d.jpg_256x160_7a66ffcc.jpg"
        />
        <div>
          <span>南昌之星摩天轮</span>
        </div>
      </div>
    </div>
    <div class="more">更多特惠门票</div>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend"
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

.icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  img {
    width: 174px;
  }

  div {
    width: 174px;
    text-align: center;
  }

  span {
    font-size: 14px;
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