<template>
	
	<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
							
		<!-- Profile Sidebar -->
		<div class="profile-sidebar">
			<div class="widget-profile pro-widget-content">
				<div class="profile-info-widget">
					<a href="#" class="booking-doc-img">
						<img src="/img/doctor_default_image.jpg" alt="User Image">
					</a>
					<div class="profile-det-info">
						<h3>Dr. {{ getUserInfo.firstname }} {{ getUserInfo.lastname }}</h3>
						
						<div class="patient-details">
							<h5 class="mb-0"> </h5>
						</div>
					</div>
				</div>
			</div>
			<div class="dashboard-widget">
				<nav class="dashboard-menu">
					<ul>
						<li class="active">
							<RouterLink :to="{ name: 'DoctorDashBoard' }">
								<i class="fas fa-columns"></i>
								<span>Dashboard</span>
							</RouterLink>
						</li>
						<li>
							<RouterLink :to="{ name: 'DoctAppointment' }">
								<i class="fas fa-calendar-check"></i>
								<span>Appointments</span>
							</RouterLink>
						</li>
						<li>
							<a href="#">
								<i class="fas fa-user-injured"></i>
								<span>My Patients</span>
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fas fa-hourglass-start"></i>
								<span>Schedule Timings</span>
							</a>
						</li>
						
						
						
					</ul>
				</nav>
			</div>
		</div>
		<!-- /Profile Sidebar -->
		
	</div>
</template>
<script>
import { RouterLink } from 'vue-router'
import { userUserStore } from '../../stores/userStore'
export default {
	name:'DocNavigationview',
	setup() {
    const userStore = userUserStore()
    return { userStore }
  },
  components:{
	RouterLink,
  },
  computed:{
    getUserInfo(){
     
      return  this.userStore.userInfo
      }
},
}
</script>