<script>
import {computed} from "vue";
export default {
  name: 'ClockPanel',
  props: {
    totalMilli: Number
  },
  setup(props){
    const hours = computed(() => {
      return Math.floor(props.totalMilli / 1000 / 60 / 60)
    })
    const minutes = computed(() => {
      return Math.floor(props.totalMilli / 1000 / 60 % 60)
    })
    const seconds = computed(() => {
      return Math.floor(props.totalMilli / 1000 % 60)
    })
    const milliseconds = computed(() => {
      return props.totalMilli % 1000 <= 9 ? '00' + props.totalMilli % 1000 :
          (props.totalMilli % 1000 <= 99 ? '0' + props.totalMilli % 1000 : props.totalMilli % 1000)
    })
    return () =>
        <div>
          <div className="clock">
            {hours.value > 9 ? hours.value : '0' + hours.value}:{minutes.value > 9 ? minutes.value : '0' + minutes.value}:{seconds.value > 9 ? seconds.value : '0' + seconds.value}
          </div>
          <div className="milliseconds" v-show={milliseconds.value}>
            {milliseconds.value}
          </div>
        </div>
  }
}

</script>

<style lang="scss" scoped>
.milliseconds, .clock{
  font-family: Montserrat, Arial, sans-serif;
}
.clock {
  font-size: 250px;
  line-height: 237px;

  text-align: center;
  margin: 50px -5% 0 -5%;
}

.milliseconds {
  text-align: right;
  font-size: 100px;
  line-height: 100px;
  margin: 0;
}

</style>