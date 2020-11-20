<template>
  <div id="app2">
    <side-bar title="HOME" short-title="S" background-color="vue">
       <template slot="links">
         <sidebar-link to="/cchp" :name="$t('CCHP')"  icon="tim-icons icon-single-copy-04" />
         <span><vue-tree-navigation :items="menu1" /></span>
         <sidebar-link to="/electric"  :name="$t('ELECTRIC')"  icon="tim-icons icon-chart-bar-32"/>
         <span><vue-tree-navigation :items="menu2" /></span>
         <sidebar-link to="/scheduling" :name="$t('SCHEDULING')" icon="tim-icons icon-chart-pie-36"/>
         <span><vue-tree-navigation :items="menu3" /></span>
         <sidebar-link to="/economics"  :name="$t('ECONOMICS')" icon="tim-icons icon-coins"/>
         <span><vue-tree-navigation :items="menu4" /></span>
         <sidebar-link to="/profile" :name="$t('sidebar.userProfile')" icon="tim-icons icon-single-02"/>
         <!--<sidebar-link to="/table-list" :name="$t('sidebar.tableList')" icon="tim-icons icon-puzzle-10"/>-->
       </template>
    </side-bar>
    
  <div class="main-panel">
    <top-navbar></top-navbar>
    <dashboard-content @click.native="toggleSidebar">
    </dashboard-content>
    <content-footer></content-footer>
  </div>
  </div>
</template>
<script src="https://unpkg.com/vue-tree-navigation@4.0.0/dist/vue-tree-navigation.js"></script>
<script> 
import Vue from 'vue'
import BootstrapSidebar from 'vue-bootstrap-sidebar'
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import { SidebarMenu } from 'vue-sidebar-menu'
import VueTreeNavigation from 'vue-tree-navigation';
import SidebarLink from '../../components/SidebarPlugin/SidebarLink.vue';
Vue.use(VueTreeNavigation)
export default {
  components: {
    BootstrapSidebar,
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
    SidebarLink
  },
  data() {
     return {
        menu1: [
              {
                path: 'cchp',
                children: [
                  { name: "CCHP 소개", path: 'cchp_info' },
                  { name: "CCHP 적용사례", path: 'cchp_ex' },
                  { name: "CCHP 관련뉴스", path: 'cchp_news' }
                ]
              }
            ],
        menu2:[
              {
                path: 'electric',
                children: [
                  { name: "전력 사용량 패턴 분석", path: 'elec_pattern' },
                  { name: "예측 전력 사용량 비교", path: 'elec_compare' },
                  { name: "입력 변수 데이터 통계", path: 'elec_inputdata' },
                  { name: "교육용 요금제", path: 'elec_payment' }
                ]
              }
            ],
        menu3:[
               {
                path: "scheduling",
                children: [
                  { name: "전력 사용량 예측", path: "sch_prediction" },
                  { name: "CCHP 스케줄링", path: "sch_cchp" },
                  { name: "CCHP 운영 시간표", path: "sch_time" },
                  { name: "입력 변수 데이터 통계", path: "sch_inputdata" }
                ]
              },
          ],
        menu4: [
                {
                path: "economics",
                children: [
                  { name: "경제성 분석", path: 'eco_analysis' },
                  { name: "다른 요금제와 비교", path: "eco_compare" },
                  { name: "입력 변수 데이터 통계", path: "eco_inputdata" }
                ]
              },
           ],
        };
    },
    methods: {
     toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  },
    disableHover: {
      type: Boolean,
      default: false
  }
 };
</script>
<style lang="scss">
  side-bar{
    font-size: 14px;
  }
  .NavigationToggle {
  position: relative;
  top:  -37px;
  left: 165px;
  padding:  5px 5px 5px 3px;
  cursor:   pointer;

  &__icon {
    display:      inline-block;
    padding:      3px;
    border:       solid #000;
    border-width: 0 2px 2px 0;
    transform:    rotate(45deg);
  }

   &__icon--closed {
    transform: rotate(-45deg);
    }
  }
  .NavigationLevel {
   top:  -100px;
   padding-top: -100px;
   padding-bottom: -400px;
   &--closed {
      ul {
        display: none;
      }
    }
  }
  .NavigationLevel__children {
    padding-top:  -100px;
    padding-left: 10px;
    //font-family: 'Helvetica Neue', Arial, sans-serif;
  }

  .NavigationLevel__parent {
    line-height:100%;
    //padding-top:-100px;
    font-weight:    600;
   // padding-bottom: -40px;
  }

  .NavigationItem {
   //line-height:100%;
   display: inline-block;
   padding-left: 10px;
   padding-bottom: 5px;
    span {
     cursor: pointer;
    }
    a {
        font-family:  'Courier, monospace';
        text-align: center;
        //padding-top: -300px;
        font-size: 13px;
        font-weight: 600;
        color: #fff;
        text-decoration: none;

    }
    a:hover{
        color:#12f771;
    }

  }
  .TreeNavigation {
     display: inline-block;
     margin:  0px;
   ul {
     padding:         -100px;
     margin:          0px;
     list-style-type: none;
     color: #fff;
   }

   li {
    color: #fff;
    padding-left: 20px;
   }
 }
  .NavigationItem--active {
    top: -100px;
    color: #000508;
  }

  .NavigationToggle__icon {
    border-color: #12f771;
  }
  .NavigationToggle__icon--closed {
   //border-color: #155dc9;
    border-color:#fff;
  }
</style>
