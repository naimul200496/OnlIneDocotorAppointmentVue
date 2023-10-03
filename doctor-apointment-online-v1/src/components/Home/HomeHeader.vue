<template>
    <!-- Header -->
			<header class="header">
				<nav class="navbar navbar-expand-lg header-nav">
					<div class="navbar-header">
					
						<a href="#" class="navbar-brand logo">
							<img src="/img/logo.png" class="img-fluid" alt="Logo">
						</a>
					</div>
					<div class="main-menu-wrapper">
						
						<ul class="main-nav">
							<li class="active">
							<RouterLink to="/"><a href="#">Home</a></RouterLink>	
							</li>
							<li class="login-link">
								<a href="#"><RouterLink to='/LogIn'>Login / Signup</RouterLink></a>
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
								<p class="contact-info-header"> +x xxx xxx xxxx</p>
							</div>
						</li>
						<li class="nav-item">
							<a class="nav-link header-login" href="#"><RouterLink to='/LogIn'>Login / Signup</RouterLink> </a>
						</li>
					</ul>
				</nav>
			</header>
			<!-- /Header  LogIn   -->
			
</template>
<script setup>
import { RouterLink } from "vue-router";

/* export default {
	name:'HomeHeader'
	
} */
</script>