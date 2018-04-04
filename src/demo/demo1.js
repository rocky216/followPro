"use strict";

function demo1(myChart){

  myChart.setOption({
    title: {
      show: true,
      text: '标题组件，包含主标题和副标题。',
      link: "http://echarts.baidu.com/option.html#title.link"
    },
    legend: {
      type: 'scroll',
      show: true,
    },
    grid: {
      show: true
    },
    xAxis: {
      show: true,
      //gridIndex: 1
    },
    yAxis:{
      show: true,
      //gridIndex: 1
    },
    axisPointer: {
      show: true
    },
    dataset: {
      source: [
        ['date', 'open', 'close', 'highest', 'lowest']
        [12, 44, 55, 66, 2],
        [23, 6, 16, 23, 1]
      ]
    },
    series: {
      type: "bar",
    }
  })


}


export default  demo1
