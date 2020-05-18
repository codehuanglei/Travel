<template>
  <div class="icons">
    <div class="icon-1" v-for="item of imgList" :key="item.id">
      <img :src="item.imgUrl" />
      <p>{{item.text}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      imgList: [
        {
          id: "0001",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/hotel.png",
          text: "酒店"
        },
        {
          id: "0002",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          text: "机票"
        },
        {
          id: "0003",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/train.png",
          text: "火车票"
        },
        {
          id: "0004",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png",
          text: "度假"
        },
        {
          id: "0005",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/hotel.png",
          text: "景点门票"
        },
        {
          id: "0006",
          imgUrl:
            "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
          text: "海外酒店"
        },
        {
          id: "0007",
          imgUrl:
            "https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png",
          text: "特价机票"
        },
        {
          id: "0008",
          imgUrl:
            "https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png",
          text: "汽车票船票"
        },
        {
          id: "0009",
          imgUrl:
            "https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png",
          text: "自由行"
        },
        {
          id: "0010",
          imgUrl:
            "https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png",
          text: "攻略"
        },
        {
          id: "0011",
          imgUrl:
            "https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png",
          text: "民间客栈"
        },
        {
          id: "0012",
          imgUrl:
            "https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png",
          text: "专车自驾"
        },
        {
          id: "0013",
          imgUrl:
            "https://picbed.qunarzz.com/5b6737be49ca243072ca614f07803b83.png",
          text: "赚钱·信用卡"
        },
        {
          id: "0014",
          imgUrl:
            "https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png",
          text: "旅游团购"
        },
        {
          id: "0015",
          imgUrl:
            "https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png",
          text: "一日游"
        },
        {
          id: "0016",
          imgUrl:
            "https://picbed.qunarzz.com/f6bb08a239ce1b038204120a8d1e4669.png",
          text: "特惠酒店"
        },
        {
          id: "0017",
          imgUrl:
            "https://picbed.qunarzz.com/3a08f360e958ccb2b947049387873ace.png",
          text: "借钱"
        },
        {
          id: "0018",
          imgUrl:
            "https://picbed.qunarzz.com/19b4f6d2fabd617789fa5aad65b249da.png",
          text: "白金卡"
        },
        {
          id: "0019",
          imgUrl:
            "https://picbed.qunarzz.com/799d9d090d1625a854194460c8849fee.png",
          text: "游轮"
        },
        {
          id: "0020",
          imgUrl:
            "https://picbed.qunarzz.com/25e3b9f17a21a6e0113c57a23ffccde4.png",
          text: "周边短途"
        }
      ]
    };
  }
};
</script>
<style lang='stylus' scoped>
.icons {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  .icon-1 {
    width: 20%;
    height: 74px;

    img {
      width: 50px;
      padding: 10px;
    }

    p {
      font-size: 12px;
      text-align: center;
    }
  }

  .icon-2 {
    display: flex;
    flex: 1;
    justify-content: space-evenly;
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