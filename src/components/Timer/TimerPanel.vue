<script>
import {OPTIONS} from "@/components/Timer/Statuses";
import ButtonPanel from "@/components/Timer/ButtonPanel";
import ClockPanel from "@/components/Timer/ClockPanel";
export default {
  name: 'TimerPanel',
  props: {
    totalMilli: Number,
    status: Number,
    option: Number
  },
  components: {
    ButtonPanel,
    ClockPanel
  },
  emits: ['setTime','stopClock','beginClock'],
  setup(props,{ emit }){
    return () =>
        <div>
          <div class={{blinker: props.totalMilli === 0 && props.option === OPTIONS.COUNTDOWN}}>
            <clock-panel totalMilli={props.totalMilli}/>
          </div>
          <button-panel status={props.status} onSetTime={() => emit('setTime')}
                        onStopClock={() => emit('stopClock')} onBeginClock={() => emit('beginClock')} />
        </div>
  }
}
</script>

<style lang="scss" scoped>
@keyframes blinker {
  50% {
    background-color: crimson;
  }
}

.blinker{
  animation: blinker 1s linear infinite;
}
</style>