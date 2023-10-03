
<template>
<HomeHeader></HomeHeader>
<LogInForm ></LogInForm>
<br><br><br>
<Footer></Footer>    
</template>
<script>
import HomeHeader from '../components/Home/HomeHeader.vue'
import Footer from '../components/Home/HomeFooter.vue'
import LogInForm from '../components/LogInSignIn/LogInForm.vue';

export default {
    name:'LogIn',
   
    components:{
        HomeHeader,Footer,LogInForm,
    }
}
</script>