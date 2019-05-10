<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs;
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || [];
      logs.unshift(Date.now());
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      });
    } else {
      logs = mpvue.getStorageSync('logs') || [];
      logs.unshift(Date.now());
      mpvue.setStorageSync('logs', logs);
    }
  },
  log () {
    console.log(`log at:${Date.now()}`);
  }
};
</script>

<style>
/* 公共样式 */
.mt15 {
  margin-top: 15px;
}
.mb15 {
  margin-bottom: 15px;
}
.ml15 {
  margin-left: 15px;
}
.mr15 {
  margin-right: 15px;
}
.padding15 {
  padding: 15px;
}
.page-info {
  padding: 15px;
}
.flex-center {
  display: flex;
  align-content: center;
}
.page__hd {
  padding: 40px;
}
.page__title {
  text-align: left;
  font-size: 20px;
  font-weight: 400;
}
.page__desc {
  margin-top: 5px;
  color: #888888;
  text-align: left;
  font-size: 14px;
}
.page__bd_spacing {
  padding: 0 15px;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
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
.afterVerticalLineWhite{
  position: relative;
}
.afterVerticalLineWhite:after{
  position: absolute;
  width: 1rpx;
  height: 60%;
  bottom:20rpx;
  right:1rpx;
  background-color: grey;
  border-right: solid #979797 1rpx;
  /* Line: */
  opacity: 0.24;
  content: ' ';
}
.centerLayout{
  display: flex;
  justify-content: center;
  align-items: center;
}
/*行居中排布*/
.flex-row{
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
}
.flex-column-around{
  display: flex;
  flex-flow: column;
  justify-content: space-around;
}
.flex-column{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}

/*下方线*/
.bottomLine{
  position: relative;
}
.bottomLine:after{
  /**line**/
  content: '';
  position: absolute;
  width: 90vw;
  height: 1rpx;
  top: 100%;
  margin-top: 15rpx;
  opacity: 0.24;
  left: 5vw;
  background-image: linear-gradient(45deg, #a7a7a7, #a7a7a7);
  background: #a7a7a7;
  background-repeat: repeat-y;
  flex:0;
}
</style>
