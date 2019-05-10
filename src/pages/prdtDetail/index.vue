<template>
  <div class="HolyGrail">
    <div class="mainBody">
      <!--<scroll-view scroll-y class="mainBody">-->
      <div class="mainHead">
          <div class="contentTitle">
            <div class="afterVerticalLine">
              <span>3.1567%</span>
              <span>七日年变化</span>
            </div>
            <div>
              <span>7天</span>
              <span>产品期限</span>
            </div>
          </div>
          <div class="contentBody">
            <span>还剩1.29亿</span>
          </div>
          <div class="contentProgress">
            <progress activeColor="#FF0000"  percent="80" active />
          </div>
      </div>
      <div>
        <div style="padding-top: 50rpx;" class="bottomLine tabTitle">{{tabTitle}}</div>
        <div style="height: 450rpx; width: 100%">
          <ff-canvas id="column-dom" canvas-id="column" :opts="opts"></ff-canvas>
        </div>
        <mpnav-bar :tabs="tabs"  @tabClick="tabClick"></mpnav-bar>
      </div>
      <div>
        <div style="display: flex;flex-flow: row nowrap; padding: 20rpx 0;">
          <div style="flex:1" class="bottomLine tabTitle">交易规则</div>
          <div class="detail" @click="">
            <span>查看详情</span>
            <i-icon type="enter"></i-icon>
          </div>
        </div>

        <div style="height: 250rpx; padding-top: 50rpx">
          <i-steps :current="current">
            <i-step >
              <view slot="title">
                {{dateBuy}}
              </view>
              <view slot="content">
                买入
              </view>
            </i-step>
            <i-step >
              <view slot="title">
                {{dateIncome}}
              </view>
              <view slot="content">
                产生收益
              </view>
            </i-step>
            <i-step >
              <view slot="title">
                {{dateExp}}
              </view>
              <view slot="content">
                到期
              </view>
            </i-step>
          </i-steps>
        </div>
      </div>

    </div>
    <footer>
      <!--<div>-->
        <!--<img src=""/>-->
        <!--<span>算收益</span>-->
      <!--</div>-->
      <button
        type="warn"
        @click="submitClick"
        size="default">买入</button>

    </footer>
  </div>
</template>

<script>

import mpnavBar from '../../components/navbar';
import F2 from '../../../static/f2-canvas/lib/f2';
export default {
  data () {
    return {
      id:'',
      date:'',
      tabs:['近七日', '近1个月', '近三个月'],
      tabIndex:0,
      tabTitle:'近七日变化',
      opts: {
        onInit: this.initChart
      },
      current:'1',
      dateBuy:'03-21',
      dateIncome:'03-25',
      dateExp:'04-01'
    };
  },
  components:{
    mpnavBar
  },
  mounted(){
    this.id = this.$root.$mp.query.id;
    this.date=this.$root.$mp.query.date;
  },
  methods:{
    submitClick(){
      console.log('click');
      mpvue.navigateTo({
        url: '/pages/prdtBuy/main?id='+this.id+'&&date='+this.date
      });
    },
    detailClick(){
      mpvue.showToast({
        title: '点击了查看详情按钮',
        icon: 'success',
        duration: 2000
      });
    },
    tabClick(index) {
      console.log(index+'click');
      this.tabIndex=index;
      this.tabTitle=this.tabs[index];
      let chart=this.$mp.page.selectComponent('#column-dom').chart;
      let datas=this.getData();
      chart.source(datas.data, {
        date: {
          range: [0, 1],
          ticks: datas.ticks
        },
        value: {
          tickCount: 10,
          formatter(val) {
            return val.toFixed(1) + '%';
          }
        }
      });
      chart.repaint();
    },
    getData(){
      let dataWeek = [{ 'date': '03-21', 'type': '利率', 'value': 4.9 },
        { 'date': '03-22', 'type': '利率', 'value': 4.5 },
        { 'date': '03-23', 'type': '利率', 'value': 4.2 },
        { 'date': '03-24', 'type': '利率', 'value': 4.1 },
        { 'date': '03-25', 'type': '利率', 'value': 4.2 },
        { 'date': '03-26', 'type': '利率', 'value': 4.6 },
        { 'date': '03-27', 'type': '利率', 'value': 4.0 }];
      let dataMon=[{ 'date': '03-01', 'type': '利率', 'value': 5.9 },
        { 'date': '03-06', 'type': '利率', 'value': 4.5 },
        { 'date': '03-11', 'type': '利率', 'value': 4.2 },
        { 'date': '03-16', 'type': '利率', 'value': 5.1 },
        { 'date': '03-21', 'type': '利率', 'value': 4.2 },
        { 'date': '03-26', 'type': '利率', 'value': 4.6 },
        { 'date': '03-31', 'type': '利率', 'value': 5.0 }];
      let data3Mon=[{ 'date': '03-01', 'type': '利率', 'value': 2.9 },
        { 'date': '03-15', 'type': '利率', 'value': 4.5 },
        { 'date': '04-01', 'type': '利率', 'value': 4.2 },
        { 'date': '04-15', 'type': '利率', 'value': 2.1 },
        { 'date': '05-01', 'type': '利率', 'value': 4.2 },
        { 'date': '05-15', 'type': '利率', 'value': 4.6 },
        { 'date': '06-01', 'type': '利率', 'value': 2.0 }];
      let ticksWeek=['03-21', '03-24', '03-27'];
      let ticksMon=['03-01', '03-16', '03-31'];
      let ticks3Mon=['03-01', '04-15', '06-01'];
      let data=[];
      let ticks=[];
      if (this.tabIndex===0){
        data=dataWeek;
        ticks=ticksWeek;
      } else if (this.tabIndex===1){
        data=dataMon;
        ticks=ticksMon;
      } else {
        data=data3Mon;
        ticks=ticks3Mon;
      }
      return {data:data, ticks:ticks};
    },
    initChart(canvas, width, height) {
      let chart = null;
      let datas=this.getData();
      let data=datas.data;
      let ticks=datas.ticks;
      chart = new F2.Chart({
        el: canvas,
        width,
        height
      });

      chart.source(data, {
        date: {
          range: [0, 1],
          ticks: ticks
        },
        value: {
          tickCount: 10,
          formatter(val) {
            return val.toFixed(1) + '%';
          }
        }
      });

      chart.tooltip({
        custom: false, // 自定义 tooltip 内容框
        onChange(obj) {
          const legend = chart.get('legendController').legends.top[0];
          const tooltipItems = obj.items;
          const legendItems = legend.items;
          const map = {};
          legendItems.map(item => {
            map[item.name] = Object.assign({}, item);
          });
          tooltipItems.map(item => {
            const { name, value } = item;
            if (map[name]) {
              map[name].value = value;
            }
          });
          legend.setItems(Object.values(map));
        },
        onHide() {
          const legend = chart.get('legendController').legends.top[0];
          legend.setItems(chart.getLegendItems().country);
        }
      });
      chart.interaction('pan');
      chart.guide().rect({
        start: [2011, 'max'],
        end: ['max', 'min'],
        style: {
          fill: '#CCD6EC',
          opacity: 0.3
        }
      });
      chart.guide().text({
        position: [2014, 'max'],
        content: 'Scott administratio\n(2011 to present)',
        style: {
          fontSize: 10,
          textBaseline: 'top'
        }
      });
      chart.scrollBar({
        // 一些配置项
        mode: 'y',
        yStyle: {
          xStyle: {
            offsetY: -5
          }
        }
      });
      chart.line().position('date*value').color('type', val => {
        if (val === '利率') {
          return '#FF0000';
        }
      });
      chart.render();
      return chart;
    }
  }
};
</script>

<style lang="scss" scoped>
  .HolyGrail{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  footer{
    height: 100rpx;
    width: 100%;
    position: fixed;
    bottom: -10rpx;
    z-index:100000
  }
  .detail{
    /* 查看详情: */
    /*opacity: 0.5;*/
    font-family: PingFangSC-Regular;
    font-size: 28rpx;
    color: #999999;
    text-align: left;
    justify-self: flex-end;
    width: 200rpx
  }
  .mainBody{
    flex:1;
    padding-bottom: 110rpx;
    /*overflow-y: scroll;*/
  }
  .tabTitle{
    /* 七日内变化: */
    font-family: PingFangSC-Regular;
    font-size: 28rpx;
    color: #0C0C0C;
    text-align: left;
    text-indent: 1em;

  }
  #column-dom{
    height: 450rpx;
    width: 100vw;
  }
  .mainHead{
    padding-bottom: 50rpx;
    width: 100%;
    height: 450rpx;
    background: #1B82D1;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    .contentTitle{
      /*  */
      display: flex;
      flex-flow: row nowrap;
      flex:2;
      div:nth-child(1){
        span:nth-child(1){
          /* 3.1567%: */
          font-size: 36rpx;
          color: #F8EEEE;
          text-align: center;
          height: 40rpx;
          flex: 0;
        }
        span:nth-child(2){
          /* 七日变化: */
          font-size: 28rpx;
          color: #F8EEEE;
          text-align: center;
          height: 40rpx;
          flex: 0;
        }
        flex:1;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-content: center;
      }
      div:nth-child(2){
        span:nth-child(1){
          /* 3.1567%: */
          font-size: 36rpx;
          color: #F8EEEE;
          text-align: center;
          height: 40rpx;
          flex: 0;
        }
        span:nth-child(2){
          /* 七日变化: */
          font-size: 28rpx;
          color: #F8EEEE;
          text-align: center;
          height: 40rpx;
          flex: 0;
        }
        flex:1;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
      }
    }
    .contentBody{
      /*  */
      flex:1;
      text-align: center;
      /* 还剩1.29亿: */
      font-size: 28rpx;
      color: #F6F3F3;
      display: flex;
      align-items: center;
      span{
        width: 100rpx;
        flex:1;
      }
    }
    .contentProgress{
      flex:1;
      width: 100%;
      height: 60rpx;
      display: flex;
      progress{
        flex:1;
        padding-left: 50rpx;
        padding-right: 50rpx;
      }
    }
  }
  .mainPage{
    background: #F5F5F5;
  }
</style>
