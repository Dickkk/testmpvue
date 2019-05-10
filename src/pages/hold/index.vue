<template>
  <div class="flex-column-around" style="background: #F2F2F2">
    <div class="flex-column" style="width: 100%;height: 484rpx;">
      <div class="flex-column" style="flex:1;background: #1B82D1;">
        <div class="flex-column" style="flex:1">
          <span  style="font-family: PingFangSC-Regular;font-size: 20rpx;color: #FFFFFF;letter-spacing: -0.24px;text-align: center;">总金额</span>
          <span style="font-family: PingFangSC-Regular;font-size: 36rpx;color: #FFFFFF;letter-spacing: -0.24px;text-align: center;">{{totalAmt}}</span>
        </div>
        <div class="flex-row" style="flex:1">
          <div class="afterVerticalLine flex-column" style="flex:1">
            <span style="font-family: PingFangSC-Regular;font-size: 36rpx;color: #FFFFFF;letter-spacing: -0.24px;text-align: center;">昨日收益(元)</span>
            <span style="font-family: PingFangSC-Regular;font-size: 36rpx;color: #FFFFFF;letter-spacing: -0.24px;text-align: center;">{{yestodayIntst}}</span>
          </div>
          <div class="afterVerticalLine flex-column"  style="flex:1">
            <span style="font-family: PingFangSC-Regular;font-size: 36rpx;color: #FFFFFF;letter-spacing: -0.24px;text-align: center;">累计收益(元)</span>
            <span style="font-family: PingFangSC-Regular;font-size: 36rpx;color: #FFFFFF;letter-spacing: -0.24px;text-align: center;">{{totalIntst}}</span>
          </div>
        </div>
      </div>
      <div style="height: 96rpx;background: #FFFFFF" class="flex-row">
        <div  class="flex-row afterVerticalLineWhite" style="flex:1">
          <i-icon type="createtask" size="22"/>
          <span>收益明细</span>
        </div>
        <div  class="flex-row" style="flex:1">
          <i-icon type="redpacket"  size="22"/>
          <span>交易记录</span>
        </div>
      </div>
    </div>

    <div   class="listItem flex-row "  v-for="hold in holds" :key="hold.holdId" @click="detailClick" >
      <div class="afterVerticalLineWhite flex-column-around" style="flex: 1">
        <span style="font-family: PingFangSC-Regular;font-size: 28rpx;color: #070606;letter-spacing: -0.48rpx;text-align: center;">{{hold.bankName}}|{{hold.holdTile}}</span>
        <span style="opacity: 0.4;font-family: PingFangSC-Regular;font-size: 20rpx;color: #070606;letter-spacing: -0.34rpx;text-align: center;">持有本金</span>
        <span style="font-family: PingFangSC-Regular;font-size: 24rpx;color: #070606;letter-spacing: -0.42rpx;text-align: center;">{{hold.txAmt}}</span>
      </div>
      <div class=" flex-column-around" style="flex: 1">
        <span style="font-family: PingFangSC-Regular;font-size: 28rpx;color: #070606;letter-spacing: -0.48rpx;text-align: center;">{{hold.mtrDays}}天后到期</span>
        <span style="opacity: 0.4;font-family: PingFangSC-Regular;font-size: 20rpx;color: #070606;letter-spacing: -0.34rpx;text-align: center;">累计收益</span>
        <span style="font-family: PingFangSC-Regular;font-size: 24rpx;color: #070606;letter-spacing: -0.42rpx;text-align: center;">{{hold.intst}}天</span>
      </div>


    </div>


  </div>
</template>

<script>
import mpButton from '../../components/button';
export default {
  data () {
    return {
      currentPage: 1
    };
  },
  computed: {
    holds() {
      return this.$store.state.holdList.holds;
    },
    totalAmt(){
      return this.$store.state.holdList.totalAmt;
    },
    yestodayIntst(){
      return this.$store.state.holdList.yestodayIntst;
    },
    totalIntst(){
      return this.$store.state.holdList.totalIntst;
    },
    recommandhold() {
      return this.$store.getters['holdList/recommandhold'];
    }
  },
  components: {
    mpButton
  },
  mounted() {
    console.log(this.$store.state.holdList.holds);
  },
  onPullDownRefresh(){
    // 显示顶部刷新图标
    this.currentPage=1;
    wx.showNavigationBarLoading();
    setTimeout(function() {
      wx.hideNavigationBarLoading();
      // 停止下拉动作
      wx.stopPullDownRefresh();
    }, 2000);
  },
  onReachBottom(){
    this.currentPage+=1;
    this.$store.dispatch('holdList/getmoreholds', this.currentPage);
  },
  methods: {
    detailClick() {
      mpvue.showToast({
        title: '点击详情',
        icon: 'success',
        duration: 2000
      });
    },
    upper(e) {
      console.log(this.currentPage);
    },
    lower(e) {
      console.log(this.currentPage);
      // 触发拉取数据的action
      this.$store.dispatch('holdList/getmoreholds', this.currentPage);
    }
  }
};
</script>

<style lang="scss" scoped>
  .listItem{

    width: 100%;
    height: 200rpx;
    margin-top: 4rpx;
    background: #FFFFFF;
  }
</style>
