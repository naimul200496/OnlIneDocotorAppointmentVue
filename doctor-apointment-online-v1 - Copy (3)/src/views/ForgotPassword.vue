<template>

    	<!-- Main Wrapper -->
        <div class="main-wrapper login-body">
            <div class="login-wrapper">
            	<div class="container">
                	<div class="loginbox">
                    	<div class="login-left">
							<img class="img-fluid" src="assets/img/logo-white.png" alt="Logo">
                        </div>
                        <div class="login-right">
							<div class="login-right-wrap">
								<h1>Forgot Password?</h1>
								<p class="account-subtitle">Enter your email to get a password reset link</p>
								
								<!-- Form -->
								<form  @submit.prevent="OnResetPassword">
									<div class="form-group">
										<input class="form-control" v-model.trim="forgot_email" type="email" placeholder="Email" required>
									</div>
									<div class="form-group mb-0">
										<button class="btn btn-primary btn-block" type="submit">Reset Password</button>
									</div>
								</form>
								<!-- /Form -->
								
								<div class="text-center dont-have">Remember your password? 
                                    <RouterLink :to="{ name: 'LogIn' }">   <a href="#">Login</a>
                                        </RouterLink>
                                    
                                    </div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<!-- /Main Wrapper -->
</template>
<script>

import { RouterLink } from 'vue-router'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default {
    name:'ForgotPassword',
   
    components:{
        RouterLink,
    },
    methods:{
        async OnResetPassword(event){

            if (!event.preventDefault()) {
                console.log('Email',this.forgot_email)
                const auth = getAuth() // Get userAuthentication
              await  sendPasswordResetEmail(auth, this.forgot_email)
                    .then(() => {
                        {this.$router.push({ name: 'LogIn' })} 
                      //console.log('Sent Email')
                    })
                    .catch((error) => {
                        //const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log('Erro:r',errorMessage)
                        // ..
                    });
            }

        }
    }
}

</script>