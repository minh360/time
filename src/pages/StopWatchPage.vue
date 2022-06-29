<script setup>
import HomeHeader from "@/components/HomeHeader";
import {onMounted, ref} from "vue";

const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const milliseconds  = ref(0)
const status = ref(false)
const setInter = ref(0)
const setTime = () =>{
  stopClock()
  hours.value = 0;
  minutes.value = 0;
  seconds.value = 0;
  milliseconds.value = 0;
}
const setHours = () => {
  hours.value += 1;
  minutes.value = 0;
}
const setMinutes = () => {
  minutes.value += 1;
  seconds.value = 0
  if(minutes.value >= 60)
    setHours()
}
const setSeconds = () => {
  seconds.value += 1;
  milliseconds.value = 0;
  if(seconds.value >= 60)
    setMinutes()
}
const setMilliseconds = () => {
  milliseconds.value += 4;
  if(milliseconds.value >= 1000)
    setSeconds()
}
const beginClock = () => {
  setInter.value = setInterval(setMilliseconds,0)
  status.value = true
}
const stopClock = () => {
  clearInterval(setInter.value)
  status.value = false
}
onMounted(()=>{
  setTime()
})
</script>
<template>
  <home-header :id="2">
    <div class="clock">
      {{hours > 9 ? hours : '0' + hours}}:{{minutes > 9 ? minutes : '0' + minutes}}:{{seconds > 9 ? seconds : '0' + seconds}}
    </div>
    <div class="milliseconds">
      {{milliseconds === 0 ? '000' : milliseconds}}</div>
    <div class="btn">
      <button @click="beginClock" v-if="!status && milliseconds === 0" style="background-color: chartreuse">Start</button>
      <button @click="stopClock" v-else-if="status" style="background-color: chartreuse">Pause</button>
      <button @click="beginClock" v-if="!status && milliseconds !== 0" style="background-color: deepskyblue">Continue</button>
      <button @click="setTime" style="background-color: red">Clear</button>
    </div>
  </home-header>
</template>
<style lang="scss" scoped>
.milliseconds,.clock{
  font-family: Montserrat,Arial,sans-serif;
}
.clock{
  font-size: 300px;
  line-height: 237px;

  text-align: center;
  margin: 60px -5% 0 -5% ;
}
.milliseconds{
  text-align: right;
  font-size: 100px;
  width: 100%;
  line-height: 100px;
}
.btn{
  display: flex;
  justify-content: space-around;
  button{
    width: 300px;
    height: 100px;
    font-size: 50px;
    border: 5px solid black;
    border-radius: 25px;
  }
}
</style>