<script setup>
import {onMounted, ref, watch} from "vue";
import HomeHeader from "@/components/HomeHeader";
const dateTime = ref('');
const hours = ref('');
const minutes = ref('');
const seconds = ref('');
const dayStt = ref('')
const day = ref('');
const month = ref('');
const year = ref('');

const setTime = () =>{
  dateTime.value = new Date();
}
const setHours = () => {
  if (dateTime.value.getHours <= 9 )
    hours.value = "0"+dateTime.value.getHours();
  else
    hours.value = dateTime.value.getHours();
}
const setMinutes = () => {
  if ((dateTime.value.getMinutes() + 1) <= 9)
    minutes.value = "0"+dateTime.value.getMinutes();
  else
    minutes.value = dateTime.value.getMinutes();
}
const setSeconds = () => {
  if (dateTime.value.getSeconds() <= 9)
    seconds.value = "0"+dateTime.value.getSeconds();
  else
    seconds.value = dateTime.value.getSeconds();
}
const setDayMonthYear = () => {
  day.value = dateTime.value.getDate();
  year.value = dateTime.value.getFullYear()
  let value = dateTime.value.getMonth() + 1;
  switch (value) {
    case 1:
      month.value = "Một";
      break;
    case 2:
      month.value = "Hai";
      break;
    case 3:
      month.value = "Ba";
      break;
    case 4:
      month.value = "Tư";
      break;
    case 5:
      month.value = "Năm";
      break;
    case 6:
      month.value = "Sáu";
      break;
    case 7:
      month.value = "Bảy";
      break
    case 8:
      month.value = "Tám";
      break;
    case 9:
      month.value = "Chín";
      break;
    case 10:
      month.value = "Mười";
      break;
    case 11:
      month.value = "Mười một";
      break;
    case 12:
      month.value = "Mười hai";
  }
}
const setDay = () => {
  let day = dateTime.value.getDay();
  switch (day) {
    case 0:
      dayStt.value = "Chủ Nhật";
      break;
    case 1:
      dayStt.value = "Thứ Hai";
      break;
    case 2:
      dayStt.value = "Thứ Ba";
      break;
    case 3:
      dayStt.value = "Thứ Tư";
      break;
    case 4:
      dayStt.value = "Thứ Năm";
      break;
    case 5:
      dayStt.value = "Thứ Sáu";
      break;
    case 6:
      dayStt.value = "Thứ Bảy";
  }
}

watch(dateTime, () => {
  setHours();
  setMinutes();
  setSeconds();
  setDay()
  setDayMonthYear()
})
onMounted(()=>{
  setTime()
  let myTimeOut = setInterval(setTime, 1000);
  console.log(myTimeOut)
})
</script>
<template>
  <home-header :id="1">
    <div>
      Thời gian ở Việt Nam hiện tại:
    </div>
    <div class="clock">
      {{hours}}:{{minutes}}:{{seconds}}
    </div>
    <div style="text-align: right;font-size: 36px">
      {{dayStt}}, {{day}} Tháng {{month}}, {{year}}
    </div>
  </home-header>
</template>
<style lang="scss" scoped>
.clock{
  font-size: 300px;
  line-height: 237px;
  font-family: Montserrat,Arial,sans-serif;
  text-align: center;
  margin: 60px -5% 60px -5% ;
}
</style>
