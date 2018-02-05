import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/tree';

class WtChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      data1: {
        name: 'trade_order',
        children: [{
          name: 'bsn_business_operator',
          children: [{
            name: 'bs_id',
            value: 733,
          }, {
            name: 'checkin_date',
            value: 734,
          }, {
            name: 'checkout_date',
            value: 735,
          }],
        }, {
          name: 'transport_business',
          children: [{
            name: 'tra_transport_batch',
            children: [{
              name: 'tra_id',
              value: 697,
            }, {
              name: 'transport_status_code',
              value: 698,
            }, {
              name: 'shipment_date',
              value: 699,
            }, {
              name: 'air_hawbcode',
              value: 700,
            }],
          }],
        }, {
          name: 'tak_trackingbusiness',
          children: [{
            name: 'tbs_id',
            value: 757,
          }, {
            name: 'bs_id',
            value: 758,
          }, {
            name: 'track_status',
            value: 759,
          }],
        }, {
          name: 'customer_og_area',
          children: [{
            name: 'customer_id',
            value: 720,
          }, {
            name: 'customer_code',
            value: 721,
          }, {
            name: 'customer_allname',
            value: 722,
          }, {
            name: 'customer_shortname',
            value: 723,
          }, {
            name: 'customertype_code',
            value: 724,
          }, {
            name: 'settlementtypes_code',
            value: 725,
          }, {
            name: 'og_id',
            value: 726,
          }, {
            name: 'og_shortcode',
            value: 727,
          }, {
            name: 'og_name',
            value: 728,
          }, {
            name: 'area_detail',
            value: 729,
          }, {
            name: 'area_name',
            value: 730,
          }, {
            name: 'area_sort',
            value: 731,
          }, {
            name: 'dq_name',
            value: 732,
          }],
        }, {
          name: 'csi_servechannel_xtd_productgroup',
          children: [{
            name: 'server_id',
            value: 743,
          }, {
            name: 'server_channelid',
            value: 744,
          }, {
            name: 'formal_code',
            value: 745,
          }, {
            name: 'productgroup_code',
            value: 746,
          }, {
            name: 'productgroup_cnname',
            value: 747,
          }, {
            name: 'service_type',
            value: 748,
          }, {
            name: 'special_type',
            value: 749,
          }, {
            name: 'cs_param1',
            value: 750,
          }, {
            name: 'cs_param2',
            value: 751,
          }, {
            name: 'cs_param3',
            value: 752,
          }, {
            name: 'servergroup_cnname',
            value: 753,
          }, {
            name: 'st_cnname',
            value: 754,
          }, {
            name: 'st_enable',
            value: 755,
          }, {
            name: 'st_sort',
            value: 756,
          }],
        }, {
          name: 'hmr_staff',
          children: [{
            name: 'st_id',
            value: 741,
          }, {
            name: 'seller_name',
            value: 742,
          }],
        }],
        taskId: 21,
      },
      data2: {
        name: 'transport_business',
        children: [{
          name: 'tra_transport_batch',
          children: [{
            name: 'tra_id',
            value: 697,
          }, {
            name: 'transport_status_code',
            value: 698,
          }, {
            name: 'shipment_date',
            value: 699,
          }, {
            name: 'air_hawbcode',
            value: 700,
          }],
        }],
        taskId: 20,
      },
    };
  }

  componentDidMount() {
    const myChart = echarts.init(document.getElementById('wtChart'));
    console.log('componentDidMount: ', this.props);
    myChart.showLoading();
    const data = this.state.data1;
    if (data.name) {
      // 绘制图表
      myChart.setOption({
        series: {
          type: 'tree',
          data: [data],
          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '20%',

          symbolSize: 7,

          label: {
            normal: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right',
              fontSize: 9,
            },
          },

          leaves: {
            label: {
              normal: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left',
              },
            },
          },

          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750,
        },
      });
      myChart.hideLoading();
    } else {

    }
  }

  // shouldComponentUpdate(nextProps) {
  // const nextTaskId = nextProps.data.taskId;
  // const currentTaskId = this.props.data.taskId;
  // // console.log('shouldComponentUpdate: ', nextTaskId, currentTaskId);
  // if (nextTaskId !== currentTaskId) {
  //   const myChart = echarts.getInstanceByDom(document.getElementById('wtChart'));
  //   const { data } = nextProps;
  //   // console.log(data)
  //   myChart.setOption({
  //     series: {
  //       data: [data],
  //     },
  //   });
  //   return true;
  // } else {
  //   return false;
  // }
  // }

  //  模拟shouldComponentUpdate中data变化情况
  changeDatasource = () => {
    const current = this.state.current;
    const myChart = echarts.getInstanceByDom(document.getElementById('wtChart'));
    const data = this.state[`data${current}`];
    myChart.setOption({
      series: {
        data: [data],
      },
    });
    this.setState({
      current: current === 1 ? 2 : 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.changeDatasource}>点击切换数据源</button>
        <div id="wtChart" style={{ width: 500, height: 500 }} />
      </div>
    );
  }
}

export default WtChart;

