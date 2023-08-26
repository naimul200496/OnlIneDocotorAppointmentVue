<template>
    <div class="main-wrapper">
	<UserHeaderPart></UserHeaderPart>
     <NavigationView></NavigationView>   
    
     <RouterView ></RouterView>
    </div>
    
</template>
<script>

import UserHeaderPart from '../components/UserHeaderPart.vue';
import NavigationView from '../components/Admin/NavigationView.vue';
import { RouterView } from 'vue-router';
// import DashBoard from '../components/Admin/DashBoard.vue'; 

export default {
    name:'AdminPage',
    
    components:{
        UserHeaderPart,NavigationView,RouterView
    },

}
</script>
<!-- <style src="../assets/admin.css"></style> -->