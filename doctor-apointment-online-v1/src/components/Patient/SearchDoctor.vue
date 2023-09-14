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
                  <img src="/img/noimage.jpg" class="img-fluid" alt="User Image" />
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
               <!--  <div class="rating">
                  <i class="fas fa-star filled"></i>
                  <i class="fas fa-star filled"></i>
                  <i class="fas fa-star filled"></i>
                  <i class="fas fa-star filled"></i>
                  <i class="fas fa-star"></i>
                  <span class="d-inline-block average-rating">(17)</span>
                </div> -->
               <!--  <div class="clinic-details">
                  <p class="doc-location"><i class="fas fa-map-marker-alt"></i>
                     {{ country}}, {{ provience}}</p>
                  <ul class="clinic-gallery">
                    <li>
                      <a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
                        <img src="assets/img/features/feature-01.jpg" alt="Feature" />
                      </a>
                    </li>
                    <li>
                      <a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
                        <img src="assets/img/features/feature-02.jpg" alt="Feature" />
                      </a>
                    </li>
                    <li>
                      <a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
                        <img src="assets/img/features/feature-03.jpg" alt="Feature" />
                      </a>
                    </li>
                    <li>
                      <a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
                        <img src="assets/img/features/feature-04.jpg" alt="Feature" />
                      </a>
                    </li>
                  </ul>
                </div> -->
                <!-- <div class="clinic-services">
                  <span>Dental Fillings</span>
                  <span> Whitneing</span>
                </div> -->
              </div>
            </div>
            <div class="doc-info-right">
              <div class="clini-infos">
                <ul>
                  <li><i class="far fa-thumbs-up"></i> 98%</li>
                  <li><i class="far fa-comment"></i> 17 Feedback</li>
                  <li><i class="fas fa-map-marker-alt"></i> Florida, USA</li>
                  <li>
                    <i class="far fa-money-bill-alt"></i> $300 - $1000
                    <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                  </li>
                </ul>
              </div>
              <div class="clinic-booking">
                <a class="view-pro-btn" href="doctor-profile.html">View Profile</a>
                <a class="apt-btn" href="booking.html">Book Appointment</a>
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
export default {
  name: 'SearchDoctor',
data(){
    return{
        doctorList:null,
    }
}
,
  setup() {
    const docotorInfo = useStoreAddDoctor()
    return { docotorInfo }
  },
   async mounted() {
    await this.docotorInfo.getAllDoctorList()
   this.doctorList = await this.docotorInfo.getAllDoctorInfo
   console.log('sssssss',this.doctorList)
  }
}
</script>
