<template>
  <view>
    <template>
    	<view class="container">
    		<uni-card :is-shadow="false" is-full>
    			<text class="uni-h6">组合框一般用于可以选择也可以输入的表单项。</text>
    		</uni-card>
    		<uni-section title="基本用法" type="line">
    			<view class="example-body">
    				<uni-combox :candidates="candidates" placeholder="请选择所在城市" v-model="city"></uni-combox>
    				<view class="result-box">
    					<text>所选城市为：{{city}}</text>
    				</view>
    			</view>
    		</uni-section>
    
    		<uni-section title="无边框" subTitle="使用 border = false 取消边框" type="line">
    			<view class="example-body">
    				<uni-combox :border="false" :candidates="candidates" placeholder="请选择所在城市"></uni-combox>
    			</view>
    		</uni-section>
    
    		<uni-section title="设置无匹配项时的提示语" subTitle="使用 emptyTips 属性设置无匹配项时的提示语" type="line">
    			<view class="example-body">
    				<uni-combox emptyTips="这里啥都没有" placeholder="请选择所在城市"></uni-combox>
    			</view>
    		</uni-section>
    	</view>
    </template>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="scss">

</style>
