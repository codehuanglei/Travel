<template>
  <div class="all">
    <div class="header-container">
      <!-- <img
        class="header-img"
        src="https://s.qunarzz.com/usercenter_mobile/images/my/mybgnew-20161111.jpg"
      />-->
      <router-link to="/">
        <div class="header-back">
          <i class="iconfont">&#xe769;</i>
        </div>
      </router-link>
      <div class="header-info">
        <img src="https://source.qunarzz.com/usercenter/touch/avatar.png" />
        <div class="info">登录/注册</div>
      </div>
    </div>
    <div class="monet-container">
      <div class="money">
        <div class="money-header">
          <div class="iconfont">&#xe600;</div>
          <span>我的钱包</span>
        </div>
        <div class="detail">
          <div>账户余额</div>
          <div>优惠券</div>
          <div>银行卡</div>
        </div>
      </div>
    </div>
    <div class="icons-container">
      <div>
        <i class="iconfont font">&#xe600;</i>我的订单
        <i class="iconfont back">&#xe603;</i>
      </div>
      <div>
        <i class="iconfont font">&#xe600;</i>我的退款
        <i class="iconfont back">&#xe603;</i>
      </div>
      <div>
        <i class="iconfont font">&#xe600;</i>我的发票
        <i class="iconfont back">&#xe603;</i>
      </div>
      <div>
        <i class="iconfont font">&#xe600;</i>我的攻略
        <i class="iconfont back">&#xe603;</i>
      </div>
    </div>
    <div class="footer">
      <div class="advice">
        <i class="iconfont font">&#xe600;</i>意见反馈
        <i class="iconfont back">&#xe603;</i>
      </div>
      <div class="link">
        <i class="iconfont font">&#xe600;</i>关于去哪儿网
        <i class="iconfont back">&#xe603;</i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style lang='stylus' scoped>
.all {
  height: 100vh;
  background-color: #eee;
}

.header-container {
  margin-top: 44px;
  height: 160px;

  // position: absolute;

  // .header-img {
  // position: relative;
  // height: 100px;
  // width: 100%;
  // z-index: -1;
  // }
  .header-back {
    padding: 10px;
  }

  .header-info {
    img {
      display: block;
      width: 65px;
      margin: 0 auto;
    }

    .info {
      font-size: 14px;
      padding: 5px;
      text-align: center;
    }
  }
}

.money {
  background-color: white;
  margin: 10px 0;
  width: 100%;
  height: 125px;

  .money-header {
    height: 45px;
    display: flex;

    .iconfont {
      font-size: 20px;
      vertical-align: middle;
      padding: 10px;
    }

    span {
      padding: 10px;
      font-size: 16px;
      flex: 1;
    }
  }

  .detail {
    display: flex;
    justify-content: space-evenly;

    div {
      font-size: 16px;
      height: 75px;
      line-height: 75px;
    }
  }
}

.icons-container {
  background-color: white;
  margin: 10px 0;
  height: 180px;
  display: flex;
  flex-direction: column;

  div {
    overflow: hidden;
    flex: 1;
    font-size: 16px;
    line-height: 45px;
  }

  .font {
    padding: 10px;
    font-size: 20px;
  }

  .back {
    float: right;
    padding-right: 10px;
    font-size: 14px;
  }
}

.footer {
  div {
    background-color: white;
    overflow: hidden;
    flex: 1;
    font-size: 16px;
    line-height: 45px;
  }

  .font {
    padding: 10px;
    font-size: 20px;
  }

  .back {
    float: right;
    padding-right: 10px;
    font-size: 14px;
  }
}
</style>