<script>
import HeaderPage from "@/components/HeaderPage";
import {ref} from "vue";
import {PAGES} from "@/components/Page";
import {OPTIONS} from '@/components/Timer/Statuses'
import ContentPanel from "@/components/ContentPanel";
import StopwatchPanel from "@/components/Timer/StopwatchPanel";
import CountdownPanel from "@/components/Timer/CountdownPanel";
import {useI18n} from "vue-i18n";
export default {
  name: 'TimerPage',
  components: {
    HeaderPage,
    ContentPanel,
    StopwatchPanel,
    CountdownPanel
  },
  setup(){
    const {t} = useI18n()
    const showMenu = ref(false)
    const closeMenu = () =>{
      showMenu.value = false
    }
    const openMenu = () =>{
      showMenu.value = true
    }
    const option = ref(OPTIONS.NOT_CHOOSE)
    const setOption = status =>{
      option.value =  status
    }
    const renderHeaderPage = () =>
      <header-page active-item={PAGES.STOP_WATCH} onCloseMenu={closeMenu} show-menu={showMenu.value}/>
    const renderOptions = {
      [OPTIONS.NOT_CHOOSE]: ()=>
          <div style="display: flex;justify-content: center;margin-top:50px;text-align: center">
            <div style="border: 5px solid black;background-color: gray;display: flex;flex-direction: row;gap: 5px">
              <div style="background-color: gainsboro;width: 250px;padding-top: 25px;cursor: pointer" onClick={()=>setOption(OPTIONS.STOPWATCH)}>
                <p class="text_option" style="font-size: 30px;font-weight: 800">{ t('options.stopwatch') }</p>
                <img src="/stop_watch.png" alt="" style="margin-top: -25px" />
              </div>
              <div style="background-color: #d2bea9;width: 250px;padding-top: 25px;cursor: pointer" onClick={()=>setOption(OPTIONS.COUNTDOWN)}>
                <p class="text_option" style="font-size: 30px;font-weight: 800">{ t('options.countdown') }</p>
                <img src="/count_down.png" alt="" style="margin-top: -25px" />
              </div>
            </div>
          </div>,
      [OPTIONS.STOPWATCH]: ()=>
          <div>
            <button style="height: 50px;width: 100px;cursor: pointer" onClick={()=>setOption(OPTIONS.NOT_CHOOSE)}>Back</button>
            <stopwatch-panel />
          </div>,
      [OPTIONS.COUNTDOWN]: ()=>
          <div>
            <button style="height: 50px;width: 100px;cursor: pointer" onClick={()=>setOption(OPTIONS.NOT_CHOOSE)}>Back</button>
            <countdown-panel />
          </div>,
    }
    const renderContentPage = () =>
        <content-panel showMenu={showMenu.value} onOpenMenu={openMenu}>
          {renderOptions[option.value]()}
        </content-panel>
    return () =><div>{renderHeaderPage()}{renderContentPage()}</div>
  }
}

</script>
<style lang="scss" scoped>
.text_option{
  font-family: Montserrat, Arial, sans-serif;
}
</style>