<script>
import {ref} from "vue";
import {useRouter} from 'vue-router';
import {PAGES} from "@/components/Page";
import {useI18n} from "vue-i18n";
import createI18n from '@/util'
export default {
  name: 'MenuPanel',
  props: {
    activeItem: Number
  },
  setup(props){
    const router = useRouter()
    const {t} = useI18n()
    const language = ref([{name:'English',value:'en'},{name:'Vietnamese',value:'vi'}])
    const menuList = ref([
      {_id: PAGES.HOME, name: 'exact_time_now', onClick: ()=>{
          router.push({name: 'home'})
        }},
      {_id: PAGES.STOP_WATCH, name: 'timer', onClick: ()=>{
          router.push('/timer')
        }}
    ])
    const renderSlogan = () =>
        <div class="slogan">
          <div class="logo">Time is</div>
          <span style="font-size: 38px; font-weight: normal">- {t("slogan")}</span>
        </div>
    const renderMenuColumn1 = ()=>
      <div class="col-1">
        {menuList.value.map((item)=>(
            <p class={{active: props.activeItem === item._id}}>
              <a onClick={item.onClick}>{t('menu.'+ item.name)}</a>
            </p>
            ))}
      </div>
    const renderMenuColumn23 = ()=>
      <div class="col-2_3">
        <p><a>{t("menu.something")}</a></p>
        <p><a>{t("menu.something")}</a></p>
        <p><a>{t("menu.something")}</a></p>
      </div>
    const renderMenuColumn4 = ()=>
      <div class="col-4">
        <p>{t('language')}</p>
        <select v-model={createI18n.global.locale.value} style="height: 50px;width: 200px">
          {language.value.map((locale)=>(
              <option value={locale.value}>
                {t(locale.name) }
              </option>
              ))}
        </select>
      </div>
    return () =>
        <div class="menu-wrapper">
          {renderSlogan()}
          <section class="box-wrapper">
            {renderMenuColumn1()}
            {renderMenuColumn23()}
            {renderMenuColumn23()}
            {renderMenuColumn4()}
          </section>
        </div>
  },
}

</script>

<style lang="scss" scoped>
.menu-wrapper{
  color: #ffffff;
  .slogan {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;

    .logo {
      font-weight: 800;
      font-size: 40px;
      color: crimson;
      font-family: Avenir, Helvetica, Arial, sans-serif;
    }
  }
  .box-wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 20px;
    grid-gap: 40px;
    font-size: 18px;
    .col-1,.col-2_3{
      p{
        margin: 0 0 10px;
        height: 28px;
        a{
          text-decoration: none;
          color: unset;
          &:hover{
            background-color: crimson;
            margin-left: -10px !important;
            padding: 4px 10px;
            cursor: pointer;
          }
        }
      }
      .active{
        a{
          background-color: white;
          margin-left: -10px !important;
          padding: 4px 10px;
          color: black;
        }
      }
    }
  }
}
</style>