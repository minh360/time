<script setup>
import HeaderPage from "@/components/HeaderPage";
import {ref} from "vue";
import {PAGES,OPTIONS} from "@/components/Statuses";
import ContentPanel from "@/components/ContentPanel";
import StopwatchPanel from "@/components/StopwatchPanel";
import CountdownPanel from "@/components/CountdownPanel";
const showMenu = ref(false)
const closeMenu = () =>{
  showMenu.value = false
}
const openMenu = () =>{
  showMenu.value = true
}
const option = ref(OPTIONS.NOT_CHOOSE)
const setOption = status =>{
  option.value =  status
}
</script>
<template>
  <header-page :active-item="PAGES.STOP_WATCH" @close-menu="closeMenu" :show-menu="showMenu"/>
  <content-panel :show-menu="showMenu" @open-menu="openMenu">
    <section v-if="option === OPTIONS.NOT_CHOOSE">
      <div style="display: flex;justify-content: center;margin-top:50px;text-align: center">
        <div style="border: 5px solid black;background-color: gray;display: flex;flex-direction: row;gap: 5px">
          <div style="background-color: gainsboro;width: 250px;padding-top: 25px;cursor: pointer" @click="setOption(OPTIONS.STOPWATCH)">
            <p class="text_option" style="font-size: 30px;font-weight: 800">{{ $t('options.stopwatch')}}</p>
            <img src="/stop_watch.png" alt="" style="margin-top: -25px">
          </div>
          <div style="background-color: #d2bea9;width: 250px;padding-top: 25px;cursor: pointer" @click="setOption(OPTIONS.COUNTDOWN)">
            <p class="text_option" style="font-size: 30px;font-weight: 800">{{ $t('options.countdown')}}</p>
            <img src="/count_down.png" alt="" style="margin-top: -25px">
          </div>
        </div>
      </div>
    </section>
    <section v-else>
      <button style="height: 50px;width: 100px;cursor: pointer" @click="setOption(OPTIONS.NOT_CHOOSE)">Back</button>
      <div v-if="option === OPTIONS.STOPWATCH">
        <stopwatch-panel />
      </div>
      <div v-if="option === OPTIONS.COUNTDOWN">
        <countdown-panel />
      </div>
    </section>
  </content-panel>
</template>
<style lang="scss" scoped>
.text_option{
  font-family: Montserrat, Arial, sans-serif;
}
</style>