<template>
  <!-- Page Content -->
  <div class="content" style="min-height: 55vh; background-color: #fff">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <!-- Register Content -->
          <div class="account-content">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-7 col-lg-6 login-left">
                <img src="img/login-banner.png" class="img-fluid" alt="Doccure Register" />
              </div>
              <div class="col-md-12 col-lg-6 login-right">
                <div class="login-header">
                  <h3>Patient Register</h3>
                </div>
               
                <!-- Register Form  @submit="onSubmitReg" -->
                <form @submit.prevent="onSubmitReg">
                  <div v-if="error" class="alert alert-danger" role="alert">
                    {{ error }}
                  </div>
                  <div class="form-group form-focus">
                    <input
                      v-model.trim="form.RegFirstName"
                      type="text"
                      class="form-control floating"
                      required
                    />
                    <label class="focus-label">First Name</label>
                  </div>
                  <div class="form-group form-focus">
                    <input
                      v-model.trim="form.RegLastName"
                      type="text"
                      class="form-control floating"
                      required
                    />
                    <label class="focus-label">Last Name </label>
                  </div>
                  <div class="form-group form-focus">
                    <input
                      v-model.trim="form.Regemail"
                      type="email"
                      class="form-control floating"
                      required
                    />
                    <label class="focus-label">Email </label>
                  </div>
                  <div class="form-group form-focus">
                    <input
                      v-model.trim="form.RegPhone"
                      type="text"
                      class="form-control floating"
                      required
                    />
                    <label class="focus-label">Mobile Number</label>
                  </div>
                  <div class="form-group form-focus">
                    <input
                      v-model.trim="form.RegPassword"
                      type="password"
                      class="form-control floating"
                      required
                    />
                    <label class="focus-label">Password</label>
                  </div>
                  <div class="form-group form-focus">
                    <input
                      v-model.trim="form.RegRePassword"
                      type="password"
                      class="form-control floating"
                      required
                    />
                    <label class="focus-label">ReType Password</label>
                  </div>
                  <div class="text-right">
                    <RouterLink :to="{ name: 'LogIn' }">
                      <a class="forgot-link" href="#">Already have an account?</a></RouterLink
                    >
                  </div>
                  <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">
                    Signup
                  </button>
                  <!-- <div class="login-or">
												<span class="or-line"></span>
												<span class="span-or"></span>
											</div> -->
                </form>
                <!-- /Register Form -->
              </div>
            </div>
          </div>
          <!-- /Register Content -->
        </div>
      </div>
    </div>
  </div>
  <!-- /Page Content -->
</template>
<script>

//import {CreateUser} from '../../Services/UserInfo.js'
import {userUserStore} from '../../stores/userStore';
import { RouterLink } from 'vue-router'
export default {
  name: 'SignUpForm',
  components: {
    RouterLink
  },
  data() {
    return {
      form: {
        RegFirstName: null,
        RegLastName: null,
        Regemail: null,
        RegPhone: null,
        RegPassword: null,
        RegRePassword: null
      },
      error:null,
	    error_status:false,
    }
  },
 
  methods: {
    async onSubmitReg(event) {
      
      if (!event.preventDefault()) {

        await this.userStore.resgister({
          firstname: this.form.RegFirstName, 
          lastname: this.form.RegLastName,
          email: this.form.Regemail,
          password: this.form.RegPassword,
          isactive: true,
          usertytpe:'Patient',
        });
       // {this.$router.push({ name: 'LogIn' })} 
        this.$router.push({name: 'LogIn'});
      }
    }
  },
setup(){
    const userStore= userUserStore();
    return  { userStore };
  },
 
}
</script>
