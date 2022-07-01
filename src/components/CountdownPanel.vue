<script setup>
import TimerPanel from "@/components/TimerPanel";
import {computed,ref} from "vue";
import {STATUSES,OPTIONS} from "@/components/Statuses";
import ScreenSetupTime from "@/components/ScreenSetupTime";
import dayjs from "dayjs";
const newTotalMili = ref(0)
const beginTotalMili = ref(0)
const timeBegin = ref(0)
const setInter = ref(0)
const lastTotalMili = ref(0)
const totalMili = computed(()=>{
  return lastTotalMili.value - newTotalMili.value
})
const status = ref(STATUSES.NOT_STARTED)
const SETUP_TIME = {
  NOT_SETUP: 0,
  DONE_SETUP: 1
}
const statusSetup = ref(SETUP_TIME.NOT_SETUP)
const setTime = time =>{
  let hours = Number(time.substring(0,2))
  let minutes = Number(time.substring(2,4))
  let seconds = Number(time.substring(4,6))
  statusSetup.value = SETUP_TIME.DONE_SETUP
  beginTotalMili.value = lastTotalMili.value = hours * (1000 * 60 * 60) + minutes * (1000 * 60) + seconds * 1000
}
const setTimeBegin = () =>{
  stopClock()
  newTotalMili.value = 0
  lastTotalMili.value = beginTotalMili.value
  status.value = STATUSES.NOT_STARTED
}
const beginSetInter = () =>{
  if(totalMili.value <= 0){
    stopClock()
    lastTotalMili.value = 0
    newTotalMili.value = 0
    status.value = 999
  }
  else {
    newTotalMili.value = dayjs(new Date()).diff(timeBegin.value)
  }
}
const beginClock = () => {
  timeBegin.value = new Date()
  lastTotalMili.value = totalMili.value
  setInter.value = setInterval(beginSetInter, 0)
  status.value = STATUSES.STARTED
}
const stopClock = () => {
  clearInterval(setInter.value)
  status.value = STATUSES.PAUSE
}
</script>

<template>
  <section v-if="statusSetup === SETUP_TIME.NOT_SETUP">
    <screen-setup-time @set-time-setup="setTime($event)"/>
  </section>
  <section v-else-if="statusSetup === SETUP_TIME.DONE_SETUP">
    <timer-panel :status="status" :lastTotalMili="lastTotalMili" :newTotalMili="newTotalMili"
                 @set-time="setTimeBegin" @begin-clock="beginClock" @stop-clock="stopClock" :option="OPTIONS.COUNTDOWN"/>
  </section>
</template>

<style lang="scss" scoped>

</style>