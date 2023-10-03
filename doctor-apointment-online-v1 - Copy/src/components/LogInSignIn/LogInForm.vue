<template>
  <!-- Page Content -->
  <br>
  <br>
  <br>
  
  <div class="content" style="min-height: 55vh; background-color: #fff">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <!-- Login Tab Content -->
          <div class="account-content">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-7 col-lg-6 login-left">
                <img src="img/login-banner.png" class="img-fluid" alt="Doccure Login" />
              </div>
              <div class="col-md-12 col-lg-6 login-right">
                <div class="login-header">
                  <h3>Login <span>Doccure</span></h3>
                </div>
                <form @submit.prevent="onSubmit">
                  <div v-if="error" class="alert alert-danger" role="alert">
                    {{ error }}
                  </div>
                  <div class="form-group form-focus">
                    <input
                      v-model.trim="form.loginemail"
                      type="email"
                      class="form-control floating"
                      required
                    />
                    <label class="focus-label">Email</label>
                  </div>
                  <div class="form-group form-focus">
                    <input
                      v-model.trim="form.loginPasswd"
                      type="password"
                      class="form-control floating"
                      required
                    />
                    <label class="focus-label">Password</label>
                  </div>
                  <div class="text-right">

                    <RouterLink :to="{ name: 'ForgotPassword' }">
                      <a class="forgot-link" href="#">Forgot Password ?</a>
                    </RouterLink>
                  </div>
                 <!--  <div class="text-right">
					           <RouterLink :to="{ name: 'ForgotPassword' }">
                      <a class="forgot-link" href="#">Forgot Password ?</a>
                    </RouterLink>
                  </div> -->
                  <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">
                    Login
                  </button>
                  <div class="login-or">
                    <span class="or-line"></span>
                    <span class="span-or">or</span>
                  </div>

                  <div class="text-center dont-have">
                    Don’t have an account?
                    <RouterLink :to="{ name: 'SignUp' }"> <a href="#">Register</a></RouterLink>
                  </div>
				  
                </form>
              </div>
            </div>
          </div>
          <!-- /Login Tab Content -->
        </div>
      </div>
    </div>
  </div>
  <!-- /Page Content -->
</template>
<script>
import { userUserStore } from '../../stores/userStore'
import { RouterLink } from 'vue-router'
//import {getuserInfo,getCurrentUserInfo} from '../../Services/UserInfo.js'

//import { useDocument,useFirestore} from 'vuefire'
//import { signInWithEmailAndPassword } from 'firebase/auth'

//import { collection, doc} from 'firebase/firestore'
//import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
//import { doc, getDoc } from "firebase/firestore";
//import ServicesApi from '../../Services/ConfigeFile.js'
//import { userUserStore } from '../../stores/StoreFile'



export default {
  name: 'LoginForm',
  //props:['user'],
  data() {
    return {
      form: {
        loginemail: 'naimul.cse.bd@gmail.com',
        loginPasswd: '123456'
      },
      error: '',
	    userUid:'',
      test1:null,
      isactiveuser:false
    }
  },
  components: {
    RouterLink
  },
  setup() {
    const userStore = userUserStore()
   
    return { userStore}
  },
  methods: {
    async onSubmit(event) {
      if (!event.preventDefault()) {
        const success= await this.userStore.login(this.form.loginemail,this.form.loginPasswd)
        console.log('sucess',success)
        if(success){
          const data = this.userStore.userInfo
          console.log('dddd',data.usertytpe)
          if(data.usertytpe=='Patient'){
           
            this.$router.push({ name: 'PatientDashboard' });
          }
          if(data.usertytpe=='Admin'){
            this.$router.push({ name: 'DashBoard' });
          }


           console.log(data)
        }

       // console.log('getuserInfo',await getuserInfo(this.form.loginemail,this.form.loginPasswd))
       
/* 
       if(getuserInfo(this.form.loginemail,this.form.loginPasswd)){
        //console.log('Connected')
          let getcurrentuser= await getCurrentUserInfo()
          //console.log('Userdatdddd',getcurrentuser)
          if(Object.keys(getcurrentuser).length> 0 ){
          //console.log('ssss',getcurrentuser.usertype)
          this.userStore.loginuserdata(getcurrentuser)

          if(getcurrentuser.usertype==='admin'){
                this.$router.push({ name: 'DashBoard' });
          }
          if(getcurrentuser.usertype==='patient'){
            this.$router.push({ name: 'PateintView' });
          }
        }
        else{this.error= 'Something went wrong. Please try agian'}
     }
     else{this.error= 'You are not authorized to access this application'}  */
        
    
      }
    }
  }
}
</script>

<style src="../../assets/main.css"></style>
