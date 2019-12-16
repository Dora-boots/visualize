import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import echarts from "echarts/lib/echarts";
import myChart from "echarts-for-react";

class Pie extends Component {

  constructor() {
    super();
    this.state = {
      option: {}
    };
  }

  componentDidMount = () => {
    fetch('/data.json').then(res => {
      return res.json();
    }).then(json => {
      let caculate = {}
      for (let mouth in json) {
        for (let day in json[mouth]) {
          for (let data of json[mouth][day]) {
            if (Object.keys(caculate).length === 0) {
              //初始化
              for (let item of data) {
                caculate[item['type']] = 0
              }
            }
            for (let item of data) {
              caculate[item['type']] += item['value'];
            }
          }
        }
      }
      let data = [];
      for (let key in caculate) {
        data.push({ 'name': key, 'value': caculate[key] });
      }
      let option = {
        title: {
          text: "垃圾短信类别数据",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: data.keys
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };

      this.setState({ option })
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <ReactEcharts
            option={this.state.option}
            theme="Imooc"
            style={{ height: "700px", width: "700px" }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Pie;
