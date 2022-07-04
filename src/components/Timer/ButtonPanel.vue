<script setup>
import {defineProps,defineEmits} from "vue";
import {STATUSES} from "@/components/Timer/Statuses";
defineProps({
  status: Number
})
const emits = defineEmits(['beginClock','stopClock','setTime'])
</script>
<template>
  <button v-if="status === STATUSES.NOT_STARTED" style="background-color: chartreuse" @click="emits('beginClock')">
    {{ $t('time.begin') }}
  </button>
  <button v-else-if="status === STATUSES.STARTED" style="background-color: chartreuse" @click="emits('stopClock')">
    {{ $t('time.pause') }}
  </button>
  <button v-else-if="status === STATUSES.PAUSE" style="background-color: deepskyblue" @click="emits('beginClock')">
    {{ $t('time.continue') }}
  </button>
  <div v-else style="width: 300px"></div>
  <button style="background-color: red" @click="emits('setTime')">{{ $t('time.clear') }}</button>
</template>
<style scoped>
button {
  width: 300px;
  height: 100px;
  font-size: 50px;
  border: 5px solid black;
  border-radius: 25px;
  cursor: pointer;
}
</style>