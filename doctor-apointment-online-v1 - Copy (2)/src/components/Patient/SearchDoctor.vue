<template>
<!-- Page Content -->

<div class="row">
    <div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
        <!-- Search Filter -->
        <div class="card search-filter">
            <div class="card-header">
                <h4 class="card-title mb-0">Search Filter</h4>
            </div>
          <div class="card-body">
              <div class="filter-widget">
            <h4>Select Specialist</h4>
            <div v-for="spec in searchBySpecility" :key="spec.specialization">
              <label class="custom_check">
               <!--  <input type="checkbox" :id="`${appointment.id}`" :value="`${appointment.id}`"  
                v-bind:checked="false" 
               class="check" @change="check($event)"> -->

                <input type="checkbox" :id="`${spec.specialization}`"  :value="`${spec.specialization}`"  
                v-bind:checked="false"  @change="check($event)">
                <span class="checkmark"></span> {{ spec.specialization }}
              </label>
            </div>
          </div>
          <div class="btn-search">
            <button type="button" class="btn btn-block" @click.prevent="searchValue()">Search</button>
          </div>	
        </div>
        </div>
        <!-- /Search Filter -->
    </div>

    <div class="col-md-12 col-lg-8 col-xl-9">

        <div v-if="loadingImage">
            <center>  <img src="/img/loadingImage.gif"></center>
            </div>
        <!-- Doctor Widget -->
        <div class="card" v-for="doctor in doctorList" :key="doctor.id">
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
                             
                             {{ doctor.specialization }}
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
import {
    useStoreAddDoctor
} from '../../stores/AddDoctorStore'
import {
    RouterLink
} from 'vue-router';
export default {
    name: 'SearchDoctor',
    component: {
        RouterLink
    },

    data() {
        return {
            doctorList: [],
            searchBySpecility: [],
            filterData:[],
            loadingImage:false,
        }
    },
    setup() {
        const docotorInfo = useStoreAddDoctor()
        return {
            docotorInfo
        }
    },
    async mounted() {
        this.loadingImage=true
        await this.docotorInfo.getAllDoctorList()
        this.doctorList = this.docotorInfo.getAllDoctorInfo
        var uniq = {};
        this.searchBySpecility= this.doctorList.filter(obj => !uniq[obj.specialization] && (uniq[obj.specialization] = true))
        console.log('arrFiltered', this.searchBySpecility)
        this.filterData=[]
        this.loadingImage=false
    },
    methods: {
        goBookAppointment(id) {
            console.log('SearchPage', id)
            this.$router.push({
                name: 'BookingPage',
                params: {
                    docid: id
                }
            });

        },
        searchValue(){
          if(this.filterData.length>0){
            const temptbl  = this.doctorList.filter(item =>
            this.filterData.every(val => item.specialization.indexOf(val) > -1));
            console.log('temptbl',temptbl)
            this.doctorList=temptbl
          }
          else{
            this.doctorList = this.docotorInfo.getAllDoctorInfo
            this.filterData=[]
          }
         
        },
        check(e){
          console.log('checked',e.target.checked)
          if(e.target.checked){
            this.filterData.push(e.target.value)
          }
         console.log('this.filterData',this.filterData)
        }
    }
}
</script>
