<template>
  <!-- Page Content -->

  <div class="row">
    <div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
      <!-- Search Filter -->
      <div class="card search-filter">
        <div class="card-header">
          <h4 class="card-title mb-0">Search Filter</h4>
        </div>
      </div>
      <!-- /Search Filter -->
    </div>

    <div class="col-md-12 col-lg-8 col-xl-9">
      <!-- Doctor Widget -->
      <div class="card" v-for="doctor in doctorList"  :key="doctor.id">
        <div class="card-body">
          <div class="doctor-widget">
            <div class="doc-info-left">
              <div class="doctor-img">
                <a href="doctor-profile.html">
                  <img src="/img/doctor_default_image.jpg" class="img-fluid" alt="User Image" />
                </a>
              </div>
              <div class="doc-info-cont">
                <h4 class="doc-name"><a href="doctor-profile.html">Dr. {{ doctor.docFirstName }} {{ doctor.docLastName  }}</a></h4>
                <p class="doc-speciality">{{ doctor.education[0] }} - {{ doctor.education[1] }}</p>
                <h5 class="doc-department">
                 <!--  <img
                    src="assets/img/specialities/specialities-05.png"
                    class="img-fluid"
                    alt="Speciality"
                  /> -->
                  Specialities: {{ doctor. specialization}}
                  
                </h5>
                <p><i class="fas fa-map-marker-alt"></i> {{ doctor.country}}, {{ doctor.provience}}</p>
                <div class="clinic-booking">
                  <!-- <a class="view-pro-btn" href="#">View Profile</a> -->
                  <RouterLink class="view-pro-btn" :to="{ name:'DoctorProfile', params: { docid: doctor.id}}">Profile</RouterLink>
                  <RouterLink class="apt-btn" :to="{ name:'BookingDetailView', params: { docid: doctor.id}}">Booking</RouterLink>
                <!--   <a class="apt-btn" href="#" @click="goBookAppointment(`${doctor.id}`)">Book Appointment</a> -->
               <!--  <a><RouterLink :to="{ name:'BookingPageDetail', params: { docid: doctor.id}}">Book Appointment</RouterLink></a> -->
               
                </div>
             
              </div>
              
            </div>
            <div class="doc-info-right">
              <div class="clini-infos">
                <ul>
                  <li><i class="far fa-thumbs-up"></i> 98%</li>
                  <li><i class="far fa-comment"></i> 17 Feedback</li>
                  <li><i class="fas fa-map-marker-alt"></i> {{ doctor.country}}, {{ doctor.provience}}</li>
                  <li>
                    <i class="far fa-money-bill-alt"></i> ${{ doctor.pricing }}
                    <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <!-- /Doctor Widget -->

      <!-- /Doctor Widget -->

      <div class="load-more text-center">
        <a class="btn btn-primary btn-sm" href="javascript:void(0);">Load More</a>
      </div>
    </div>
  </div>

  <!-- /Page Content -->
</template>
<script>
import { useStoreAddDoctor } from '../../stores/AddDoctorStore'
import { RouterLink } from 'vue-router';
export default {
  name: 'SearchDoctor',
  component:{
    RouterLink 
  },

data(){
    return{
        doctorList:[],
    }
}
,
  setup() {
    const docotorInfo = useStoreAddDoctor()
    return { docotorInfo }
  },
   async mounted() {
    await this.docotorInfo.getAllDoctorList()
   this.doctorList = this.docotorInfo.getAllDoctorInfo
  
  },
  methods:{
    goBookAppointment(id){
     // this.docid =id
     
      console.log('SearchPage',id)
      this.$router.push({name:'BookingPage', params: { docid : id}});

    }
  }
}
</script>
