// var macarons = require("./macarons")
var echarts = require('echarts');
import {fetch} from "utils"
import demo1 from "demo/demo1"
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'),"macarons");
demo1(myChart)

//数据递推
// var options = {
//   url: '/api/ws'
// }
// fetch(options,function(res){
//   console.log(res);
// })
//
// var ws = new WebSocket("ws://localhost:9000")
// ws.onmessage = function(event) {
//   var data = event.data;
//   console.log(event。data, "onmessage===");
// };

// var option = {
//     legend: {},
//     tooltip: {},
//     dataset: {
//         source: [
//             ['product', '2015', '2016', '2017','2018'],
//             ['Matcha Latte', 43.3, 85.8, 93.7,100],
//             ['Milk Tea', 83.1, 73.4, 55.1,100],
//             ['Cheese Cocoa', 86.4, 65.2, 82.5,100],
//             ['Walnut Brownie', 72.4, 53.9, 39.1,100]
//         ]
//     },
//     xAxis: {type: 'category'},
//     yAxis: {},
//     // Declare several bar series, each will be mapped
//     // to a column of dataset.source by default.
//     series: [
//         {type: 'bar'},
//         {type: 'bar'},
//         {type: 'bar'},
//         {type: 'bar'}
//     ]
// };

// var option = {
//     dataset: {
//         source: [
//             ['score', 'amount', 'product'],
//             [89.3, 58212, 'Matcha Latte'],
//             [57.1, 78254, 'Milk Tea'],
//             [74.4, 41032, 'Cheese Cocoa'],
//             [50.1, 12755, 'Cheese Brownie'],
//             [89.7, 20145, 'Matcha Cocoa'],
//             [68.1, 79146, 'Tea'],
//             [19.6, 91852, 'Orange Juice'],
//             [10.6, 101852, 'Lemon Juice'],
//             [32.7, 20112, 'Walnut Brownie']
//         ]
//     },
//     xAxis: {type: 'category'},
//     yAxis: {},
//     series: [
//         {
//             type: 'bar',
//             encode: {
//                 // 将 "amount" 列映射到 X 轴。
//                 x: 'product',
//                 // 将 "product" 列映射到 Y 轴。
//                 y: 'score'
//             }
//         }
//     ]
// };

// var option = {
//     legend: {},
//     tooltip: {},
//     dataset: {
//         source: [
//             ['product', '2012', '2013', '2014', '2015'],
//             ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
//             ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
//             ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
//         ]
//     },
//     xAxis: [
//         {type: 'category', gridIndex: 0},
//         {type: 'category', gridIndex: 1}
//     ],
//     yAxis: [
//         {gridIndex: 0},
//         {gridIndex: 1}
//     ],
//     grid: [
//         {bottom: '55%'},
//         {top: '55%'}
//     ],
//     series: [
//         // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
//         {type: 'bar', seriesLayoutBy: 'row'},
//         {type: 'bar', seriesLayoutBy: 'row'},
//         {type: 'bar', seriesLayoutBy: 'row'},
//         // 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
//         {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
//         {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
//         {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
//         {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
//     ]
// }

// 绘制图表
// myChart.setOption(option);



// myChart.setOption({
//     series : [
//         {
//             name: '访问来源',
//             type: 'pie',
//             radius: '55%',
//             data:[
//                 {value:235, name:'视频广告'},
//                 {value:274, name:'联盟广告'},
//                 {value:310, name:'邮件营销'},
//                 {value:335, name:'直接访问'},
//                 {value:400, name:'搜索引擎'}
//             ],
//             itemStyle: {
// 		    // 阴影的大小
// 		    shadowBlur: 200,
// 		    // 阴影水平方向上的偏移
// 		    shadowOffsetX: 0,
// 		    // 阴影垂直方向上的偏移
// 		    shadowOffsetY: 0,
// 		    // 阴影颜色
// 		    shadowColor: 'rgba(0, 0, 0, 0.5)'
// 		}
//         }
//     ]
// })
