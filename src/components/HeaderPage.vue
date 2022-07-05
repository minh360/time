<script>
import MenuPanel from "@/components/MenuPanel";
export default {
  name: 'HeaderPage',
  props: {
    activeItem: Number,
    showMenu: Boolean
  },
  emits: ['closeMenu'],
  components:{
    MenuPanel
  },
  setup(props,{ emit }){
    return () =>
      <div class="menu">
        <div class="btn-close" onClick={()=>emit('closeMenu')} v-show={props.showMenu}>&times;</div>
        <menu-panel class="box" activeItem={props.activeItem}/>
      </div>
  }
}
</script>

<style lang="scss" scoped>
.menu{
  position: absolute;
  background-color: black;
  width: 100%;
  height: 300px;
  .btn-close{
    position: absolute;
    z-index: 10;
    top: 12px;
    right: -6px;
    color: #999;
    margin-right: 5%;
    cursor: pointer;
    font-size: 40px;
    line-height: 40px;
    width: 40px;
    height: 40px;
    text-align: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  .box{
    padding: 60px 5% 0;
  }
}
</style>