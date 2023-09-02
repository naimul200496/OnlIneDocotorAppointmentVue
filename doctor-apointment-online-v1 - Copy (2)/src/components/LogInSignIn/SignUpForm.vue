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
               
                <!-- Register Form -->
                <form @submit="onSubmitReg">
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
import { RouterLink } from 'vue-router'
//import ServicesApi from '../../Services/ConfigeFile.js'
import { useFirebaseAuth,useFirestore} from 'vuefire'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore";
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
	  error_message:null,
	  error_status:false,
    }
  },
  methods: {
    async onSubmitReg(event) {
      console.log('event', event)
      if (!event.preventDefault()) {
        const db = useFirestore() // Connect Firstore Database
		    const auth = useFirebaseAuth() // Get userAuthentication
        
       /*  var RegistrationInfo = {
          FirstName: this.form.RegFirstName,
          LastName: this.form.RegLastName,
          Email: this.form.Regemail,
          Phone: this.form.RegPhone,
          Password: this.form.RegPassword,
          ImageUrl: '',
          IsActive: true
        } */

        
        await createUserWithEmailAndPassword(auth, this.form.Regemail, this.form.RegPassword)
        .then((userCredential) => {
          // After Creation The user
          const user = userCredential.user;
          console.log('User',user)
          console.log('UserId',user.uid)
          setDoc(doc(db, 'users', user.uid), {
            FirstName: this.form.RegFirstName,
            LastName: this.form.RegLastName,
            isactive: true,
            phone:this.form.RegPhone,
            usertype:'admin',
          });
          {this.$router.push({ name: 'LogIn' })} 
        })
          .catch((error) => {
           
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
          });

          




     /*   await ServicesApi.AddUser(RegistrationInfo)
          .then((response) => {
			if (response.data==='Added Successfully' && response.status===200)
           {this.$router.push({ name: 'LogIn' })} 
            //console.log('Reg', response)
          })
          .catch((error) => {
			this.error_status = true
			this.error_message = `Error Message Name:${error.name} [Message:${error.message}]`
			//console.log(this.error_message)
           // console.log(error)
          }) */
		  
      }
    }
  }
 
}
</script>
