import { createRouter, createWebHistory } from 'vue-router'
import { userUserStore } from '../stores/StoreFile'

import NotFound from '../views/NotFound.vue'
import HomeView from '../views/HomeView.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'

import AdminPage from '../views/AdminPage.vue'
import DashBoard from '../components/Admin/DashBoard.vue'
import AppointmentPage from '../components/Admin/AppointmentPage.vue'
import SpecialityPage from '../components/Admin/SpecialityPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      /* meta: {
        auth: true,
      } */
    },
    {
      path: '/LogIn',
      name: 'LogIn',
      component: LogIn,
      meta: {
        auth: false,
      }
    }
    ,
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp,
      meta: {
        auth: false,
      }
    }
    ,
    {
      path: '/AdminPage',
      name: 'AdminPage',
      component: AdminPage,
      meta: {
        auth: true,
      },
      
      children:[
        {
          path: '/AdminPage/DashBoard',
          name: 'DashBoard',
          component: DashBoard,
          //meta:{Role:['Admin','Patient']}
        },
        {
          path: '/AdminPage/AppointmentPage',
          name: 'AppointmentPage',
          component: AppointmentPage,
        },
        {
          path: '/AdminPage/SpecialityPage',
          name: 'SpecialityPage',
          component: SpecialityPage,
        },
        
       
      ]
    }
    
    ,
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
    
  ]
})
router.beforeEach(async (to) => {
  const userStore = userUserStore();

  if(to.meta.auth && !userStore.isAuthenticated) {

    return { name: 'LogIn' };
  }
 /*  if(Array.isArray(to.meta.role) && to.meta.role.length > 0) {
    if(!to.meta.role.includes(userStore.userRole)) {
      return { name: 'noauth' };
    }
  } */

 /*  let allowed = false;
    to.meta.role.forEach((r) => {
      allowed = userStore.userRole.includes(r)
    })

    if(!allowed) {
      return { name: 'noauth' };
    } */



});
export default router
