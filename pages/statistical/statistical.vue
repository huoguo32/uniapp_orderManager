<template>
  <view class="wap">
    <!-- 导入搜索框组件 -->
    <my-search class="one1"></my-search>
    <!-- 导入筛选组件 -->
    <my-select @checkAll="checkAll" ref="select"></my-select>
    <!-- 分割线 -->
    <image src="../../static/cart_border@2x.png" mode=""></image>
    <!-- 导入订单组件 -->
    <view class="my-order">
      <block v-for="(order, i) in schArr" :key="i"><my-order :order="order" @radio-change="radioChangeHandler"></my-order></block>
    </view>

    <uni-pagination class="pagination" title="标题文字" show-icon="true" :total="total" :current="page.current" :pageSize="page.pageSize" @change="change"></uni-pagination>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 订单数据
      orderlist: [
        [
          {
            id: 1,
            goodsname: '土豆',
            price: '9.00',
            supplierid: 1,
            norm: '500',
            imageurl: '/uploads/1_土豆.jpg',
            show: 1
          },
          {
            buytime: '1',
            copies: 500
          }
        ],
        [
          {
            id: 2,
            goodsname: '西红柿',
            price: '9.50',
            supplierid: 2,
            norm: '500',
            imageurl: '/uploads/1_西红柿.png',
            show: 1
          },
          {
            buytime: '1',
            copies: 500
          }
        ],
        [
          {
            id: 3,
            goodsname: '西瓜',
            price: '3.20',
            supplierid: 3,
            norm: '500',
            imageurl: '/uploads/1_西瓜.jpg',
            show: 1
          },
          {
            buytime: '1649606972111',
            copies: 20
          }
        ],
        [
          {
            id: 4,
            goodsname: '土豆',
            price: '9.00',
            supplierid: 4,
            norm: '500',
            imageurl: '/uploads/1_土豆.jpg',
            show: 1
          },
          {
            buytime: '1',
            copies: 500
          }
        ],
        [
          {
            id: 5,
            goodsname: '西红柿',
            price: '9.50',
            supplierid: 5,
            norm: '500',
            imageurl: '/uploads/1_西红柿.png',
            show: 1
          },
          {
            buytime: '1',
            copies: 500
          }
        ],
        [
          {
            id: 6,
            goodsname: '西瓜',
            price: '3.20',
            supplierid: 6,
            norm: '500',
            imageurl: '/uploads/1_西瓜.jpg',
            show: 1
          },
          {
            buytime: '1649606972111',
            copies: 20
          }
        ],
        [
          {
            id: 7,
            goodsname: '土豆',
            price: '9.00',
            supplierid: 7,
            norm: '500',
            imageurl: '/uploads/1_土豆.jpg',
            show: 1
          },
          {
            buytime: '1',
            copies: 500
          }
        ],
        [
          {
            id: 19,
            goodsname: '西红柿',
            price: '9.50',
            supplierid: 8,
            norm: '500',
            imageurl: '/uploads/1_西红柿.png',
            show: 1
          },
          {
            buytime: '1',
            copies: 500
          }
        ],
        [
          {
            id: 8,
            goodsname: '西瓜',
            price: '3.20',
            supplierid: 9,
            norm: '500',
            imageurl: '/uploads/1_西瓜.jpg',
            show: 1
          },
          {
            buytime: '1649606972111',
            copies: 20
          }
        ],
        [
          {
            id: 9,
            goodsname: '土豆',
            price: '9.00',
            supplierid: 10,
            norm: '500',
            imageurl: '/uploads/1_土豆.jpg',
            show: 1
          },
          {
            buytime: '1',
            copies: 500
          }
        ],
        [
          {
            id: 10,
            goodsname: '西红柿',
            price: '9.50',
            supplierid: 11,
            norm: '500',
            imageurl: '/uploads/1_西红柿.png',
            show: 1
          },
          {
            buytime: '1',
            copies: 500
          }
        ],
        [
          {
            id: 11,
            goodsname: '西瓜',
            price: '3.20',
            supplierid: 12,
            norm: '500',
            imageurl: '/uploads/1_西瓜.jpg',
            show: 1
          },
          {
            buytime: '1649606972111',
            copies: 20
          }
        ],
        [
          {
            id: 12,
            goodsname: '土豆',
            price: '9.00',
            supplierid: 13,
            norm: '500',
            imageurl: '/uploads/1_土豆.jpg',
            show: 1
          },
          {
            buytime: '1',
            copies: 500
          }
        ],
        [
          {
            id: 13,
            goodsname: '西红柿',
            price: '9.50',
            supplierid: 14,
            norm: '500',
            imageurl: '/uploads/1_西红柿.png',
            show: 1
          },
          {
            buytime: '1',
            copies: 500
          }
        ],
        [
          {
            id: 14,
            goodsname: '西瓜',
            price: '3.20',
            supplierid: 15,
            norm: '500',
            imageurl: '/uploads/1_西瓜.jpg',
            show: 1
          },
          {
            buytime: '1649606972111',
            copies: 20
          }
        ],
        [
          {
            id: 15,
            goodsname: '土豆',
            price: '9.00',
            supplierid: 16,
            norm: '500',
            imageurl: '/uploads/1_土豆.jpg',
            show: 1
          },
          {
            buytime: '1',
            copies: 500
          }
        ],
        [
          {
            id: 16,
            goodsname: '西红柿',
            price: '9.50',
            supplierid: 17,
            norm: '500',
            imageurl: '/uploads/1_西红柿.png',
            show: 1
          },
          {
            buytime: '1',
            copies: 500
          }
        ],
        [
          {
            id: 17,
            goodsname: '西瓜',
            price: '3.20',
            supplierid: 18,
            norm: '500',
            imageurl: '/uploads/1_西瓜.jpg',
            show: 1
          },
          {
            buytime: '1649606972111',
            copies: 20
          }
        ]
      ],
      // 请求数据参数
      canshu: 1,
      // 分页数据
      page: {
        current: 1,
        pageSize: 5
      },
      // 分页显示的数据列表
      schArr: []
    };
  },
  computed: {
    total() {
      return this.orderlist.length;
    }
  },
  onLoad() {
    // this.getOrderList();
    this.getPageData();
  },
  methods: {
    // 获取数据的方法
    async getOrderList() {
      const { data: res } = await uni.$http.get(`/Statistics/index/?supplierid=${this.canshu}`);
      // this.orderlist = res;
      // console.log(this.orderlist);
    },
    // 根据分页设置的数据控制每页显示的数据条数及页码跳转页面刷新
    getPageData() {
      let start = (this.page.current - 1) * this.page.pageSize;
      let end = start + this.page.pageSize;
      this.schArr = this.orderlist.slice(start, end);
      // console.log(this.schArr)
    },
    // 分页器自带事件：页面切换
    change(e) {
      this.page.current = e.current;
      this.getPageData();
    }, // 商品的勾选状态发生了变化
    // 自定义事件：改变单选标签状态
    radioChangeHandler(e) {
      // console.log(e);
      // order_id: 19, order_ischeck: true
      // 在列表中查找
      const findResult = this.orderlist.find(x => x[0].id === e.order_id);
      if (findResult) {
        findResult[0].ischeck = e.order_ischeck;
        // 此步骤是为了重新刷新下渲染组件所用的schArr
        this.getPageData();
        // 查看下是不是所有的小框都被选中
        let a=this.orderlist.every(obj => obj[0].ischeck === true)
        if(a){
         this.$refs.select.quanxuan(true)
        }else{
          this.$refs.select.quanxuan(false)
        }
      }
    },
    //改变全选按钮状态
    checkAll(e) {
      // console.log(e);
      this.orderlist.forEach(x => x[0].ischeck = e.isAllCheck)
      this.getPageData()
    }
  }
};
</script>

<style lang="scss" scoped>
.my-order {
  margin-bottom: 100rpx;
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
