<script setup>
import HomeHeader from '../components/Home/HomeHeader.vue'
import HomeBanner from '../components/Home/HomeBanner.vue'
import ClinicSeciality from '../components/Home/ClinicSpeciality.vue'
import PopulerSection from '../components/Home/PopulerSection.vue'
import Footer from '../components/Home/HomeFooter.vue'
</script>

<template>
  	<!-- Main Wrapper -->
		<div class="main-wrapper">
		<HomeHeader></HomeHeader>
	    <HomeBanner></HomeBanner>
		<ClinicSeciality></ClinicSeciality>	  
	    <PopulerSection></PopulerSection>		
		 <Footer></Footer> 
	</div>
	   <!-- /Main Wrapper -->
	  
</template>
<!-- <style src="../assets/main.css"></style> -->