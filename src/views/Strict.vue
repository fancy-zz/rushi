<template>
  <div class="Strict">
    <!-- 头部 -->
      <div class="header">
        <img src="../assets/images/yxc_03.png" alt="">
      </div>
      <!-- 轮播图 -->
      <van-swipe 
      @change="onChange"
      height=200
      >
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            {{ current + 1 }}/4
          </div>
        </template>
      </van-swipe>
      <!-- 中间导航 -->
      <div class="centerNav">
        <div 
        class="sbox"
        v-for="(item,index) in list"
        :key="index"
        >
        <img :src="item.icon" alt="">
        <p>{{item.title}}</p>
        </div>
      </div>
      <!-- 沙发第一张 -->
      <div class="banner">
        <img src="../assets/images/sf1_02.png" alt="">
      </div>
      <div class="next-footer">
          <p class="first-word">Tape 单人沙发</p>
          <P class="second-word">MINOTT</P>
      </div>
  </div>
</template>

<script>
const tab1 = require('@/assets/images/icon1_03.png')
const tab2 = require('@/assets/images/icon2_03.png')
const tab3 = require('@/assets/images/icon3_03.png')
const tab4 = require('@/assets/images/icon4_03.png')
const tab5 = require('@/assets/images/icon5_03.png')


export default {
  data() {
    return {
       current: 0,
       list:[
         {
         title:"沙发",
         icon:tab1
       },
       {
         title:"椅凳",
         icon:tab2
       },
       {
         title:"桌几",
         icon:tab3
       },
       {
         title:"柜架",
         icon:tab4
       },
       {
         title:"床类",
         icon:tab5
       },
       ]
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
}
</script>
<style lang="stylus">
.Strict
  .header
    width 100%
    height 65px
    background #fafafa
    display flex
    justify-content center
    align-items center
    z-index 10
    position fixed
    top 0
    left 0
    img 
      width 72px
      display block
  .van-swipe
    margin-top 65px
    .van-swipe-item
      background #ccc
    .custom-indicator 
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.1);
  .centerNav
    width 100%
    height 150px
    display flex
    justify-content space-between
    align-items center
    padding-left 10px
    padding-right 5px
    .sbox
      width 80px
      height 100px
      border-radius 10px
      background #f8f8f8
      margin-right 5px
      display flex
      flex-direction column
      justify-content center
      align-items center
      img 
        width 40px
        height 40px
      p
        font-size 12px
        color #ccc
        margin-top 15px
  .banner
    width 100%
    img 
      width 100%
  .next-footer
    margin-top 10px
    width 100%
    padding-left 20px
    padding-right 20px  
    .first-word
      color #8d8052
      font-size 13px
    .second-word
      font-size 16px
      margin-top 10px
</style>