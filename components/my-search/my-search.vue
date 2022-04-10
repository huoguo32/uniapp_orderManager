<template>
  <view>
    <view class="searchbar">
      <uni-search-bar :focus="true" v-model="searchValue" cancelButton="none" class="searchbar-bar" placeholder="请输入商品名称"></uni-search-bar>
      <button type="default" size="mini" class="searchbar-but">搜索</button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'my-search',
  data() {
    return {
      // 输入框的值
      searchValue: ''
    };
  }
};
</script>

<style lang="scss" scoped>
.searchbar {
  align-items: center;
  display: flex;
  padding: 2rpx;

  .searchbar-bar {
  }
  .searchbar-but {
    // margin-top: 35rpx;
    // background-color: pink;
    width: 150rpx;
    height: 75rpx;
  }
}
</style>
