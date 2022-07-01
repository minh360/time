<script setup>
import {computed, defineProps, defineEmits} from "vue";
import {STATUSES,OPTIONS} from "@/components/Statuses";
const props = defineProps({
  lastTotalMili: Number,
  newTotalMili: Number,
  status: Number,
  option: Number
})
const emits = defineEmits(['setTime','stopClock','beginClock'])
const totalMili = computed(() => {
  let totalMili = 0
  if (props.option === OPTIONS.COUNTDOWN){
    totalMili = props.lastTotalMili - props.newTotalMili
  }
  if (props.option === OPTIONS.STOPWATCH)
    totalMili = props.lastTotalMili + props.newTotalMili
  return totalMili
})
const hours = computed(() => {
  return Math.floor(totalMili.value / 1000 / 60 / 60)
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
</script>

<template>
  <div :class="{blinker: lastTotalMili === 0 && option === OPTIONS.COUNTDOWN}">
    <div class="clock" >
      {{ hours > 9 ? hours : '0' + hours }}:{{ minutes > 9 ? minutes : '0' + minutes }}:{{ seconds > 9 ? seconds : '0' + seconds }}
    </div>
    <div class="milliseconds">
      {{ milliseconds === 0 ? '000' : milliseconds }}
    </div>
  </div>
  <div class="btn">
    <button v-if="status === STATUSES.NOT_STARTED" style="background-color: chartreuse" @click="emits('beginClock')">{{ $t('time.begin')}}
    </button>
    <button v-else-if="status === STATUSES.STARTED" style="background-color: chartreuse" @click="emits('stopClock')">{{ $t('time.pause')}}
    </button>
    <button v-else-if="status === STATUSES.PAUSE" style="background-color: deepskyblue" @click="emits('beginClock')">{{ $t('time.continue')}}
    </button>
    <div v-else style="width: 300px"></div>
    <button style="background-color: red" @click="emits('setTime')">{{ $t('time.clear')}}</button>
  </div>
</template>

<style lang="scss" scoped>
@keyframes blinker {
  50% {
    background-color: crimson;
  }
}
.milliseconds, .clock{
  font-family: Montserrat, Arial, sans-serif;
}
.blinker{
  animation: blinker 1s linear infinite;
}
.clock {
  font-size: 250px;
  line-height: 237px;

  text-align: center;
  margin: 50px -5% 0 -5%;
}

.milliseconds {
  text-align: right;
  font-size: 100px;
  line-height: 100px;
  margin: 0;
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
    cursor: pointer;
  }
}
</style>