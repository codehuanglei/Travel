<template>
  <div class="icons">
    <div class="icon-1">
      <div class="img-1">
        <img src="//s.qunarzz.com/homenode/images/touchheader/hotel.png" />
        <p>酒店</p>
      </div>
      <div class="img-2">
        <img src="//s.qunarzz.com/homenode/images/touchheader/flight.png" />
        <p>机票</p>
      </div>
      <div class="img-3">
        <img src="//s.qunarzz.com/homenode/images/touchheader/train.png" />
        <p>火车票</p>
      </div>
      <div class="img-4">
        <img src="//s.qunarzz.com/homenode/images/touchheader/package.png" />
        <p>度假</p>
      </div>
      <div class="img-5">
        <img src="//s.qunarzz.com/homenode/images/touchheader/piao.png" />
        <p>景点门票</p>
      </div>
    </div>
    <div class="icon-2">
      <div class="img-1">
        <img src="https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png" />
        <p>海外酒店</p>
      </div>
      <div class="img-2">
        <img src="https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png" />
        <p>低价机票</p>
      </div>
      <div class="img-3">
        <img src="https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png" />
        <p>汽车票船票</p>
      </div>
      <div class="img-4">
        <img src="https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png" />
        <p>自由行</p>
      </div>
      <div class="img-5">
        <img src="https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png" />
        <p>攻略</p>
      </div>
    </div>
    <div class="icon-3">
      <div class="img-1">
        <img src="https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png" />
        <p>民宿客栈</p>
      </div>
      <div class="img-2">
        <img src="https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png" />
        <p>专车自驾</p>
      </div>
      <div class="img-3">
        <img src="https://picbed.qunarzz.com/5b6737be49ca243072ca614f07803b83.png" />
        <p>赚钱·信用卡</p>
      </div>
      <div class="img-4">
        <img src="https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png" />
        <p>旅游团购</p>
      </div>
      <div class="img-5">
        <img src="https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png" />
        <p>一日游</p>
      </div>
      <div class="img6">
        <img src="https://picbed.qunarzz.com/f6bb08a239ce1b038204120a8d1e4669.png" />
        <p>特惠酒店</p>
      </div>
      <div class="img-7">
        <img src="https://picbed.qunarzz.com/3a08f360e958ccb2b947049387873ace.png" />
        <p>借钱</p>
      </div>
      <div class="img-8">
        <img src="https://picbed.qunarzz.com/19b4f6d2fabd617789fa5aad65b249da.png" />
        <p>白金卡</p>
      </div>
      <div class="img-9">
        <img src="https://picbed.qunarzz.com/799d9d090d1625a854194460c8849fee.png" />
        <p>邮轮</p>
      </div>
      <div class="img-10">
        <img src="https://picbed.qunarzz.com/25e3b9f17a21a6e0113c57a23ffccde4.png" />
        <p>周边短途</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeIcons"
};
</script>
<style lang='stylus' scoped>
.icons {
  margin-top: 20px;
  height: 300px;
  display: flex;
  flex-direction: column;

  .icon-1 {
    flex: 1;
    display: flex;
    justify-content: space-between;

    img {
      width: 50px;
      padding: 10px;
    }

    p {
      font-size: 10px;
      text-align: center;
    }
  }

  .icon-2 {
    display: flex;
    flex: 1;
    justify-content: space-between;

    img {
      width: 50px;
      padding: 10px;
    }

    p {
      font-size: 10px;
      text-align: center;
    }
  }

  .icon-3 {
    display: flex;
    flex: 1;
    justify-content: space-between;
    flex-wrap: wrap;

    img {
      width: 50px;
      padding: 10px;
    }

    p {
      font-size: 10px;
      text-align: center;
    }
  }
}
</style>