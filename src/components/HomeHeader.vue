<script setup>
import {computed, ref,defineProps} from "vue";
import MenuPanel from "@/components/MenuPanel";
const showMenu = ref(false)
const mainStyle = computed(()=>({
  transform: `translateY(${showMenu.value ? '300px' : '0px'})`
}))
defineProps({
  id: Number
})
</script>
<template>
  <div class="menu">
    <div class="btn-close" @click="() => showMenu = false" v-show="showMenu">&times;</div>
    <menu-panel class="box" :id="id"/>
  </div>
  <div class="main-wrapper" :style="mainStyle">
    <div class="top">
      <div class="logo">Time.is</div>
      <div style="font-size: 28px;height: 35px;width: 28px;cursor: pointer" @click="() => showMenu = true" >☰</div>
    </div>
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.menu{
  position: absolute;
  background-color: black;
  width: 100%;
  height: 300px;
  .btn-close{
    position: absolute;
    z-index: 10;
    top: 12px;
    right: -6px;
    color: #999;
    margin-right: 5%;
    cursor: pointer;
    font-size: 40px;
    line-height: 40px;
    width: 40px;
    height: 40px;
    text-align: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  .box{
    padding: 60px 5% 0;
  }
}
.main-wrapper{
  transition: 0.5s ease;
  padding: 0 5%;
  height: 800px;
  background-color: white;
  .top{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 20px;
    .logo{
      text-transform: uppercase;
      font-weight: 600;
      font-size: 16px;
      padding: 10px 20px;
      background: #c35;
      color: #fff;
      width: 100px;
      box-sizing: border-box;
      font-family: Montserrat,Arial,sans-serif;
    }
  }
}
</style>