<template>
  <div class="pageFlex">
    <div class="headBack"></div>
    <div class="prdtCard">
      <span>{{recommandPrdt.bankName}}提供</span>
      <span>{{recommandPrdt.prdtTile}}</span>
      <span>{{recommandPrdt.prdtRate}}%</span>
      <span>存1万收益为{{recommandPrdt.ipw}}元</span>
      <button
      type="warn"
      size="default"
      @click="buyInClick"
    >立即转入</button>
    </div>
    <div class="activity" >
      <span>瓜分8888元</span>
      <div @click="joinActivityClick">
        <span>立即参与</span>
      </div>
    </div>
    <div class="barheader">
      热门推荐
    </div>


    <div  class="marketItem" v-for="prdt in prdts" :key="prdt.prdtId+prdt.prdtDate" @click="detailClick" >
      <span>{{prdt.bankName}}|{{prdt.prdtTile}}</span>
      <div class="marketItemBody">
        <div>
          <span>{{prdt.prdtRate}}%</span>
          <span>预期年化收益率</span>
        </div>
        <div> </div>
        <div>
          <span>{{prdt.prdtLong}}天</span>
          <span>{{prdt.tag}}</span>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import card from '../../components/card';
import mpButton from '../../components/button';
export default {
  data () {
    return {
      currentPage: 1
    };
  },
  computed: {
    prdts() {
      return this.$store.state.prdtList.prdts;
    },
    recommandPrdt() {
      return this.$store.getters['prdtList/recommandPrdt'];
    }
  },
  components: {
    card,
    mpButton
  },
  mounted() {
    console.log(this.$store.state.prdtList.prdts);
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
    this.$store.dispatch('prdtList/getmorePrdts', this.currentPage);
  },
  methods: {

    increse() {
      this.$store.dispatch('counter/incrementAsyn', 2);
    },
    buyInClick() {
      mpvue.showToast({
        title: '点击了买入按钮',
        icon: 'success',
        duration: 2000
      });
      mpvue.navigateTo({
        url: '/pages/prdtDetail/main?id='+this.recommandPrdt.prdtId+'&&date='+this.recommandPrdt.prdtDate
      });
    },
    detailClick() {
      mpvue.showToast({
        title: '点击了产品按钮',
        icon: 'success',
        duration: 2000
      });
    },
    joinActivityClick() {
      mpvue.showToast({
        title: '点击了参与活动按钮',
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
      this.$store.dispatch('prdtList/getmorePrdts', this.currentPage);
    }
  },

  created () {
    // let app = getApp()
  }
};
</script>

<style lang="scss" scoped>
  .marketItem{
    display: flex;
    width: 100%;
    height: 200rpx;
    margin-top: 4rpx;
    justify-content: space-around;
    flex-flow: column nowrap;
    background-color: #ffffff;
    span{
      font-size: 28rpx;
      color: #999999;
      text-align: left;
      text-indent: 1em;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .marketItemBody{
      flex-basis: 100%;
      display: flex;
      flex-flow: row nowrap;
      position: relative;
      div:nth-child(1){
        /**left**/
        flex: 1;
        width:45%;
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        span:nth-child(1){
          /* 3.64%: */
          font-size: 36rpx;
          color: #E40808;
          text-align: center;
        }
        span:nth-child(2){
          /* 预计年化收益率: */
          font-size: 28rpx;
          color: #999999;
          text-align: center;
        }
      }
      div:nth-child(2):before{
        /**line**/
        content: '';
        position: absolute;
        width: 2rpx;
        height: 60%;
        top: 16rpx;
        left: 50%;
        background-image: linear-gradient(45deg, #999999, #999999);
        background: #999999;
        background-repeat: repeat-y;
        flex:0;
      }
      div:nth-child(3){
        /**right**/
        flex: 1;
        width:45%;
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        span:nth-child(1){
          /* 92天: */
          font-size: 36rpx;
          color: #333333;
          text-align: center;
        }
        span:nth-child(2){
          font-size: 28rpx;
          color: #999999;
          text-align: center;
        }
      }
    }

  }
  .pageFlex{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: #F1F1F1;
  }
  .headBack{
    background: url('https://testmpvue-1258851525.cos.ap-chengdu.myqcloud.com/backgroud.jpg') no-repeat;
    background-size: 100% 100%;
    opacity: 80%;
    width: 100%;
    height: 326rpx;
    flex:1;
    margin-bottom: 174rpx;
  }
  .prdtCard{
    background: #FFFFFF;
    box-shadow: 1px 1px 1px 1px rgba(240,233,233,0.50), inset 1px 1px 1px 0 rgba(234,220,220,0.50);
    border-radius: 7px;
    background-size: 100% 100%;
    width: 80%;
    height: 426rpx;
    position: absolute;
    top: 74rpx;
    left:10%;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    :nth-child(1){
      /* 建新养老公司提供: */
      font-size: 28rpx;
      color: #999999;
      text-align: left;
      text-indent: 1em;
    }
    :nth-child(2){
      /* 30天定期: */
      font-size: 40rpx;
      color: #333333;
      text-align: center;
    }
    :nth-child(3){
      /* 3.65%: */
      font-size: 40rpx;
      color: #F20F0F;
      text-align: center;
    }
    :nth-child(4){
      /* 存1万收益为3元: */
      font-size: 40rpx;
      color: #999999;
      text-align: center;
    }

  }
  .activity{
    background-image: radial-gradient(-23% 50%, #151836 0%, #2C72A6 0%, rgba(165,127,230,0.98) 3%, #42A9D9 53%);
    /*border: 1px solid #979797;*/
    height: 180rpx;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-content: left;
    span{
      /* 瓜分8888元: */
      font-size: 36rpx;
      color: #F3EEEE;
      text-align: left;
      text-indent: 40rpx;
    }
    :nth-child(2){
      background-color: transparent;
      border: 1px solid #F9F7F7;
      border-radius: 7px;
      width: 150rpx;
      margin-left: 40rpx;
      span{
        text-align: center;
      }
      text-align: center;
    }
  }
  .barheader{
    position: relative;
    text-indent: 1em;
    padding: 40rpx;
    background-color: #ffffff;
  }
  .barheader:before{
    content: '';
    position: absolute;
    width: 8rpx;
    height: 32rpx;
    top: 56rpx;
    left: 20rpx;
    background-image: linear-gradient(45deg, #0087ff, #3bc7ff);
    background: #28ABFF;
    background-repeat: repeat-x;
  }

</style>
