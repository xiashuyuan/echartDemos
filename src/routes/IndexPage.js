import React, { Component } from 'react';
import { connect } from 'dva';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入关系图
import 'echarts/lib/chart/graph';
// 引入提示框和标题组件
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';
// import 'echarts/lib/component/animationDurationUpdate';
// import 'echarts/lib/component/animationEasingUpdate';

function IndexPage(props) {
  let { dispatch, form, loading, data } = props;

  console.log(props);
  console.log(data);
  class EchartsTest extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('main'));
      const data = props.data;
      console.log(props);
      // 加载图表
      myChart.showLoading();
      renderMap(data);
      console.log(data);

      function renderMap(data) {
        myChart.hideLoading();


        // 绘制图表
        myChart.setOption({
          title: {
            text: 'NPM Dependencies',
          },
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              type: 'graph',
              layout: 'circular',
              progressiveThreshold: 700,
              effect: {
                show: true,
                constantSpeed: 200,
                trailLength: 0.01,
                symbolSize: 3,
                symbol: 'circle',
                loop: true,
              },
              data: data.nodes.map((node) => {
                return {
                  // x: node.x,
                  // y: node.y,
                  id: node.id,
                  name: node.label,
                  symbolSize: node.size,
                  itemStyle: {
                    normal: {
                      color: node.color,
                    },
                  },
                };
              }),
              edges: data.edges.map((edge) => {
                return {
                  source: edge.sourceID,
                  target: edge.targetID,
                };
              }),
              label: {
                emphasis: {
                  position: 'right',
                  show: true,
                },
              },
              roam: true,
              focusNodeAdjacency: true,
              lineStyle: {
                normal: {
                  width: 0.5,
                  curveness: 0.3,
                  opacity: 0.7,
                },
              },
            },
          ],
        }, true);
      }
    }
    render() {
      return (
        <div id='main' style={{ width: 1000, height: 1000 }} />
      );
    }
  }

  return (
    <EchartsTest />
  )
}


function mapStateToProps(state) {
  return { loading: state.loading.models.indexPage, ...state.indexPage };
}

export default connect(mapStateToProps)(IndexPage);