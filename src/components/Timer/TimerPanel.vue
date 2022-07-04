<script setup>
import {computed, defineProps, defineEmits} from "vue";
import {OPTIONS} from "@/components/Timer/Statuses";
import ButtonPanel from "@/components/Timer/ButtonPanel";
import ClockPanel from "@/components/Timer/ClockPanel";
const props = defineProps({
  totalMili: Number,
  status: Number,
  option: Number
})
const emits = defineEmits(['setTime','stopClock','beginClock'])
const hours = computed(() => {
  return Math.floor(props.totalMili / 1000 / 60 / 60)
})
const minutes = computed(() => {
  return Math.floor(props.totalMili / 1000 / 60 % 60)
})
const seconds = computed(() => {
  return Math.floor(props.totalMili / 1000 % 60)
})
const milliseconds = computed(() => {
  return props.totalMili % 1000 <= 9 ? '00' + props.totalMili % 1000 :
      (props.totalMili % 1000 <= 99 ? '0' + props.totalMili % 1000 : props.totalMili % 1000)
})
</script>

<template>
  <div :class="{blinker: totalMili === 0 && option === OPTIONS.COUNTDOWN}">
    <clock-panel :hours="hours" :minutes="minutes" :seconds="seconds" :milliseconds="milliseconds"/>
  </div>
  <div class="btn">
    <button-panel :status="status" @set-time="emits('setTime')"
                  @stop-clock="emits('stopClock')" @begin-clock="emits('beginClock')"/>
  </div>
</template>

<style lang="scss" scoped>
@keyframes blinker {
  50% {
    background-color: crimson;
  }
}

.blinker{
  animation: blinker 1s linear infinite;
}
.btn {
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
}
</style>