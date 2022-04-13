<template>
  <view class="wap">
    <view class="tip">{{ successTip }}</view>
    <!-- 导入搜索框组件 -->
    <my-search
      ref="search"
      class="my-search"
      @nameSearch="nameSearch"
      @clearSearch="clearSearch"
    ></my-search>
    <!-- 导入筛选组件 -->
    <!-- <button type="default" @click="timeSelect(i)">2313</button> -->
    <my-select
      @checkAll="checkAll"
      ref="select"
      @timeSelect="timeSelect"
      @tableToExcel="tableToExcel"
    ></my-select>
    <!-- 分割线 -->
    <image src="../../static/cart_border@2x.png" mode=""></image>
    <!-- 导入订单组件 -->
    <view class="my-order">
      <block v-for="order in schArr" :key="order[0].id"
        ><my-order :order="order" @radio-change="radioChangeHandler"></my-order
      ></block>
    </view>

    <uni-pagination
      class="pagination"
      title="标题文字"
      show-icon="true"
      :total="total"
      :current="page.current"
      :pageSize="page.pageSize"
      @change="change"
    ></uni-pagination>
  </view>
</template>

<script>
// 引入modemon自己写好的获取几天前时间段的函数
import { getPreDayDate, formatDate } from '../../modemon/lianxi.js'
// 引入导出Excel文件所封装好的方法
import {
  excelsave_Web,
  excelsave_Weixin,
  excelsave_APP
} from '../../common/excelsave/excelsave.js'
export default {
  data() {
    return {
      successTip: '',
      // 导出的文件储存路径
      
      orderlist: [],
      // 订单数据s

      // 请求数据参数
      canshu: 1,
      // 分页数据
      page: {
        current: 1,
        pageSize: 5
      },
      // 分页显示的数据列表
      schArr: []
    }
  },
  computed: {
    total() {
      return this.orderlist.length
    }
  },
  onLoad() {
   
    // 注意开发时写了假数据，所以先调用this.getPageData，开发完成后用真数据时用this.getOrderList();
    this.getOrderList()
    // this.getPageData();
  },
  methods: {
    // 获取数据的方法
    async getOrderList() {
      const { data: res } = await uni.$http.get(
        `/Statistics/index/?supplierid=${this.canshu}`
      )
      res.forEach((e, index) => {
        e[0].ischeck = false
        e[1].buytime = Number(e[1].buytime)
      })
      this.orderlist = this.timeSort(res)
      // this.orderlist = res;

      this.getPageData()
      // console.log(this.orderlist);
    },
    // 根据分页设置的数据控制每页显示的数据条数及页码跳转页面刷新
    getPageData() {
      let start = (this.page.current - 1) * this.page.pageSize
      let end = start + this.page.pageSize

      this.schArr = this.orderlist.slice(start, end)
    },
    // 分页器自带事件：页面切换
    change(e) {
      this.page.current = e.current
      // console.log('adsadasdasd')
      this.getPageData()
    }, // 商品的勾选状态发生了变化
    // 自定义事件：改变单选标签状态
    radioChangeHandler(e) {
      // console.log(e);
      // order_id: 19, order_ischeck: true
      // 在列表中查找
      const findResult = this.orderlist.find((x) => x[0].id === e.order_id)
      if (findResult) {
        findResult[0].ischeck = e.order_ischeck
        // 此步骤是为了重新刷新下渲染组件所用的schArr
        this.getPageData()
        // 查看下是不是所有的小框都被选中
        let a = this.orderlist.every((obj) => obj[0].ischeck === true)
        if (a) {
          this.$refs.select.quanxuan(true)
        } else {
          this.$refs.select.quanxuan(false)
        }
      }
    },
    //改变全选按钮状态
    checkAll(e) {
      // console.log(e);
      this.orderlist.forEach((x) => (x[0].ischeck = e.isAllCheck))
      console.log(this.orderlist)
      this.getPageData()
    },
    // 根据名字查找商品
    nameSearch(e) {
      this.getPageData()
      // console.log(222);
      // console.log(e.keyword);
      const selectArr = this.orderlist.filter((item) =>
        item[0].goodsname.includes(e.keyword)
      )
      if (selectArr.length > 0) {
        this.orderlist = selectArr
        this.getPageData()
      } else {
        uni.showToast({
          icon: 'error',
          title: '未查到结果',
          duration: 2000
        })
      }
    },
    // 清除搜索状态
    clearSearch() {
      this.getOrderList()
      this.schArr = []
      this.schArr = this.orderlist
      this.$refs.select.quanxuan(false)
    },
    // 定义一个对时间进行排序的函数
    timeSort(arr) {
      function sortData(a, b) {
        return b[1].buytime - a[1].buytime
      }
      return arr.sort(sortData)
    },
    // 定义一个根据时间条件筛选数据的函数
    async timeSelectArray(day) {
      // 重新请求数据
      await this.getOrderList()
      // 重新请求数据后刷新全选按钮状态
      this.$refs.select.quanxuan(false)
      var a = getPreDayDate(day)
      const arr2 = this.orderlist.filter((x) => x[1].buytime > a)
      this.orderlist = this.timeSort(arr2)
      this.getPageData()
    },

    // 根据选择时间段选择筛选数据规则
    timeSelect(i) {
      // console.log(i);
      // 引入获取当前时间函数，获取当前时间戳
      // var now = getNowDate();
      // var nowFormat = formatDate(now, 'YYYY-MM-DD');
      // console.log(nowFormat)
      if (i == 1) {
        // 说明用户选择的是三天以内
        this.timeSelectArray(3)
      } else if (i == 2) {
        // 说明用户选择的是一周以内
        this.timeSelectArray(7)
      } else if (i == 3) {
        // 说明用户选择的是一月一内
        this.timeSelectArray(30)
      } else if (i == 4) {
        this.timeSelectArray(91)
      } else if (i == 5) {
        // 说明用户选择的半年以内
        this.timeSelectArray(182)
      } else if (i == 6) {
        // 说明用户选择的一年以内
        this.timeSelectArray(365)
      } else {
        // 说明用户选择的全部
        // 防止搜索框还有数据，清空搜索框,清空全选
        this.$refs.select.quanxuan(false)
        this.$refs.search.searchValue=''
        // 重新调用接口获取数据
        this.getOrderList()
      }
    },
    // 根据数据渲染excel
    tableToExcel() {
      var arr = this.orderlist.filter((obj) => obj[0].ischeck === true)
      if (!arr.length > 0) {
        return uni.showToast({
          icon: 'error',
          title: '请选择',
          duration: 2000
        })
      }
      // console.log(arr)
      // 列标题
      let worksheet = 'sheet1'
      let str =
        '<tr><td>编号</td><td>商品名称</td><td>单价</td><td>供应商</td><td>规格</td><td>图片链接</td><td>show</td><td>是否选中</td><td>购买时间</td><td>购买份数</td></tr>'
      // 循环遍历，每行加入tr标签，每个单元格加td标签
      for (let i = 0; i < arr.length; i++) {
        str += '<tr>'
        for (let item in arr[i][0]) {
          // 增加\t为了不让表格显示科学计数法或者其他格式
          str += `<td>${arr[i][0][item] + '\t'}</td>`
        }
        str += `<td>${formatDate(arr[i][1].buytime) + '\t'}</td>`
        str += `<td>${arr[i][1].copies + '\t'}</td>`
        // for (let x in arr[i][1]) {
        //   // 增加\t为了不让表格显示科学计数法或者其他格式
        //   str += `<td>${arr[i][1][x] + '\t'}</td>`;
        // }
        str += '</tr>'
      }
      // 下载的表格模板数据
      let template = `<html xmlns:o="urn:schemas-microsoft-com:office:office" 
            xmlns:x="urn:schemas-microsoft-com:office:excel" 
            xmlns="http://www.w3.org/TR/REC-html40">
            <head><meta charset="UTF-8"><!--[if gte mso 9]><xml encoding="UTF-8"><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
            <x:Name>${worksheet}</x:Name>
            <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
            </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
            </head><body><table>${str}</table></body></html>`
            // console.log(uni.getSystemInfoSync())
      // 下载模板
      //判断所处环境，调用不同方法
      switch(uni.getSystemInfoSync().platform){
          case 'android':
             excelsave_APP(template)
             break;
          case 'ios':
             uni.showToast({
               icon: 'error',
               title: 'ios端暂不支持导出',
               duration: 2000
             })
             break;
          case 'devtools':
             excelsave_Weixin(template)
             break;
          case 'windows':
             excelsave_Web(template)
             break;
          }
      // excelsave_Weixin(template)
    }
  }
}
</script>

<style lang="scss" scoped>
.wap {
  padding-bottom: 80rpx;
}

.pagination {
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
  width: 100%;
}
.my-search {
  margin-top: 10rpx;
  margin-left: 50rpx;
  // background-color: pink;
  // background-color: pink !important;
  // 设置定位效果为“吸顶”
  // position: sticky;
  // // 吸顶的“位置”
  // top: 0;
  // // 提高层级，防止被轮播图覆盖
  // z-index: 999;
}
</style>
