<template>
<!-- Page Wrapper -->
<div class="page-wrapper">
    <div class="content container-fluid">
    
        <!-- Page Header -->
        <div class="page-header">
            <div class="row">
                <div class="col-sm-12">
                    <h3 class="page-title">Appointments</h3>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                        <li class="breadcrumb-item active">Appointments</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /Page Header -->
        <div v-if="loadingImage">
            <center>  <img src="/img/loadingImage.gif"></center>
            </div>
        <div class="row">
            <div class="col-md-12">
            
                <!-- Recent Orders -->
                <div class="card">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="datatable table table-hover table-center mb-0">
                                <thead>
                                    <tr>
                                        <th>Doctor Name</th>
                                        <th>Speciality</th>
                                        <th>Patient Name</th>
                                        <th>Apointment Time</th>
                                        <th>Status</th>
                                        <th class="text-right">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr  v-for="appointment in appointmentData" :key="appointment.id">
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="profile.html" class="avatar avatar-sm mr-2">
                                                    <img class="avatar-img rounded-circle" src="/img/doctor_default_image.jpg" alt="User Image"></a>
                                                <a href="#">Dr. {{appointment.doctorname }} 
                                                    </a>
                                            </h2>
                                        </td>
                                        <td>{{appointment.dociSpecilaity}}</td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <a href="profile.html" class="avatar avatar-sm mr-2">
                                                    <img class="avatar-img rounded-circle" src="/img/default_patient.png" alt="User Image"></a>
                                                <a v-if="appointment.familyInfo" href="#">{{appointment.familyInfo.family_fullname}} </a>
                                                <a v-else href="#">{{appointment.patientName}} </a>
                                            </h2>
                                        </td>
                                        <td> {{appointment.appointmentDate}}  <span class="text-primary d-block">{{appointment.appointmentTime}}</span></td>
                                        <td v-if="appointment.appointmentStatus">
                                            <div class="status-toggle" >
                                                <input type="checkbox" :id="`${appointment.id}`" :value="`${appointment.id}`"  
                                                 v-bind:checked="true" 
                                                class="check" @change="check($event)">
                                                <label :for="`${appointment.id}`" class="checktoggle" >checkbox</label>
                                            </div>
                                        </td>
                                        <td v-else>
                                            <div class="status-toggle" >
                                                <input type="checkbox" :id="`${appointment.id}`" :value="`${appointment.id}`"  
                                                 v-bind:checked="false" 
                                                class="check" @change="check($event)">
                                                <label :for="`${appointment.id}`" class="checktoggle" >checkbox</label>
                                            </div>
                                        </td>
                                        <td class="text-right">
                                            ${{appointment.totalAmount}} 
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- /Recent Orders -->
                
            </div>
        </div>
    </div>			
</div>
<!-- /Page Wrapper -->
</template>
<script>
import {
    useStoreAppointment
} from '../../stores/StorePatient.js'




export default {
    name: 'PatientDashboard',
    data() {
        return {
            appointmentData: [],
            userInfo: null,
            loadingImage:false,
            /*  id:'',
             doctorname:'',
             doctorPhot:'',
             specialization:'',
             appointmentDate:'',
             appointmentTime:'',
             bookingDate:'',
             totalAmount:'',
             followupdate:'',
             status:'', */
        }
    },
 
    setup() {
      
        const storeAppointInfo = useStoreAppointment()
        
        return {
           
            storeAppointInfo,
        }
    },
   
    async mounted() {
        this.loadingImage=true
        await this.storeAppointInfo.getAllAppointmentForAdmin()
       // await this.storeAppointInfo.getAllPatient()
       this.appointmentData = await this.storeAppointInfo.getAllAppointmentDataAdmin
        console.log('appointmentInfo', this.appointmentData)
        this.loadingImage=false
  },
  methods:{
    async check(e){
        this.loadingImage=true
    console.log('checked',e.target.checked)
    console.log('value',e.target.value)
    if(e.target.value){
        await this.storeAppointInfo.updateStatus(e.target.value,e.target.checked)
        await this.storeAppointInfo.getAllAppointmentForAdmin()
       // await this.storeAppointInfo.getAllPatient()
       this.appointmentData = await this.storeAppointInfo.getAllAppointmentDataAdmin
    }
    this.loadingImage=false
   
    }
    
  }

}
</script>