// 引入导出Excel文件所需的时间处理函数
import { formatDateThis, getUnixTime } from '../../common/util/dateUtil.js'
// 引入web导出Excel文件所需的插件
import { saveAs } from '../../node_modules/file-saver/src/FileSaver.js';

// 将渲染的excel导出 小程序端
export function excelsave_Weixin(arr) {
    let filePath = `${wx.env.USER_DATA_PATH}/${+new Date()}.xls`
    let fm = wx.getFileSystemManager();
    fm.writeFile({
        filePath: filePath,
        data: arr,
        success: res => {
            // console.log(111, res);
            uni.openDocument({
                fileType: 'xls',
                filePath: filePath,
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
// 将渲染的excel导出 APP端
export function excelsave_APP(fileData) {
    /*
            PRIVATE_DOC: 应用私有文档目录常量
            PUBLIC_DOCUMENTS: 程序公用文档目录常量
            */
    let documentName = '订单统计数据';
    plus.io.requestFileSystem(plus.io.PUBLIC_DOCUMENTS, function (fs) {
        let rootObj = fs.root;
        let fullPath = rootObj.fullPath;
        // let reader = rootObj.createReader();
        // console.log(reader);
        // reader.readEntries((res)=>{
        //     console.log(res); //这里拿到了该目录下所有直接文件和目录
        // },(err)=>{console.log(err);})

        console.log('开始导出数据********');
        // 创建文件夹
        rootObj.getDirectory(
            documentName,
            {
                create: true
            },
            function (dirEntry) {
                // 获取当前的年月继续创建文件夹
                let date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                dirEntry.getDirectory(
                    `${year}年${month}月`,
                    {
                        create: true
                    },
                    function (dirEntry2) {
                        // 创建文件,防止重名
                        let fileName = 'excel' + getUnixTime(formatDateThis(new Date()));
                        console.log(fileName);
                        dirEntry2.getFile(
                            `${fileName}.xls`,
                            {
                                create: true
                            },
                            function (fileEntry) {
                                fileEntry.createWriter(
                                    function (writer) {
                                        writer.onwritestart = e => {
                                            uni.showLoading({
                                                title: '正在导出',
                                                mask: true
                                            });
                                        };
                                        //  /storage/emulated/0指的就是系统路径
                                        let pathStr = fullPath.replace('/storage/emulated/0', '');
                                        console.log(333, pathStr);
                                        writer.onwrite = e => {
                                            // 成功导出数据;
                                            uni.hideLoading();
                                            setTimeout(() => {
                                                uni.showToast({
                                                    title: '成功导出',
                                                    icon: 'success'
                                                });
                                            }, 500);
                                        };
                                        // 写入内容;
                                        writer.write(fileData);
                                        console.log(`${pathStr}${fileName}`);
                                        let a = `/storage/emulated/0${pathStr}/${documentName}/${year}年${month}月/${fileName}.xls`;
                                        console.log(999, a);
                                        uni.openDocument({
                                            fileType: 'xls',
                                            filePath: a,
                                            fail: e => {
                                                console.log(e);
                                            }
                                        });
                                        console.log('success');
                                    },
                                    function (e) {
                                        console.log(e.message);
                                    }
                                );
                            }
                        );
                    }
                );
            }
        );
    });
}
//将渲染的excel导出 WEB端
export function excelsave_Web(arr) {
    let pathName = Date.now()
    console.log(pathName);
    // var file = new File(['Hello, world!'], `hello world.txt`, { type: 'text/plain;charset=utf-8' });
    var file = new File([arr], `${pathName}.xls`, { type: "text/plain;charset=utf-8" });
    saveAs(file);
}
