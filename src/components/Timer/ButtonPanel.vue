<script>
import {STATUSES} from "@/components/Timer/Statuses";
import {useI18n} from "vue-i18n";
export default {
  name: 'ButtonPanel',
  props: {
    status: Number
  },
  emits: ['beginClock','stopClock','setTime'],
  setup(props,{emit}){
    const {t} = useI18n()
    const renderButtonContent = {
      [STATUSES.NOT_STARTED]: () => <button style="background-color: chartreuse"
                                            onClick={() => emit('beginClock')}>{t('time.begin')}</button>,
      [STATUSES.STARTED]: () => <button style="background-color: chartreuse"
                                        onClick={() => emit('stopClock')}> {t('time.pause')}</button>,
      [STATUSES.PAUSE]: () => <button style="background-color: deepskyblue"
                                      onClick={() => emit('beginClock')}> {t('time.continue')}</button>,
      [STATUSES.TIME_OUT]: () => <div style="width: 300px"></div>
    }
    return ()=>
        <div class="btn">
          {renderButtonContent[props.status]()}
          <button style="background-color: red" onClick={()=>emit('setTime')}>{ t('time.clear') }</button>
        </div>
  }
}
</script>
<style lang="scss" scoped>
.btn {
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
  button {
    width: 300px;
    height: 100px;
    font-size: 50px;
    border: 5px solid black;
    border-radius: 25px;
    cursor: pointer;
  }
}
</style>