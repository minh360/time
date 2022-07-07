<script setup>
import {defineProps, defineEmits} from "vue";
import {OPTIONS} from "@/components/Timer/Statuses";
import ButtonPanel from "@/components/Timer/ButtonPanel";
import ClockPanel from "@/components/Timer/ClockPanel";
defineProps({
  totalMilli: Number,
  status: Number,
  option: Number
})
const emits = defineEmits(['setTime','stopClock','beginClock'])
</script>

<template>
  <div :class="{blinker: totalMilli === 0 && option === OPTIONS.COUNTDOWN}">
    <clock-panel :totalMilli="totalMilli"/>
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