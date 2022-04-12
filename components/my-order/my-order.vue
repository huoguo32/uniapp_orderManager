<template>
  <view class="my-order">
    <!-- 左侧选中按钮 -->
    <radio :checked="order[0].ischeck"  color="#C00000" @click="radioClickHandler"></radio>
    <!-- 右侧详细信息 -->
    <view class="main">
      <image :src="imgUrl || def.pic" mode=""></image>
      <!-- 主体内容 -->
      <view class="main-content">
        <view>商品：{{ order[0].goodsname || def.goodsname }}</view>
        <view>单位：{{ order[0].supplierid || def.supplierid }}</view>
        <view>单价：{{ order[0].price || def.price }}￥</view>
        <view>规格：{{ order[0].norm || def.norm }}公斤</view>
        <view>数量：{{ order[1].copies || def.copies }}</view>
        <view>总价：{{ totalPrice || def.totalPrice }}￥</view>
        <view>时间：<uni-dateformat :date="order[1].buytime" format='yyyy/MM/dd'></uni-dateformat></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'my-order',
  computed: {
    // 商品总价
    totalPrice() {
      return this.order[0].price * this.order[1].copies;
    },
    // 图片路径拼接
    imgUrl() {
      return `http://106.13.5.93/${this.order[0].imageurl}`;
    }
  },
  data() {
    return {
      // 图标选中状态
      ischeck: false,
      // 参数为空时默认数据
      def: {
        pic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
        goodsname: '未知',
        supplierid: '未知',
        price: '未知',
        copies: '未知',
        norm: '未知',
        copies: '未知',
        totalPrice: '未知',
        buytime: '未知'
      }
    };
  },
  methods: {
    // radio 组件的点击事件处理函数
    radioClickHandler() {
      // 通过 this.$emit() 触发外界通过 @ 绑定的 radio-change 事件，
      // 同时把商品的 Id 和 勾选状态 作为参数传递给 radio-change 事件处理函数
      this.order[0].ischeck = !this.order[0].ischeck ||false ;
      this.$emit('radio-change', {
        // 商品的 Id
        order_id: this.order[0].id,
        // 商品最新的勾选状态
        order_ischeck: this.order[0].ischeck
      });
    }
  },
  // 定义需要传入的值
  props: {
    // 商品的信息对象
    order: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
.my-order {
  padding-bottom: 7rpx;
  margin-bottom: 10rpx;
  border: 1px solid gray;
  padding-left: 30rpx;
  display: flex;
  align-items: center;
  radio {
  }
  .main {
    display: flex;
    image {
      margin-left: 10rpx;
      width: 300rpx;
      height: 300rpx;
    }
    .main-content {
      margin-left: 30rpx;
      // background-color: pink;
      font-size: 30rpx;
      view {
        margin-top: 10rpx;
      }
    }
  }
}
</style>
