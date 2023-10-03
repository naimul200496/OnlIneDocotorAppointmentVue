<template>
    <div class="main-wrapper">
        <header class="header">
	       <UserHeaderPart></UserHeaderPart>
        </header>
        <br>
        <br>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <NavigationView></NavigationView>  
                    <RouterView ></RouterView>
                
                </div>
            </div>
        </div>
     </div>
    
</template>
<script>

import UserHeaderPart from '../components/Doctor/DocHeaderPart.vue'
import NavigationView from '../components/Doctor/DocNavigationview.vue'
import { RouterView } from 'vue-router';
// import DashBoard from '../components/Admin/DashBoard.vue'; 

export default {
    name:'DoctorView',
    components:{
        UserHeaderPart,NavigationView,RouterView
    },

}
</script>
<style src="../assets/doctor.css"></style>