
<template>
    <HomeHeader></HomeHeader>
    <RegForm></RegForm>
    <br>
    <Footer></Footer>    
    </template>
    <script>
    import HomeHeader from '../components/Home/HomeHeader.vue'
    import Footer from '../components/Home/HomeFooter.vue'
    import RegForm from '../components/LogInSignIn/SignUpForm.vue';
    
    export default {
        name:'LogIn',
        components:{
            HomeHeader,Footer,RegForm,
        }
    }
    </script>