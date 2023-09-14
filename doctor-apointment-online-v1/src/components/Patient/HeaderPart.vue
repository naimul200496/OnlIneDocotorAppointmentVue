<template>
        <!-- Header -->
			
				
					<div class="navbar-header">
						<a id="mobile_btn" href="javascript:void(0);">
							<span class="bar-icon">
								<span></span>
								<span></span>
								<span></span>
							</span>
						</a>
						<a href="#" class="navbar-brand logo">
							<img src="assets/img/logo.png" class="img-fluid" alt="Logo">
						</a>
					</div>
					<div class="main-menu-wrapper">
						<div class="menu-header">
							<a href="#" class="menu-logo">
								<img src="assets/img/logo.png" class="img-fluid" alt="Logo">
							</a>
							<a id="menu_close" class="menu-close" href="javascript:void(0);">
								<i class="fas fa-times"></i>
							</a>
						</div>
						<ul class="main-nav">
							<li>
								<a href="#">Dashboard</a>
							</li>
								
							<li class="has-submenu active">
								<a href="#">Patients <i class="fa-chevron-down"></i></a>
								<ul class="submenu">
									<li> <RouterLink :to="{ name: 'SearchDoctor' }"><a href="#">Search Doctor</a></RouterLink></li>
									<li><a href="#">Doctor Profile</a></li>
									<li><a href="#"><RouterLink :to="{ name: 'BookingPage' }">Booking</RouterLink></a></li>
									<li><a href="#">Checkout</a></li>
									<li><a href="#">Booking Success</a></li>
									<li class="active"><a href="#">Patient Dashboard</a></li>
									<li><a href="#">Favourites</a></li>
									<li><a href="#">Chat</a></li>
									<li><a href="#">Profile Settings</a></li>
									<li><a href="#">Change Password</a></li>
								</ul>
							</li>	
							
						</ul>
					</div>		 
					<ul class="nav header-navbar-rht">
						<li class="nav-item contact-item">
							<div class="header-contact-img">
								<i class="far fa-hospital"></i>							
							</div>
							<div class="header-contact-detail">
								<p class="contact-header">Contact</p>
								<p class="contact-info-header"> +1 xxx xxx xxxx</p>
							</div>
						</li>
						
						<!-- User Menu -->
						<li class="nav-item dropdown has-arrow logged-item">
							<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
								<span class="user-img">
									<img class="rounded-circle"
                                    :src=getUserInfo.ImageUrl
                                    width="31"
                                    :alt=getUserInfo.LastName>
								</span>
							</a>
							<div class="dropdown-menu dropdown-menu-right">
								<div class="user-header">
									<div class="avatar avatar-sm">
										<img class="rounded-circle"
                                        :src=getUserInfo.ImageUrl
                                        width="31"
                                        :alt=getUserInfo.LastName>
									</div>
									<div class="user-text">
										<h6>{{ getUserInfo.firstname }} {{ getUserInfo.LastName }}</h6>
										<p class="text-muted mb-0">Patient</p>
									</div>
								</div>
								<a class="dropdown-item" href="#">Profile Settings</a>
								<a class="dropdown-item" href="#" @click="onLogoutClicked">Logout</a>
							</div>
						</li>
						<!-- /User Menu -->
						
					</ul>
			
			
			<!-- /Header -->
            <!-- Breadcrumb -->
		<!-- 	<div class="breadcrumb-bar">
				<div class="container-fluid">
					<div class="row align-items-center">
						<div class="col-md-12 col-12">
							<nav aria-label="breadcrumb" class="page-breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="#">Home</a></li>
									<li class="breadcrumb-item active" aria-current="page">Dashboard</li>
								</ol>
							</nav>
							<h2 class="breadcrumb-title">Dashboard</h2>
						</div>
					</div>
				</div>
			</div> -->
			<!-- /Breadcrumb -->
</template>
<script>
import { userUserStore } from '../../stores/userStore'
import { RouterLink } from 'vue-router'
export default {
  name: 'HeaderPart',
   components:{
    RouterLink,
   },
  setup() {
    const userStore = userUserStore()
    return { userStore }
  },
  computed:{
    getUserInfo(){
      //console.log('User',this.userStore.userInfo())
     //var u= this.userStore.userInfo()
     //console.log(u)
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