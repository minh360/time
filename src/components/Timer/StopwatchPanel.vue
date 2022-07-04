<script setup>
import TimerPanel from "@/components/Timer/TimerPanel";
import {computed, onMounted,ref} from "vue";
import {STATUSES,OPTIONS} from "@/components/Timer/Statuses";
import dayjs from "dayjs";
const newTotalMili = ref(0)
const lastTotalMili = ref(0)
const status = ref(STATUSES.NOT_STARTED)
let setInter = 0
const totalMili = computed(()=>{
  return lastTotalMili.value + newTotalMili.value
})
const setTime = () => {
  stopClock()
  newTotalMili.value = 0
  lastTotalMili.value = 0
  status.value = STATUSES.NOT_STARTED
}
const beginClock = () => {
  let timeBegin = new Date()
  lastTotalMili.value = totalMili.value
  setInter = setInterval(() => {
    newTotalMili.value = dayjs(new Date()).diff(timeBegin)
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
  <timer-panel :status="status" :total-mili="totalMili"
              @set-time="setTime" @begin-clock="beginClock" @stop-clock="stopClock" :option="OPTIONS.STOPWATCH"/>
</template>

<style scoped>

</style>