<script setup>
import TimerPanel from "@/components/Timer/TimerPanel";
import {computed, onMounted,ref} from "vue";
import {STATUSES,OPTIONS} from "@/components/Timer/Statuses";
import dayjs from "dayjs";
const newTotalMilli = ref(0)
const lastTotalMilli = ref(0)
const status = ref(STATUSES.NOT_STARTED)
let setInter = 0
const totalMilli = computed(()=>{
  return lastTotalMilli.value + newTotalMilli.value
})
const setTime = () => {
  stopClock()
  newTotalMilli.value = 0
  lastTotalMilli.value = 0
  status.value = STATUSES.NOT_STARTED
}
const beginClock = () => {
  let timeBegin = new Date()
  lastTotalMilli.value = totalMilli.value
  setInter = setInterval(() => {
    newTotalMilli.value = dayjs(new Date()).diff(timeBegin)
  }, 0)
  status.value = STATUSES.STARTED
}
const stopClock = () => {
  clearInterval(setInter)
  status.value = STATUSES.PAUSE
}
onMounted(() => {
  setTime()
})
</script>

<template>
  <timer-panel :status="status" :total-mili="totalMilli"
              @set-time="setTime" @begin-clock="beginClock" @stop-clock="stopClock" :option="OPTIONS.STOPWATCH"/>
</template>

<style scoped>

</style>