import { createRouter, createWebHistory } from 'vue-router'
import { userUserStore } from '../stores/userStore'

import NotFound from '../views/NotFound.vue'
import HomeView from '../views/HomeView.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import ForgotPassword from '../views/ForgotPassword.vue'

import AdminPage from '../views/AdminPage.vue'
import DashBoard from '../components/Admin/DashBoard.vue'
import AppointmentPage from '../components/Admin/AppointmentPage.vue'
import SpecialityPage from '../components/Admin/SpecialityPage.vue'
import DoctorList from '../components/Admin/DoctorList.vue'
import AddDoctor from '../components/Admin/AddDoctor.vue'

import PateintView from '../views/PatientView.vue'
import SearchDoctor from '../components/Patient/SearchDoctor.vue'
import BookingPage from '../components/Patient/BookingPage.vue'


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
      path: '/ForgotPassword',
      name: 'ForgotPassword',
      component: ForgotPassword,
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
        {
          path: '/AdminPage/DoctorList',
          name: 'DoctorList',
          component: DoctorList,
        },
        
        {
          path: '/AdminPage/AddDoctor',
          name: 'AddDoctor',
          component: AddDoctor,
        },
        
       
      ]
    },
    // Pateint Page
    {
      path: '/PateintView',
      name: 'PateintView',
      component: PateintView,
      meta: {
        auth: true,
      },
      children:[
        { path:'/PateintView/SearchDoctor',name:'SearchDoctor',component:SearchDoctor},
        { path:'/PateintView/BookingPage',name:'BookingPage',component:BookingPage},
       
      ],
    },
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
