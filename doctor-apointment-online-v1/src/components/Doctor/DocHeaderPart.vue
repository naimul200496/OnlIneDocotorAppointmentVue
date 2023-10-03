<template>
    <!-- Header -->
    <div class="header">
      <!-- Logo -->
      <div class="header-left">
        <a href="#" class="logo">
          <img src="/img/logo.png" alt="Logo" />
        </a>
       </div>
      <!-- Header Right Menu -->
      <ul class="nav user-menu">
        <li class="nav-item dropdown has-arrow">
          <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
            <span class="user-img"
              ><img
                class="rounded-circle"
                src="/img/user_defualt_pic.png"
                width="31"
                :alt=getUserInfo.lastname
            /></span>
          </a>
          <div class="dropdown-menu">
            <div class="user-header">
              <div class="avatar avatar-sm">
                <img
                  src="/img/user_defualt_pic.png"
                  alt="User Image"
                  class="avatar-img rounded-circle"
                />
              </div>
              <div class="user-text">
                <h6>{{ getUserInfo.firstname }} {{ getUserInfo.lastname }} </h6>
                <p class="text-muted mb-0">{{getUserInfo.usertytpe}}</p>
              </div>
            </div>
            <a class="dropdown-item" href="#profile">My Profile</a>
            <a class="dropdown-item" href="#">Settings</a>
            <a class="dropdown-item" href="#" @click="onLogoutClicked">Logout</a>
          </div>
        </li>
        <!-- /User Menu -->
      </ul>
      <!-- /Header Right Menu -->
    </div>
    <!-- /Header -->
  </template>
  <script>
  import { userUserStore } from '../../stores/userStore'
  
  export default {
    name: 'DocHeaderPart',
     
    setup() {
      const userStore = userUserStore()
      return { userStore }
    },
    computed:{
      getUserInfo(){
       
        return  this.userStore.userInfo
        }
  },
  
    methods:{
      onLogoutClicked(){
          this.userStore.logOutUser();
      }
    },
  }
  </script>
  