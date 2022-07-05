<script>
import {ref} from 'vue'

export default {
  name: 'ScreenSetupTime',
  emits: ['setTimeSetup'],
  setup(props,{ emit }) {
    const totalTime = ref('000000')
    let count = 0
    const clearSetup = () => {
      totalTime.value = '000000'
      count = 0
    }
    const setTime = number => {
      if (count < 6) {
        totalTime.value = totalTime.value.substring(1)
        totalTime.value += String(number)
        count += 1
      }
    }
    return () =>
        <div>
          <div className="clock">
            { totalTime.value[0] }{ totalTime.value[1] }:{ totalTime.value[2] }{ totalTime.value[3] }:{ totalTime.value[4] }{ totalTime.value[5] }
          </div>
          <div style="display: grid;grid-template-columns: 10fr 2fr;grid-gap: 50px;margin-top: 50px;">
            <div className="number-wrapper">
              {[...Array(10)].map((__,index) =>
                  <button onClick={() => setTime(index)}
                          style="height: 80px;background-color: lawngreen;font-size: 40px;border-radius: 25px">{index}
                  </button>
              )}
            </div>
            <div style="display: flex;flex-direction: column;gap: 50px">
              <button style="height: 80px;background-color: lawngreen;font-size: 40px;border-radius: 25px"
                      onClick={() => emit('setTimeSetup', totalTime.value)}>
                Set
              </button>
              <button style="height: 80px;background-color: gray;font-size: 40px;border-radius: 25px"
                      onClick={clearSetup}>
                Clear
              </button>
            </div>
          </div>
        </div>
  }
}
</script>

<style lang="scss" scoped>
.number-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
}

.milliseconds, .clock {
  font-family: Montserrat, Arial, sans-serif;
}

.clock {
  font-size: 300px;
  line-height: 237px;

  text-align: center;
  margin: 50px -5% 0 -5%;
}

.milliseconds {
  text-align: right;
  font-size: 100px;
  width: 100%;
  line-height: 100px;
}

button {
  cursor: pointer;

  &:hover {
    background-color: crimson !important;
  }
}
</style>