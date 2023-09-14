/* import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.js' 
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


 */

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { VueFire,VueFireAuth,VueFireFirestoreOptionsAPI } from 'vuefire'
import { firebaseApp } from './Services/FireBase'





const app = createApp(App)
app.use(VueFire,{
    firebaseApp
    ,modules:[VueFireAuth(),VueFireFirestoreOptionsAPI()],
})

app.use(createPinia())
app.use(router)


app.mount('#app')
