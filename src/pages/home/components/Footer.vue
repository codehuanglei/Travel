<template>
  <div>
    <p class="copy-right">
      <span>违法和不良信息举报电话：010-69194277</span>
      <span>违法和不良信息举报邮箱：tousu@qunar.com</span>
    </p>
    <div class="footer">
      <div>
        <i class="iconfont footer-icon-1">&#xe602;</i>
        <span>回顶部</span>
      </div>
      <div>
        <i class="iconfont footer-icon-2">&#xe600;</i>
        <span>订单</span>
      </div>
      <div>
        <i class="iconfont footer-icon-3">&#xe686;</i>
        <span>客服</span>
      </div>
      <div>
        <i class="iconfont footer-icon-4">&#xe601;</i>
        <span>我的</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeFooter"
};
</script>
<style lang='stylus' scoped>
.copy-right {
  text-align: center;
  font-size: 14px;
  color: #999;
  margin-bottom: 70px;
}

.footer {
  border-top: 1px solid #e0e0e0;
  height: 50px;
  background-color: white;
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 999;
  justify-content: space-evenly;
  align-items: center;

  .iconfont {
    font-size: 24px;
  }

  span {
    display: block;
    font-size: 12px;
  }
}
</style>