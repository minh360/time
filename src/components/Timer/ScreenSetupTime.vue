<script setup>
import {ref,defineEmits} from 'vue'
defineEmits(['setTimeSetup'])
const totalTime = ref('000000')
let count = 0
const clearSetup = ()=>{
  totalTime.value = '000000'
  count = 0
}
const setTime = number =>{
  if (count < 6){
    totalTime.value = totalTime.value.substring(1)
    totalTime.value += String(number)
    count +=1
  }
}
</script>

<template>
  <div class="clock">
    {{ totalTime[0] }}{{ totalTime[1]}}:{{ totalTime[2]}}{{ totalTime[3]}}:{{ totalTime[4]}}{{ totalTime[5]}}
  </div>
  <div style="display: grid;grid-template-columns: 10fr 2fr;grid-gap: 50px;margin-top: 50px;">
    <div class="number-wrapper">
      <button v-for="number in 10" :key="number" @click="setTime(number-1)"
              style="height: 80px;background-color: lawngreen;font-size: 40px;border-radius: 25px">
        {{number-1}}
      </button>
    </div>
    <div style="display: flex;flex-direction: column;gap: 50px">
      <button style="height: 80px;background-color: lawngreen;font-size: 40px;border-radius: 25px" @click="$emit('setTimeSetup',totalTime)">
        Set
      </button>
      <button style="height: 80px;background-color: gray;font-size: 40px;border-radius: 25px" @click="clearSetup">
        Clear
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.number-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
}
.milliseconds, .clock{
  font-family: Montserrat, Arial, sans-serif;
}

.clock {
  font-size: 300px;
  line-height: 237px;

  text-align: center;
  margin: 50px -5% 0 -5%;
}

.milliseconds {
  text-align: right;
  font-size: 100px;
  width: 100%;
  line-height: 100px;
}
button{
  cursor: pointer;
  &:hover{
    background-color: crimson !important;
  }
}
</style>