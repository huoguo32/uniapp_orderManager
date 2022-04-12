import moment from './node_modules/moment/moment.js'

/**
 * 获取当前时间
 * @returns {moment.Moment}
 */
export const getNowDate = () => {
    return moment(new Date(), 'YYYY-MM-DD')
}

/**
 * 当前时间之前的几天
 * @param number
 * @returns {moment.Moment}
 */
export const getPreDayDate = (number) => {
    const curTime = new Date().getTime()
    const date2 = curTime - number * 3600 * 24 * 1000
    const nDate = new Date(date2)
    return moment(nDate)
}


/**
 * 当前时间之前的一个月
 * @returns {moment.Moment}
 */
export const getBeforeDate = () => {
    const date = new Date()
    let time = date.getTime()
    time -= 30 * 86400000
    const nDate = new Date(time)
    return moment(nDate.toLocaleDateString())
}

/**
 * 当前时间之前的几周
 * @param number
 * @returns {*|moment.Moment}
 */
export const getPreWeekDate = (number) => {
    const nowDate = new Date().getTime()
    const date2 = nowDate - number * 7 * 24 * 60 * 60 * 1000
    const nDate = new Date(date2)
    return moment(nDate)
}

/**
 * 当前时间之前的几年
 * @param number
 * @returns {*|moment.Moment}
 */
export const getBeforeYearDate = (number) => {
    const date = new Date()
    date.setFullYear(date.getFullYear() - number)
    return moment(new Date(date))
}
/**
 * 获取指定时间那天的 00:00:00开始的时间
 * @param data
 * @returns {string}
 */
export const getStartDate = (data) => {
    if (!data) {
        return ''
    }
    return data.format('YYYY-MM-DD') + ' 00:00:00'
}

/**
 * 获取指定时间的 23:59:59结束的时间
 * @param data
 * @returns {string}
 */
export const getEndDate = (data) => {
    if (!data) {
        return ''
    }
    return data.format('YYYY-MM-DD') + ' 23:59:59'
}

/**
 * 格式化时间
 * @param data
 * @param format
 */
export const formatDate = (data, format) => {
    if (!data) {
        return ''
    }
    return data.format(format)
}



// let one = +new Date('2022-04-10')//三天以前
// // console.log(one)
// let two = +new Date('2022-04-07')//三天以前
// console.log(two)
// console.log(+new Date('2022-04-11'))
console.log(+new Date('2022-04-12'))
// 一月一内
// console.log(+new Date('2022-03-22'))
// console.log(+new Date('2022-03-23'))
// console.log(+new Date('2022-03-24'))
// 三个月以内
// console.log(+new Date('2022-02-14'))
// console.log(+new Date('2022-01-24'))
// console.log(+new Date('2022-03-03'))
// 半年以内的
// console.log(+new Date('2022-01-11'))
// console.log(+new Date('2022-01-01'))
// console.log(+new Date('2021-12-15'))
// 一年以内
// console.log(+new Date('2021-6-15'))
// console.log(+new Date('2021-8-15'))
// console.log(+new Date('2021-5-28'))
// console.log(+new Date('2022-4-11'))
let orderlist = [
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
            buytime: 1644796800000,
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

function sortData(a, b) {
    return b[1].buytime - a[1].buytime
}
let arr = orderlist.sort(sortData);
console.log(arr)
