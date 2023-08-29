<template>
    	<!-- Page Content -->
			<div class="content" style="min-height: 55vh;background-color: #fff;">
				<div class="container-fluid">
					
					<div class="row">
						<div class="col-md-8 offset-md-2">
							
							<!-- Login Tab Content -->
							<div class="account-content">
								<div class="row align-items-center justify-content-center">
									<div class="col-md-7 col-lg-6 login-left">
										<img src="img/login-banner.png" class="img-fluid" alt="Doccure Login">	
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
												<input v-model.trim="form.loginemail" type="email" class="form-control floating" required>
												<label class="focus-label">Email</label>
											</div>
											<div class="form-group form-focus">
												<input v-model.trim="form.loginPasswd" type="password" class="form-control floating" required>
												<label class="focus-label">Password</label>
											</div>
											<div class="text-right">
												<a class="forgot-link" href="forgot-password.html">Forgot Password ?</a>
											</div>
											<button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
											<div class="login-or">
												<span class="or-line"></span>
												<span class="span-or">or</span>
											</div>
										
											<div class="text-center dont-have">Don’t have an account? 
                                            <RouterLink :to="{name:'SignUp'}" >  <a href="#">Register</a></RouterLink> </div>
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

import { RouterLink } from "vue-router";
import ServicesApi from '../../Services/ConfigeFile.js'
import { userUserStore } from '../../stores/StoreFile';
//import axios from "axios";

//const API_URL="http://localhost:5036/api/OnlineAppointmentAPI/";

export default {
    name:'LoginForm',
	//props:['user'],
 data() {
    return {
      form: {
        loginemail: 'naimul.cse.bd@gmail.com',
        loginPasswd:'123'
      },
	  error:''
    };
  },
  components:{
	RouterLink
  },
  setup() {
      const userStore = userUserStore();
      return { userStore };
    }
,
  methods: {
    async onSubmit(event) {
      if (!event.preventDefault()) {
		
		  // this.userStore.loginuser(this.form.loginemail, this.form.loginPasswd);
           ServicesApi.checkUserExist(this.form.loginemail,this.form.loginPasswd)
		   .then((response)=>{
			if(response.data.length>0)
			{
				this.userStore.loginuserdata(response.data)
			//console.log('Datasa',response.data)
			this.$router.push({ name: 'DashBoard' });
			}
			else{
				this.error='Invalid UserName/Password!'
			}
			
		  })
		  .catch((error)=>{
			console.log(error)
		  })

		  // this.userUserStore.

		 /*  axios.post('http://localhost:8070/DoctorOnlineApi/CheckUserExist',{params: {
          email: this.form.loginemail,
          Password: this.form.loginPasswd,
		}

        })
		  .then((response)=>{
			console.log('Datasa',response)
		  })
		  .catch((error)=>{
			console.log(error)
		  }) */
		/*   axios.get('http://localhost:8070/api/DoctorOnlineApi',data,
		  headers:{'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',})
		  .then(res => console.log(res))
          .catch(err=>console.log(err)); */
		/* onMounted(()=>{ */
			/* ServicesApi.getWeatherForecast()
			.then((response)=>{
				console.log('dattt:',response.data)
			})
			.catch((error)=>{
				console.log(error)
			}) */
		//})
	
        //console.log(this.form.loginemail);
        alert("Loggin Successfully. "+this.form.loginemail);
	
        //this.$router.push({ name: 'DashBoard' });
      }
    },
  },
};
</script>

<style src="../../assets/main.css"></style>