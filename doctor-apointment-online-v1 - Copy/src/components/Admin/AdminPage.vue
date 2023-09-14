<template>
    <div class="main-wrapper">
<!-- 	<UserHeaderPart></UserHeaderPart>
     <NavigationView></NavigationView>  --> 
     <RouterView></RouterView> 
     <DashBoard></DashBoard>
    </div>
    
</template>
<script>

import DashBoard from './DashBoard.vue'; 
import { RouterView } from 'vue-router';

export default {
    name:'AdminPage',
    components:{
       DashBoard,RouterView
    }
}
</script>
<style src="../../assets/admin.css"></style>