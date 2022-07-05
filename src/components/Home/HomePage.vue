<script>
import {computed, onMounted, ref} from "vue";
import dayjs from "dayjs"
import {PAGES} from "@/components/Page";
import HeaderPage from "@/components/HeaderPage";
import ContentPanel from "@/components/ContentPanel";
import {useI18n} from "vue-i18n";


export default {
  name: 'HomePage',
  components:{
    HeaderPage,
    ContentPanel
  },
  setup: function () {
    const {t} = useI18n()
    const dateTime = ref('');
    const showMenu = ref(false)
    const closeMenu = () => {
      showMenu.value = false
    }
    const openMenu = () => {
      showMenu.value = true
    }
    const renderHeaderPage = () =>
        <header-page activeItem={PAGES.HOME} onCloseMenu={closeMenu} showMenu={showMenu.value}/>
    const formatTime = (time) => {
      if (time <= 9)
        return '0' + time
      else
        return time
    }
    const hours = computed(() => {
      return formatTime(dayjs(dateTime.value).hour())
    });
    const minutes = computed(() => {
      return formatTime(dayjs(dateTime.value).minute())
    });
    const seconds = computed(() => {
      return formatTime(dayjs(dateTime.value).second())
    });
    const dayStt = computed(() => {
      return dayjs(dateTime.value).day()
    })
    const day = computed(() => {
      return dayjs(dateTime.value).date()
    });
    const month = computed(() => {
      return dayjs(dateTime.value).month() + 1
    });
    const year = computed(() => {
      return dayjs(dateTime.value).year()
    });
    const renderContentPanel = () =>
        <content-panel showMenu={showMenu.value} onOpenMenu={openMenu}>
          <p>{t('title')}:</p>
          <div class="clock">
            {hours.value}:{minutes.value}:{seconds.value}
          </div>
          <div style="text-align: right;font-size: 36px">
            {t('time.day_stt.' + dayStt.value)}, {day.value} {t('time.month.' + month.value)}, {year.value}
          </div>
        </content-panel>
    onMounted(() => {
      dateTime.value = new Date()
      let myTimeOut = setInterval(() => {
        dateTime.value = new Date();
      }, 1000);
      console.log(myTimeOut)
    })
    return () => <div>{renderHeaderPage()}{renderContentPanel()}</div>
  }
}
</script>
<style lang="scss" scoped>
.clock{
  font-size: 300px;
  line-height: 237px;
  font-family: Montserrat,Arial,sans-serif;
  text-align: center;
  margin: 60px -5% 60px -5% ;
}
</style>
