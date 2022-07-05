<script>
import TimerPanel from "@/components/Timer/TimerPanel";
import {computed, onMounted,ref} from "vue";
import {STATUSES,OPTIONS} from "@/components/Timer/Statuses";
import dayjs from "dayjs";
export default {
  name: 'StopwatchPanel',
  components:{
    TimerPanel
  },
  setup(){
    const newTotalMilli = ref(0)
    const lastTotalMilli = ref(0)
    const status = ref(STATUSES.NOT_STARTED)
    let setInter = 0
    const totalMilli = computed(()=>{
      return lastTotalMilli.value + newTotalMilli.value
    })
    const setTime = () => {
      stopClock()
      newTotalMilli.value = 0
      lastTotalMilli.value = 0
      status.value = STATUSES.NOT_STARTED
    }
    const beginClock = () => {
      let timeBegin = new Date()
      lastTotalMilli.value = totalMilli.value
      setInter = setInterval(() => {
        newTotalMilli.value = dayjs(new Date()).diff(timeBegin)
      }, 0)
      status.value = STATUSES.STARTED
    }
    const stopClock = () => {
      clearInterval(setInter)
      status.value = STATUSES.PAUSE
    }
    onMounted(() => {
      setTime()
    })
    return () =>
        <timer-panel status={status.value} total-milli={totalMilli.value}
            onSetTime={setTime} onBeginClock={beginClock} onStopClock={stopClock} option={OPTIONS.STOPWATCH}/>
  }
}

</script>

<style scoped>

</style>