<template>
<div class="col-md-7 col-lg-8 col-xl-9">
    <div style="min-height: 923px;">
        <div class="row">
            <div class="col-md-12">
                <h4 class="mb-4">Patient Appoinment</h4>
                <div class="appointment-tab">
                
                    <!-- Appointment Tab -->
                    <ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                        <li class="nav-item">
                            <a class="nav-link active" href="#upcoming-appointments" data-toggle="tab">Upcoming</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#today-appointments" data-toggle="tab">Today</a>
                        </li> 
                    </ul>
                    <!-- /Appointment Tab -->
                    
                    <div class="tab-content">
                    
                        <!-- Upcoming Appointment Tab -->
                        <div class="tab-pane show active" id="upcoming-appointments">
                            <div class="card card-table mb-0">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover table-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Patient Name</th>
                                                    <th>Appt Date</th>
                                                    <th>Purpose</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="toApt in upcommingApt" :key="toApt.appointmentDate">
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="patient-profile.html" class="avatar avatar-sm mr-2">
                                                                <img class="avatar-img rounded-circle" src="/img/default_patient2.png" alt="User Image"></a>
                                                            <a v-if="toApt.familyInfo" href="#"> {{toApt.familyInfo[0]}}<span>#PT0006</span></a>
                                                            <a v-else href="#"> {{toApt.pateintName}}<span>#PT0006</span></a>
                                                        </h2>
                                                    </td>
                                                    <td>{{ toApt.appointmentDate }} <span class="d-block text-info">{{ toApt.appointmentTime }}</span></td>
                                                    <td>Fever</td>
                                                </tr>
                                               
                                            </tbody>
                                        </table>		
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Upcoming Appointment Tab -->
                   
                        <!-- Today Appointment Tab -->
                        <div class="tab-pane" id="today-appointments">
                            <div class="card card-table mb-0">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover table-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Patient Name</th>
                                                    <th>Appt Date</th>
                                                    <th>Purpose</th>
                                                    <th>Type</th>
                                                    <th class="text-center">Paid Amount</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="toApt in todayAppt" :key="toApt.appointmentDate">
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <a href="patient-profile.html" class="avatar avatar-sm mr-2">
                                                                <img class="avatar-img rounded-circle" src="/img/default_patient2.png" alt="User Image"></a>
                                                            <a v-if="toApt.familyInfo" href="#"> {{toApt.familyInfo[0]}}<span>#PT0006</span></a>
                                                            <a v-else href="#"> {{toApt.pateintName}}<span>#PT0006</span></a>
                                                        </h2>
                                                    </td>
                                                    <td>{{ toApt.appointmentDate }} <span class="d-block text-info">{{ toApt.appointmentTime }}</span></td>
                                                    <td>Fever</td>
                                                </tr>
                                               
                                            </tbody>
                                        </table>		
                                    </div>	
                                </div>	
                            </div>	
                        </div>
                        <!-- /Today Appointment Tab -->
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import {
    useStoreAddDoctor
} from '../../stores/AddDoctorStore.js'
import {
    userUserStore
} from '../../stores/userStore.js'

export default {
    name:'AppointmentToday',
    data(){
        return{
            doctorAppointmentInfo:null,
            userInfo:null,
            todayAppt:[],
            todayPatient:'',
            totaPatient:'',
            totalUpcomingPatient:'',
            upcommingApt:[],

        }
    },
    setup() {
        const storeUser = userUserStore()
        const storeAppointInfo = useStoreAddDoctor()
        
        return {
            storeUser,
            storeAppointInfo,
        }
    },
    async mounted() {
        console.log('Started..')
        this.userInfo = await this.storeUser.userInfo
        await this.storeAppointInfo.getAllPatinetApptInfo(this.userInfo)
        this.doctorAppointmentInfo =  this.storeAppointInfo.getDcotorWiseApptReport

        this.todayAppt = this.doctorAppointmentInfo[0].todayAppt
        this.todayPatient= this.doctorAppointmentInfo[0].todayPatient,
        this.totaPatient= this.doctorAppointmentInfo[0].totaPatient,
        this.totalUpcomingPatient= this.doctorAppointmentInfo[0].totalUpcomingPatient,
        this.upcommingApt= this.doctorAppointmentInfo[0].upcommingApt,
        console.log('this.doctorAppointmentInfo-test',this.todayAppt)
		
      }

}
</script>
