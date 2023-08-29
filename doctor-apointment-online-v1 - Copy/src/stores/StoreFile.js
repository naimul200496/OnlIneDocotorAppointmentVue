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
  };
  export const userUserStore= defineStore('user',{
    state(){
        return{
            user:null,
        }
    },
    getters:{
        isAuthenticated(){
            if(!this.user){
                return false
            }
            return this.user.isAuthenticated && this.user.Email
            
        },
        userInfo(){
          if(this.user) {
            return this.user;
          }
          else {
            return null;
          }
        }
        
        
        /* ,
        fullname(){
            if(this.user) {
                return `${this.user.firstName} ${this.user.lastName}`;
              } else {
                return 'Anonymous';
              }
        },
        title() {
            if(this.user) {
              return `${this.user.title}`;
            } else {
              return '';
            }
          }, */
    },
    actions:{
      loginuserdata(responseData){
        //console.log('ResponseData:',responseData);
       console.log('Id=',responseData[0].FirstName)
       userModel.Id=responseData[0].Id
        userModel.FirstName = responseData[0].FirstName
        userModel.LastName=responseData[0].LastName
        userModel.Email=responseData[0].Email
        userModel.Phone=responseData[0].Phone
        //userModel.ImageUrl=responseData[0].ImageUrl 
        userModel.ImageUrl=`/img/profiles/avatar-01.jpg`
        userModel.isAuthenticated=true
        this.user = userModel;
        //console.log('UserModel:',this.user);
       
      
      },
        loginuser(email,password){
            console.log('Email',email)
            console.log('Pass',password)
            this.user = userModel;
            console.log('User',this.user)
            return true;
        }
        ,
        logOutUser(){
          this.userModel=null
            this.user=null
        }

    }
  })