import { defineStore } from 'pinia'

const userModel = {
    Id: '',
    FirstName:'',
    LastName:'',
    Email:'',
    Password:'',
    Phone:'',
    ImageUrl:'',
    isAuthenticated: false,
    DisplayName:''
  };

export const useUserStore= defineStore('user',{
state(){
    return{
        user:null
    }
},
getters:{
    isAuthenticated(){
        if(!this.user)
        {
            return false
        }
        else{return true}
    }
},
actions:{
    async login(email,password){
        const user= await loginuser(email,password)
       
    }
}

})