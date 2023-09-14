import { defineStore } from 'pinia'
import {signout} from '../Services/UserInfo'

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
        
    },
    actions:{
      loginuserdata(responseData){
        //console.log('ResponseData:',responseData);
       console.log('Id=',responseData.FirstName)
        userModel.Id=responseData.Id
        userModel.FirstName = responseData.FirstName
        userModel.LastName=responseData.LastName
        userModel.Email=responseData.Email
        userModel.Phone=responseData.Phone
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
            signout()
        }

    }
  })