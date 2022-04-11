<template>
  <view class="select">
    <!-- 全选按钮 -->
    <view class="check">
      <label class="radio">
        <radio color="#C00000" :checked="isAllCheck"  @click="checkAll"/>
        <text>全选</text>
      </label>
    </view>
    <!-- 时间筛选按钮 -->
    <view class="combox"><uni-combox :candidates="candidates" placeholder="按时间筛选" class="combox"></uni-combox></view>
    <!-- 导出为Excel按钮 -->
    <view class="excel"><button type="default" size="mini" class="excel">导出Excel</button></view>
  </view>
</template>

<script>
export default {
  name: 'my-select',
  data() {
    return {
      candidates: ['一天以内', '一周以内', '一月以内', '三月以内', '半年以内', '一年以内'],
      isAllCheck:false
    };
  },
  methods:{
    //实现所有的小check选中后，全选按钮自动选中
    quanxuan(e){
      this.isAllCheck=e
    },
    // 全选 、反选功能实现
    checkAll(){
      this.isAllCheck=!this.isAllCheck
      this.$emit('checkAll', {
        isAllCheck:this.isAllCheck
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.select {
  align-items: center;
  display: flex;
  justify-content: space-around;
  .check {
  }
  .combox {
    // margin-left: 30rpx;
    width: 270rpx;
  }
  .excel {
    width: 230rpx;
    height: 75rpx;
    font-size: 31rpx;
  }
}
</style>
