import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";
/*import CCHP_info from "@/pages/CCHP/CCHP_info.vue";
import CCHP_ex from "@/pages/CCHP/CCHP_ex.vue";
import CCHP_news from "@/pages/CCHP/CCHP_.vue";*/
// Admin pages
const CCHP_info = () => import(/* webpackChunkName: "dashboard" */"@/pages/CCHP/CCHP_info.vue");
const CCHP_ex = () => import(/* webpackChunkName: "dashboard" */"@/pages/CCHP/CCHP_ex.vue");
const CCHP_news = () => import(/* webpackChunkName: "dashboard" */"@/pages/CCHP/CCHP_news.vue");
const Home = () => import(/* webpackChunkName: "dashboard" */"@/pages/Home.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const scheduling = () => import(/* webpackChunkName: "common" */"@/pages/scheduling.vue");
const economics = () => import(/* webpackChunkName: "common" */ "@/pages/economics.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");
const Elec_pattern = () => import(/* webpackChunkName: "common" */ "@/pages/Elec_pattern.vue");
const Elec_inputdata = () => import(/* webpackChunkName: "common" */ "@/pages/Elec_inputdata.vue");
const Elec_compare = () => import(/* webpackChunkName: "common" */ "@/pages/Elec_compare.vue");
const Elec_payment = () => import(/* webpackChunkName: "common" */ "@/pages/Elec_payment.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/home",
    children: [
      {
        path: '/',
        name: "Home",
        component: Home
      },
      {
        path: "cchp",
        name: 'CCHP',
        component: CCHP_info,
        children:[
          {
            path: "cchp_info",
            name: 'CCHP_info',
            component: CCHP_info,
          },
          {
            path: 'cchp_ex',
            name: 'CCHP_ex',
            component: CCHP_ex
          },
          {
            path: 'cchp_news',
            name: "CCHP_news",
            component: CCHP_news
          }
        ],
      },
     {
        path: 'electric',
        name: 'electric',
        component: Elec_pattern,
        //component: Elec_compare,
        children:[
          {
            path: 'elec_pattern',
            name: "elec_pattern",
            component: Elec_pattern
          },
          {
            path: 'elec_inputdata',
            name: "elec_inputdata",
            component: Elec_inputdata
          },
          {
            path: 'elec_compare',
            name: "elec_compare",
            component: Elec_compare
          },
          {
            path: 'elec_payment',
            name: "elec_payment",
            component: Elec_payment
          }
        ]
      },
      /*{
        path: "/CCHP",
        name: "CCHP",
        component: CCHP,
      },
      {json
        path: "/CCHP_ex",
        name: "CCHP_ex",
        component: CCHP_ex
      },
      {
        path: "/CCHP_news",
        name: "CCHP_news",
        component: CCHP_news
      },*/
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "scheduling",
        name: "scheduling",
        component: scheduling
      },
      {
        path: "economics",
        name: "economics",
        component: economics
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      },
      /*{
        path: 'electric',
        name: "elec_compare",
        component: Elec_compare
      }
      {
        path: "elec_pattern",
        name: "Electric_pattern",
        component: Elec_pattern
      }*/
    ]
  },
 { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
