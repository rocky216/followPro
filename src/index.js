var echarts = require('echarts');

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
// myChart.setOption({
//     title: {
//         text: 'ECharts 入门示例'
//     },
//     tooltip: {},
//     xAxis: {
//         data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
//     },
//     yAxis: {},
//     series: [{
//         name: '销量',
//         type: 'bar',
//         data: [5, 20, 36, 10, 10, 20]
//     }]
// });

myChart.showLoading();

setTimeout(function(){

},2000)

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