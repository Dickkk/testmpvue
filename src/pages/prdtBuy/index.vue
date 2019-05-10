<template>
  <div class="mainLayout">
    <div class="title centerLayout">
      <span>{{title}}</span>
    </div>
    <div class="buyDetail flex-column-around">
      <div  class="flex-row">
        <span style="font-family: PingFangSC-Regular;font-size: 34rpx;  color: #060606; flex: 1;text-indent: 50rpx">买入金额</span>
        <span style="font-family: PingFangSC-Regular;font-size: 28rpx;color: #208EC9;width: 180rpx;">交易规则</span>
      </div>
      <div class="flex-row">
        <i-icon type="financial_fill" size="60" style="opacity: 50%;text-indent: 20rpx" />
        <span style="font-family: PingFangSC-Regular;font-size: 72rpx;flex:1;color: #C93C20;text-indent: 20rpx">{{bal}}</span>
        <i-icon type="close" size="28" style="width: 150rpx" ></i-icon>
      </div>
      <div style="width: 65%;font-family: PingFangSC-Regular;font-size: 30rpx;color: #C93C20;text-align: center;margin-left: 50rpx">
        请确保银行卡余额充足
        预计3月13日产生收益，成交后不可撤销，交易完成
        无法撤销，无法提前支取。
      </div>
    </div>
    <div class="flex-row">
      <span style="flex:1;text-indent: 20rpx">付款方式</span>
      <picker style="width: 200rpx; " @change="bindPickerChange" :value="index" :range="array">
        <view class="picker" style="white-space: nowrap">
          {{array[index]}}<i-icon type="enter" size="20"></i-icon>
        </view>
      </picker>
    </div>
    <div class="submit">
      <button @click="buyClick" style="width: 80%;"  type="warn" >确定</button>
      <footer class="footer">本产品由民生银行提供</footer>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      id:'',
      date:'',
      title:'民生银行定期10天定期产品',
      bal:'1.00',
      array: ['交通银行', '微信'],
      index: 1
    };
  },
  components:{
  },
  mounted(){
    this.id = this.$root.$mp.query.id;
    this.date = this.$root.$mp.query.date;
  },
  methods:{
    detailClick(){
    },
    bindPickerChange(e) {
      console.log('picker发送选择改变，携带值为', e.target.value);
      this.index=e.target.value;
    },
    buyClick(){
      console.log('click');

      // 支付
      wx.requestPayment({
        timeStamp: '',
        nonceStr: '',
        package: '',
        signType: 'MD5',
        paySign: '',
        success(res) { },
        fail(res) { }
      });
      // 扫码
      // wx.scanCode({
      //   success(res) {
      //     mpvue.showToast({
      //       title: JSON.stringify(res),
      //       icon: 'success',
      //       duration: 2000
      //     });
      //   },
      //   fail(error){
      //     mpvue.showToast({
      //       title: JSON.stringify(error),
      //       icon: 'fail',
      //       duration: 2000
      //     });
      //   }
      // });
      // 选择图片
      // wx.chooseImage({
      //   count: 1,
      //   sizeType: ['original', 'compressed'],
      //   sourceType: ['album', 'camera'],
      //   success(res) {
      //     // tempFilePath可以作为img标签的src属性显示图片
      //     const tempFilePaths = res.tempFilePaths;
      //     console.log(tempFilePaths);
      //   }
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
.mainLayout{
  display: flex;
  background: #F5F5F5;
  flex-flow: column nowrap;
  justify-content: space-around;
  height: 100vh;

}
.title{
  height: 88rpx;
  /* Rectangle 18: */
  background: #FFFFFF;
  span:{
    overflow:hidden;
    text-overflow:ellipsis;
    font-family: PingFangSC-Regular;
    font-size: 34rpx;
    color: #060606;
  }
}
.buyDetail{
  height: 640rpx;
  background: #FFFFFF;

}
.payType{
  height: 136rpx;
  background: #FFFFFF;
}
.submit{
  height: 130rpx;
}
.footer{
  height: 40rpx;
  text-align: center;
  /* 本产品由民生银行提供: */
  opacity: 0.49;
  font-family: PingFangSC-Light;
  font-size: 13px;
  color: #060505;
 }
</style>
