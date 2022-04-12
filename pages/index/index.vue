<template>
  <view class="content">
    <button type="default" @click="tableToExcel">asadasd</button>
    <button type="default" @click="excelsave">13213</button>
    <view class="top_box">{{ title }}</view>

    <view class="btn_cube" @click="tableToExcel">导出一个表来看</view>

    <view class="tip">tips：合并什么的可以直接用table标签相关的行内属性合并，如colspan、rowspan</view>
    <view class="tip">tips：创建目录时，一个大目录，下面再有一级年月的目录，方便到时候读取目录</view>
    <view class="tip">{{ successTip }}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'app端导出excel',
      successTip: '',
      filePath: `${wx.env.USER_DATA_PATH}/${+new Date()}.xls`,
      arr: [1, 1, 3, 3, 4, 4, 5, 6],
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
            // 4.10号
            buytime: 1649548800000,
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
            // 4.7号
            buytime: 1649606400000,
            copies: 500
          }
        ],
        [
          {
            id: 3,
            goodsname: '土炸弹',
            price: '3.20',
            supplierid: 3,
            norm: '500',
            imageurl: '/uploads/1_西瓜.jpg',
            show: 1
          },
          {
            buytime: 1649606972111,
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
            //4.11
            buytime: 1649635200000,
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
            //4.8
            buytime: 1649376000000,
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
            //3.22
            buytime: 1647907200000,
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
            //3.23
            buytime: 1647993600000,
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
            //3.24
            buytime: 1649721600000,
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
            //2.14
            buytime: 1644796800000,
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
            //1.24
            buytime: 1642982400000,
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
            buytime: 1649606400000,
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
            //3.3
            buytime: 1646265600000,
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
            //1.11
            buytime: 1649606400000,
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
            //1.1
            buytime: 1640995200000,
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
            //12.15
            buytime: 1649606400000,
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
            buytime: 1622131200000,
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
            //6.15
            buytime: 1623686400000,
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
            //8.15
            buytime: 1628956800000,
            copies: 20
          }
        ]
      ]
    };
  },
  computed: {},
  onLoad() {},
  methods: {
    tableToExcel() {
      // 要导出的json数据
      const jsonData = [
        {
          name: '测试数据',
          phone: '123456',
          email: '123@456.com'
        }
      ];
      // 列标题
      let worksheet = 'sheet1';
      let str = '<tr><td>编号</td><td>商品名称</td><td>单价</td><td>供应商</td><td>规格</td><td>图片链接</td><td>show</td><td>购买时间</td><td>购买分数</td></tr>';
      // 循环遍历，每行加入tr标签，每个单元格加td标签
      for (let i = 0; i < this.orderlist.length; i++) {
        str += '<tr>';
        for (let item in this.orderlist[i][0]) {
          // 增加\t为了不让表格显示科学计数法或者其他格式
          str += `<td>${this.orderlist[i][0][item] + '\t'}</td>`;
        }
        for (let x in this.orderlist[i][1]) {
          // 增加\t为了不让表格显示科学计数法或者其他格式
          str += `<td>${this.orderlist[i][1][x] + '\t'}</td>`;
        }
        str += '</tr>';
      }
      // 下载的表格模板数据
      let template = `<html xmlns:o="urn:schemas-microsoft-com:office:office" 
            xmlns:x="urn:schemas-microsoft-com:office:excel" 
            xmlns="http://www.w3.org/TR/REC-html40">
            <head><meta charset="UTF-8"><!--[if gte mso 9]><xml encoding="UTF-8"><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
            <x:Name>${worksheet}</x:Name>
            <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
            </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
            </head><body><table>${str}</table></body></html>`;
      // 下载模板
      // exportFile(template)
      this.excelsave(template);
    },

    excelsave(arr) {
      let fm = wx.getFileSystemManager();
      fm.writeFile({
        filePath: this.filePath,
        data: arr,
        success: res => {
          console.log(111, res);
          uni.openDocument({
            fileType: 'xls',
            filePath: this.filePath,
            fail: e => {
              console.log('error1', e);
            }
          });
        },
        fail: () => {
          console.log('error2');
        }
      });
    }
  }
};
</script>

<style>
.container {
  padding: 20px;
  font-size: 14px;
  line-height: 24px;
}
</style>
