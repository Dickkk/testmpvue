<template>
  <div class="pageFlex">
    <div class="headBack">背景</div>
    <div>推荐card</div>
    <div>活动</div>
    | 热门推荐
    <div>滑块</div>

  </div>
</template>

<script>
import card from '../../components/card';
import mpButton from '../../components/button';
export default {
  data () {
    return {
    };
  },
  computed: {
  },
  components: {
    card,
    mpButton
  },

  methods: {
    increse() {
      this.$store.dispatch('counter/incrementAsyn', 2);
    }
  },

  created () {
    // let app = getApp()
  }
};
</script>

<style scoped>
  .pageFlex{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .headBack{
    background: url('../../../static/images/backgroud.jpg') no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 326rpx;
    flex:1;
  }
</style>
