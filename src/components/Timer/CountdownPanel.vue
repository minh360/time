<script>
import TimerPanel from "@/components/Timer/TimerPanel";
import {computed,ref} from "vue";
import {STATUSES,OPTIONS} from "@/components/Timer/Statuses";
import ScreenSetupTime from "@/components/Timer/ScreenSetupTime";
import dayjs from "dayjs";
export default {
  name: 'CountdownPanel',
  components: {
    TimerPanel,
    ScreenSetupTime
  },
  setup(){
    const newTotalMilli = ref(0)
    const lastTotalMilli = ref(0)
    let beginTotalMilli = 0
    let timeBegin = 0
    let setInter = 0
    const totalMilli = computed(()=>{
      return lastTotalMilli.value - newTotalMilli.value
    })
    const status = ref(STATUSES.NOT_STARTED)
    const SETUP_TIME = {
      NOT_SETUP: 0,
      DONE_SETUP: 1
    }
    const statusSetup = ref(SETUP_TIME.NOT_SETUP)
    const setTime = time =>{
      let hours = Number(time.substring(0,2))
      let minutes = Number(time.substring(2,4))
      let seconds = Number(time.substring(4,6))
      statusSetup.value = SETUP_TIME.DONE_SETUP
      beginTotalMilli = lastTotalMilli.value = hours * (1000 * 60 * 60) + minutes * (1000 * 60) + seconds * 1000
    }
    const setTimeBegin = () =>{
      stopClock()
      newTotalMilli.value = 0
      lastTotalMilli.value = beginTotalMilli
      status.value = STATUSES.NOT_STARTED
    }
    const beginSetInter = () =>{
      if(totalMilli.value <= 0){
        stopClock()
        lastTotalMilli.value = 0
        newTotalMilli.value = 0
        status.value = STATUSES.TIME_OUT
      }
      else {
        newTotalMilli.value = dayjs(new Date()).diff(timeBegin)
      }
    }
    const beginClock = () => {
      timeBegin = new Date()
      lastTotalMilli.value = totalMilli.value
      setInter = setInterval(beginSetInter, 0)
      status.value = STATUSES.STARTED
    }
    const stopClock = () => {
      clearInterval(setInter)
      status.value = STATUSES.PAUSE
    }
    return () =>
        <div>
          {statusSetup.value === SETUP_TIME.NOT_SETUP ? <screen-setup-time onSetTimeSetup={setTime}/>
              :<timer-panel status={status.value} total-milli={totalMilli.value} onSetTime={setTimeBegin} onBeginClock={beginClock} onStopClock={stopClock} option={OPTIONS.COUNTDOWN} />}
        </div>
  }
}

</script>

<style lang="scss" scoped>

</style>