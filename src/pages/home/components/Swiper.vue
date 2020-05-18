<template>
  <div>
    <div class="wrapper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item of SwiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      },
      SwiperList: [
        {
          id: "0001",
          imgUrl:
            "https://gw.alicdn.com/tfs/TB1YoIhF7L0gK0jSZFAXXcA9pXa-490-300.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "https://gw.alicdn.com/tfs/TB1ZSzVAfb2gK0jSZK9XXaEgFXa-490-300.jpg"
        }
      ]
    };
  }
};
</script>
<style lang='stylus' scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: #eee;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 61.22%;
  background-color: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>