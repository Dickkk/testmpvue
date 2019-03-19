<template>
  <div class="mainPage">
    <div class="mainHead">
        <div>
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
      七日变化
    </div>
    <div>
      交易规则
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      id:'',
      date:''
    };
  },
  mounted(){
    this.id = this.$root.$mp.query.id;
    this.date=this.$root.$mp.query.date;
  }
};
</script>

<style lang="scss" scoped>
  .mainHead{
    width: 100%;
    height: 197*2rpx;
    background: #1B82D1;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    div:nth-child(1){
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
      .afterVerticalLine{
        position: relative;
      }
      .afterVerticalLine:after{
        position: absolute;
        width: 1rpx;
        height: 60%;
        bottom:20rpx;
        right:1rpx;
        background-color: grey;
        border-right: solid #F7F1F1 1rpx;
        /* Line: */
        opacity: 0.24;
        content: ' ';
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
