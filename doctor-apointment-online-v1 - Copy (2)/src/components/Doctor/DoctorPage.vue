<template>

    <RouterView></RouterView> 
    
    <DashBoard></DashBoard>
    
</template>
<script>

import DashBoard from '../Doctor/DashBoardDoctor'; 
import { RouterView } from 'vue-router';

export default {
    name:'DoctorPage',
    components:{
       DashBoard,RouterView
    }
}
</script>
<style src="../../assets/admin.css"></style>