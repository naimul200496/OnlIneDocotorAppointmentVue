<template>
  <!-- Sidebar -->
  <div class="sidebar" id="sidebar">
    <div
      class="slimScrollDiv"
      style="position: relative; overflow: hidden; width: 100%; height: 863px"
    >
      <div class="sidebar-inner slimscroll" style="overflow: hidden; width: 100%; height: 863px">
        <div id="sidebar-menu" class="sidebar-menu">
          <ul>
            <li class="menu-title">
              <span>Main</span>
            </li>
            <li class="active">
              <RouterLink :to="{ name: 'DashBoard' }"
                ><i class="fe fe-home"></i> <span>Dashboard</span></RouterLink>
            </li>
            
            <li>
                <RouterLink :to="{ name: 'AppointmentPage' }">
                  <i class="fe fe-layout"></i> <span>Appointments</span></RouterLink>
              </li>
            <li>
               <RouterLink :to="{ name: 'SpecialityPage' }"><i class="fe fe-users"></i> <span>Specialities</span>
               </RouterLink>
              
            </li>
            <li>
             <RouterLink :to="{ name: 'DoctorList' }"><i class="fe fe-user-plus"></i>
               <span>Doctors</span></RouterLink>
            </li>
            <!-- <li>
              <a href="#"><i class="fe fe-user"></i> <span>Patients</span></a>
            </li>
            <li>
              <a href="#"><i class="fe fe-star-o"></i> <span>Reviews</span></a>
            </li>
            <li>
              <a href="#"><i class="fe fe-activity"></i> <span>Transactions</span></a>
            </li>
            <li>
              <a href="settings.html"><i class="fe fe-vector"></i> <span>Settings</span></a>
            </li>
            <li class="submenu">
              <a href="#"
                ><i class="fe fe-document"></i> <span> Reports</span>
                <span class="menu-arrow"></span
              ></a>
              <ul style="display: none">
                <li><a href="invoice-report.html">Invoice Reports</a></li>
              </ul>
            </li>
            <li class="menu-title">
              <span>Pages</span>
            </li>
            <li>
              <a href="profile.html"><i class="fe fe-user-plus"></i> <span>Profile</span></a>
            </li>
            <li class="submenu">
              <a href="#"
                ><i class="fe fe-document"></i> <span> Authentication </span>
                <span class="menu-arrow"></span
              ></a>
              <ul style="display: none">
                <li><a href="login.html"> Login </a></li>
                <li><a href="register.html"> Register </a></li>
                <li><a href="forgot-password.html"> Forgot Password </a></li>
                <li><a href="lock-screen.html"> Lock Screen </a></li>
              </ul>
            </li>
            <li class="submenu">
              <a href="#"
                ><i class="fe fe-warning"></i> <span> Error Pages </span>
                <span class="menu-arrow"></span
              ></a>
              <ul style="display: none">
                <li><a href="error-404.html">404 Error </a></li>
                <li><a href="error-500.html">500 Error </a></li>
              </ul>
            </li>
            <li>
              <a href="blank-page.html"><i class="fe fe-file"></i> <span>Blank Page</span></a>
            </li> -->
         
          </ul>
        </div>
      </div>
     
      
    </div>
  </div>
  <!-- /Sidebar -->
</template>
<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'NavigationView',
  components: {
    RouterLink
  }
}
</script>
