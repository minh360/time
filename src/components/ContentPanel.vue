<script>
import {computed} from "vue";
export default {
  name: 'ContentPanel',
  props: {
    showMenu: Boolean
  },
  emits: ['openMenu'],
  setup(props,ctx){
    const mainStyle = computed(()=> ({
      transform: `translateY(${props.showMenu ? '300px' : '0px'})`
    }))
    return () =>
      <div class="main-wrapper" style={mainStyle.value}>
        <div class="top">
          <div class="logo">Time.is</div>
          <div style="font-size: 28px;height: 35px;width: 28px;cursor: pointer" onClick={()=>ctx.emit('openMenu')} >☰</div>
        </div>
        {ctx.slots.default && ctx.slots.default()}
      </div>
  }
}

</script>
<style lang="scss" scoped>
.main-wrapper{
  transition: 0.5s ease;
  padding: 0 5%;
  height: 800px;
  background-color: white;
  .top{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 5px;
    .logo{
      text-transform: uppercase;
      font-weight: 600;
      font-size: 16px;
      padding: 10px 20px;
      background: #c35;
      color: #fff;
      width: 100px;
      box-sizing: border-box;
      font-family: Montserrat,Arial,sans-serif;
    }
  }
}
</style>