<script setup>
import {defineProps,computed} from "vue";

const props = defineProps({
  totalMili: Number
})
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
  <div class="clock" >
    {{ hours > 9 ? hours : '0' + hours }}:{{ minutes > 9 ? minutes : '0' + minutes }}:{{ seconds > 9 ? seconds : '0' + seconds }}
  </div>
  <div class="milliseconds" v-show="milliseconds">
    {{ milliseconds }}
  </div>
</template>

<style lang="scss" scoped>
.milliseconds, .clock{
  font-family: Montserrat, Arial, sans-serif;
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

</style>