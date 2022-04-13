<template>
  <view>
    <view class="searchbar">
      <uni-search-bar :focus="true" v-model="searchValue" cancelButton="none"  @clear='clearSearchbar' class="searchbar-bar" placeholder="请输入商品名称"></uni-search-bar>
      <button type="default" size="mini" class="searchbar-but" @click="nameSearch">搜索</button>
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
  },
  methods: {
    nameSearch() {
      if (this.searchValue.trim().length > 0) {
        console.log(111);
        this.$emit('nameSearch', {
          keyword: this.searchValue.trim()
        });
      }
    },
    clearSearchbar(){
      console.log('调用了清除按钮')
      this.$emit('clearSearch');
    },
  }
};
</script>

<style lang="scss" scoped>
.searchbar {
  // margin-top: 10rpx;
  align-items: center;
  display: flex;
  padding: 2rpx;
  .searchbar-bar{
    margin-left: 30rpx;
    width: 320rpx;
    // height: 75rpx;
    // text-align: center;
  }
  .searchbar-but {
    // margin-top: 35rpx;
    // background-color: pink
    width: 150rpx;
   
  }
}
</style>
