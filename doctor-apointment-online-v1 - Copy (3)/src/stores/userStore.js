import { defineStore } from 'pinia'
import { registerUser, updateUserProfile, addUserData,loginUser,getUserData,signout } from '../Services/userFirebase'

const userModel = {
  uid: '',
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  isactive: false,
  usertytpe: '',
  isAuthenticated: false,
  displayName: '',
  imageurl:'',
}

export const userUserStore = defineStore('user', {
  state() {
    return {
      user: null
    }
  },
  getters: {
    isAuthenticated() {
      if (!this.user) {
        return false
      } else {
        return true
      }
    },
    userInfo(){
        if(this.user) {
            return this.user
          }
          else {
            return null
          }
        
    }
  },
  actions: {
       async login(loginemail,password){
        const user_t= await loginUser(loginemail,password)
        
        console.log(user_t)
        if(user_t != null) {
            const userData = await getUserData(user_t.uid);
  
            this.user = { 
                displayName:user_t.displayName,
                imageurl:'photoURL',
                email: loginemail, 
              ...userData,
            };
            
            return true;
          } else {
            this.user = null;
            return false;
          }
       
    },
    async resgister(user) {
      console.log('User Register', user)
      let r_User = await registerUser(user.email, user.password)

      if (r_User) {
        await updateUserProfile('Patient', '')
        console.log(r_User)
        const userData = {
          firstname: user.firstname,
          lastname: user.lastname,
          isactive: user.isactive,
          usertytpe: user.usertytpe,
          uid: r_User.uid
        }
        console.log('Useddataaa:', userData)
        await addUserData(userData)
      }
    }
    ,
    logOutUser(){
        this.userModel=null
        this.user=null
        signout()
    }
    
  }
})
