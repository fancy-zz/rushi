<template>
  <div class="Index">
      <router-view></router-view>
      <van-tabbar 
      v-model="active"
      :placeholder="true" 
      z-index=10
      route
      active-color="#a4a4a4"
      inactive-color="#ccc"
      >
        <van-tabbar-item 
          v-for="(item,index) in list"
          :key="index"
          :to="item.to"
        >
            <span>{{item.title}}</span>
            <template #icon="props">
              <img :src="props.active ? item.icon.active : item.icon.inactive" />
            </template>
        </van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
const tab01 = require("@/assets/images/zp1_03.png")
const sel_tab01 = require("@/assets/images/zp2_03.png")
const tab02 = require("@/assets/images/strict1_03.png")
const sel_tab02 = require("@/assets/images/strict1_03.png")
const tab03 = require("@/assets/images/study1_03.png")
const sel_tab03 = require("@/assets/images/study2_03.png")
const tab04 = require("@/assets/images/collect1_03.png")
const sel_tab04 = require("@/assets/images/collect1_03.png")
const tab05 = require("@/assets/images/wode1_03.png")
const sel_tab05 = require("@/assets/images/wode2_03.png")


export default {
 data() {
   return {
     active:0,
     list:[{
      title:"作品",
      to:'/works',
      icon:{
        active:sel_tab01,
        inactive:tab01
      }
     },
     {
      title:"严选材",
      to:'/strict',
      icon:{
        active:sel_tab02,
        inactive:tab02
      }
     },
     {
      title:"学习",
      to:'/learn',
      icon:{
        active:sel_tab03,
        inactive:tab03
      }
     },
     {
      title:"收藏",
      to:'/favorites',
      icon:{
        active:sel_tab04,
        inactive:tab04
      }
     },
     {
      title:"我的",
      to:'/mine',
      icon:{
        active:sel_tab05,
        inactive:tab05
      }
     }
     ]
   }
 },
}
</script>
<style lang="stylus">

  
</style>
