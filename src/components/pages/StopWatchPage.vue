<script setup>
import HeaderPage from "@/components/HeaderPage";
import {computed, onMounted, ref} from "vue";
import dayjs from "dayjs";
import {PAGES} from "@/components/ActiveMenu";
import ContentPanel from "@/components/ContentPanel";
const newTotalMili = ref(0)
const lastTotalMili = ref(0)
const totalMili = computed(() => {
  return lastTotalMili.value + newTotalMili.value
})
const hours = computed(() => {
  return Math.floor(totalMili.value / 1000 / 60 / 60 % 24)
})
const minutes = computed(() => {
  return Math.floor(totalMili.value / 1000 / 60 % 60)
})
const seconds = computed(() => {
  return Math.floor(totalMili.value / 1000 % 60)
})
const milliseconds = computed(() => {
  return totalMili.value % 1000 <= 9 ? '00' + totalMili.value % 1000 :
      (totalMili.value % 1000 <= 99 ? '0' + totalMili.value % 1000 : totalMili.value % 1000)
})
const showMenu = ref(false)
const STATUSES = {
  NOT_STARTED: 0,
  STARTED: 1,
  PAUSE: 2,
}
const status = ref(STATUSES.NOT_STARTED)
const setInter = ref(0)
const setTime = () => {
  stopClock()
  newTotalMili.value = 0
  lastTotalMili.value = 0
  status.value = STATUSES.NOT_STARTED
}
const beginClock = () => {
  let timeBegin = new Date()
  lastTotalMili.value = totalMili.value
  setInter.value = setInterval(() => {
    newTotalMili.value = dayjs(new Date()).diff(timeBegin)
  }, 0)
  status.value = STATUSES.STARTED
}
const stopClock = () => {
  clearInterval(setInter.value)
  status.value = STATUSES.PAUSE
}
const closeMenu = () =>{
  showMenu.value = false
}
const openMenu = () =>{
  showMenu.value = true
}
onMounted(() => {
  setTime()
})
</script>
<template>
  <header-page :active-item="PAGES.STOP_WATCH" @close-menu="closeMenu" :show-menu="showMenu"/>
  <content-panel :show-menu="showMenu" @open-menu="openMenu">
    <div class="clock">
      {{ hours > 9 ? hours : '0' + hours }}:{{ minutes > 9 ? minutes : '0' + minutes }}:{{ seconds > 9 ? seconds : '0' + seconds }}
    </div>
    <div class="milliseconds">
      {{ milliseconds === 0 ? '000' : milliseconds }}
    </div>
    <div class="btn">
      <button v-show="status === STATUSES.NOT_STARTED" style="background-color: chartreuse" @click="beginClock">{{ $t('time.begin')}}
      </button>
      <button v-show="status === STATUSES.STARTED" style="background-color: chartreuse" @click="stopClock">{{ $t('time.pause')}}
      </button>
      <button v-show="status === STATUSES.PAUSE" style="background-color: deepskyblue" @click="beginClock">{{ $t('time.continue')}}
      </button>
      <button style="background-color: red" @click="setTime">{{ $t('time.clear')}}</button>
    </div>
  </content-panel>
</template>
<style lang="scss" scoped>
.milliseconds, .clock {
  font-family: Montserrat, Arial, sans-serif;
}

.clock {
  font-size: 300px;
  line-height: 237px;

  text-align: center;
  margin: 60px -5% 0 -5%;
}

.milliseconds {
  text-align: right;
  font-size: 100px;
  width: 100%;
  line-height: 100px;
}

.btn {
  display: flex;
  justify-content: space-around;

  button {
    width: 300px;
    height: 100px;
    font-size: 50px;
    border: 5px solid black;
    border-radius: 25px;
  }
}
</style>