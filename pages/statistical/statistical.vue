<template>
  <view class="wap">
    <!-- 导入搜索框组件 -->
    <my-search class="one1"></my-search>
    <!-- 导入筛选组件 -->
    <my-select></my-select>
    <!-- 分割线 -->
    <image src="../../static/cart_border@2x.png" mode=""></image>
    <!-- 导入订单组件 -->
    <my-order></my-order>
    <my-order></my-order>
    <my-order></my-order>
    <my-order></my-order>
    <!-- 导入分页器 -->
    <uni-pagination  class='pagination' title="标题文字" show-icon="true" :total='total' :current='page.current' :pageSize='page.pageSize'></uni-pagination>

  </view>
</template>

<script>
export default {
  data() {
    return {
      // 订单数据
      orderlist: [],
      // 请求数据参数
      canshu: 1,
      // 分页数据
      page:{
        current:'1',
        pageSize:'1'
      }
    }
  },
  computed:{
    total(){
      return this.orderlist.length
    }
  },
  onLoad() {
    this.getOrderList();
  },
  methods: {
    // 获取数据的方法
    async getOrderList() {
      const { data: res } = await uni.$http.get(`/Statistics/index/?supplierid=${this.canshu}`);
      this.orderlist = res;
      console.log(this.orderlist);
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination{
    /* 底部固定定位 */
    position: fixed;
    bottom: 0;
    left: 0;
    /* 设置宽高和背景色 */
    width: 100%;
    height: 80rpx;
    background-color: #f0f0f0;
    
}
image {
  height: 22rpx;
}
.one1 {
  margin-top: 20px;
  background-color: pink !important;
  // 设置定位效果为“吸顶”
  position: sticky;
  // 吸顶的“位置”
  top: 0;
  // 提高层级，防止被轮播图覆盖
  z-index: 999;
}
</style>
