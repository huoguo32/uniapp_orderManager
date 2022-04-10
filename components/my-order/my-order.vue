<template>
  <view class="my-order">
    <!-- 左侧选中按钮 -->
    <radio checked color="#C00000"></radio>
    <!-- 右侧详细信息 -->
    <view class="main">
      <image src="../../static/beibao.jpg" mode=""></image>
      <!-- 主体内容 -->
      <view class="main-content">
        <view>名称：咸鱼</view>
        <view>单位：三实小</view>
        <view>单价：38￥</view>
        <view>数量：88份</view>
        <view>总价：888￥</view>
        <view>时间：2022.4.10</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'my-order',
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.my-order {
  margin-bottom: 10rpx;
  border: 1px solid gray;
  padding-left: 30rpx;
  display: flex;
  align-items: center;
  radio {
  }
  .main {
    display: flex;
    image{
      margin-left: 10rpx;
      width: 300rpx;
      height: 300rpx;
    }
    .main-content {
      margin-left: 30rpx;
      // background-color: pink;
      font-size: 30rpx;
      view{
        margin-top: 10rpx;
      }
    }
  }
}

</style>
