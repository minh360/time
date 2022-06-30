<script setup>
import {ref,defineProps} from "vue";
import {useRouter} from 'vue-router';
import {PAGES} from "@/components/ActiveMenu";
const router = useRouter()
defineProps({
  activeItem: Number
})
const menuList = ref([
  {_id: PAGES.HOME, name: 'Giờ chính xác hiện tại', onClick: ()=>{
      router.push({name: 'home'})
  }},
  {_id: PAGES.STOP_WATCH, name: 'Stop Watch', onClick: ()=>{
      router.push('/stop-watch')
  }}
])
</script>

<template>
  <div class="menu-wrapper">
    <div class="slogan">
      <div class="logo">Time is</div>
      <span style="font-size: 38px; font-weight: normal">-
      Thời gian chính xác cho bất kỳ múi giờ nào</span>
    </div>
    <section class="box-wrapper">
      <div class="col-1">
        <p v-for="item in menuList" :key="item._id" :class="{active: activeItem === item._id}">
          <a @click="item.onClick">{{item.name}}</a>
        </p>
      </div>
      <div class="col-2">
        <p><a>Something</a></p>
        <p><a>Something</a></p>
        <p><a>Something</a></p>
      </div>
      <div class="col-3">
        <p><a>Something</a></p>
        <p><a>Something</a></p>
        <p><a>Something</a></p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.menu-wrapper{
  color: #ffffff;
  .slogan {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;

    .logo {
      font-weight: 800;
      font-size: 40px;
      color: crimson;
      font-family: Avenir, Helvetica, Arial, sans-serif;
    }
  }
  .box-wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    margin-top: 20px;
    grid-gap: 40px;
    font-size: 18px;
    .col-1,.col-2,.col-3{
      p{
        margin: 0 0 10px;
        height: 28px;
        a{
          text-decoration: none;
          color: unset;
          &:hover{
            background-color: crimson;
            margin-left: -10px !important;
            padding: 4px 10px;
            cursor: pointer;
          }
        }
      }
      .active{
        a{
          background-color: white;
          margin-left: -10px !important;
          padding: 4px 10px;
          color: black;
        }
      }
    }
  }
}
</style>