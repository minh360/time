<script setup>
import {computed, onMounted, ref} from "vue";
import dayjs from "dayjs"
import {PAGES} from "@/components/Page";
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
  return dayjs(dateTime.value).day()
})
const day = computed(()=>{
  return dayjs(dateTime.value).date()
});
const month = computed(() => {
  return dayjs(dateTime.value).month()+1
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
    <p>{{ $t('title')}}:</p>
    <div class="clock">
      {{hours}}:{{minutes}}:{{seconds}}
    </div>
    <div style="text-align: right;font-size: 36px">
      {{$t('time.day_stt.'+dayStt)}}, {{day}} {{ $t('time.month.'+month)}}, {{year}}
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
