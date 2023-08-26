<template>
    <div class="main-wrapper">
	<UserHeaderPart></UserHeaderPart>
     <NavigationView></NavigationView>   
     <DashBoard></DashBoard>
    </div>
    
</template>
<script>
import UserHeaderPart from '../UserHeaderPart.vue';
import NavigationView from './NavigationView.vue';
//import { RouterLink, RouterView } from "vue-router";
 import DashBoard from './DashBoard.vue'; 

export default {
    name:'AdminPage',
    components:{
        UserHeaderPart,NavigationView,DashBoard
    }
}
</script>
<style src="../../assets/admin.css"></style>