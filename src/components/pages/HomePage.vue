<script setup>
import {computed, onMounted, ref} from "vue";
import dayjs from "dayjs"
import {PAGES} from "@/components/ActiveMenu";
import HeaderPage from "@/components/HeaderPage";
import ContentPanel from "@/components/ContentPanel";
const dateTime = ref('');
const showMenu = ref(false)
const hours = computed(()=>{
  return formatTime(dayjs(dateTime.value).hour())
});
const minutes = computed(()=>{
  return formatTime(dayjs(dateTime.value).minute())
});
const seconds = computed(()=>{
  return formatTime(dayjs(dateTime.value).second())
});
const dayStt = computed(()=>{
  let value = ''
  switch (dayjs(dateTime.value).day()) {
    case 0:
      value = String("Chủ Nhật");
      break
    case 1:
      value = String("Thứ Hai");
      break
    case 2:
      value = String("Thứ Ba");
      break
    case 3:
      value = String("Thứ Tư");
      break
    case 4:
      value = String("Thứ Năm");
      break
    case 5:
      value = String("Thứ Sáu");
      break
    case 6:
      value = String("Thứ Bảy");
  }
  return value
})
const day = computed(()=>{
  return dayjs(dateTime.value).date()
});
const month = computed(() => {
  let value = ''
  switch (dayjs(dateTime.value).month()+1) {
    case 1:
      value = String("Một");
      break
    case 2:
      value = String("Hai");
      break
    case 3:
      value = String("Ba");
      break
    case 4:
      value = String("Tư");
      break
    case 5:
      value = String("Năm");
      break
    case 6:
      value = String("Sáu");
      break
    case 7:
      value = String("Bảy");
      break
    case 8:
      value = String("Tám");
      break
    case 9:
      value = String("Chín");
      break
    case 10:
      value = String("Mười");
      break
    case 11:
      value = String("Mười Một");
      break
    case 12:
      value = String("Mười hai");
  }
  return value
});
const year = computed(()=>{
  return dayjs(dateTime.value).year()
});

const formatTime = (time) =>{
  if (time <= 9 )
    return '0'+ time
  else
    return time
}

const closeMenu = () =>{
  showMenu.value = false
}
const openMenu = () =>{
  showMenu.value = true
}
onMounted(()=>{
  dateTime.value = new Date()
  let myTimeOut = setInterval(()=>{
    dateTime.value = new Date();
  }, 1000);
  console.log(myTimeOut)
})
</script>
<template>
  <header-page :active-item="PAGES.HOME" @close-menu="closeMenu" :show-menu="showMenu"/>
  <content-panel :show-menu="showMenu" @open-menu="openMenu">
    <div>
      Thời gian ở Việt Nam hiện tại:
    </div>
    <div class="clock">
      {{hours}}:{{minutes}}:{{seconds}}
    </div>
    <div style="text-align: right;font-size: 36px">
      {{dayStt}}, {{day}} Tháng {{month}}, {{year}}
    </div>
  </content-panel>
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
