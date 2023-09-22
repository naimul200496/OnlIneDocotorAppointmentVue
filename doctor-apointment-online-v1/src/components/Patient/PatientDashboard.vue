<template>
<!-- Appointment Tab -->
<div id="pat_appointments" class="tab-pane fade show active">
    <div class="card card-table mb-0">
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-hover table-center mb-0">
                    <thead>
                        <tr>
                            <th>Doctor</th>
                            <th>Appt Date</th>
                            <th>Booking Date</th>
                            <th>Amount</th>
                            <th>Follow Up</th>
                            <th>Status</th>
                         </tr>
                    </thead>
                    <tbody>
                        <tr v-for=" item in appointmentInfo"  :key="item.id">
                            <td>
                                <h2 class="table-avatar">
                                    <a href="#" class="avatar avatar-sm mr-2">
                                        <img class="avatar-img rounded-circle" src="/img/doctors/doctor-thumb-01.jpg" alt="User Image">
                                    </a>
                                    <a href="doctor-profile.html">Dr. {{item.doctorname }} <span>{{item.specialization}}</span></a>
                                </h2>
                            </td>
                            <td>{{ item.appointmentDate }} <span class="d-block text-info">{{item.appointmentTime}}</span></td>
                            <td>{{item.bookingDate}}</td>
                            <td>{{item.totalAmount}}</td>
                            <td>{{item.followupdate}}</td>
                            <td><span class="badge badge-pill bg-success-light">Confirm</span></td>
                            
                        </tr>
         
                    
                   
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<!-- /Appointment Tab -->
</template>

<script>
   import { useStoreAppointment } from '../../stores/StorePatient.js'
import {  userUserStore } from '../../stores/userStore.js'

export default {
    name: 'PatientDashboard',
    data() {
        return {
            appointmentInfo: null,
            userInfo:null,
            id:'',
            doctorname:'',
            doctorPhot:'',
            specialization:'',
            appointmentDate:'',
            appointmentTime:'',
            bookingDate:'',
            totalAmount:'',
            followupdate:'',
            status:'',
        }
    },
    setup() {
        const storeAppointInfo = useStoreAppointment()
        const storeUser = userUserStore()
        return {
            storeAppointInfo,storeUser
        }
    },
    async mounted() {
  console.log('Started..')
        //
       this.userInfo= this.storeUser.userInfo
       // console.log('appointmentInfo', this.userInfo)
        await this.storeAppointInfo.getAllAppointmentInfo(this.userInfo)
        this.appointmentInfo= await this.storeAppointInfo.getAppointmentInfo
          
           /*  this.id=this.appointmentInfo.id,
            this.doctorname=this.appointmentInfo.doctorname,
            this.doctorPhot=this.appointmentInfo.doctorPhot,
            this.specialization=this.appointmentInfo.specialization,
            this.appointmentDate=this.appointmentInfo.appointmentDate,
            this.appointmentTime=this.appointmentInfo.appointmentTime,
            this.bookingDate=this.appointmentInfo.bookingDate,
            this.totalAmount=this.appointmentInfo.totalAmount,
            this.followupdate=this.appointmentInfo.followupdate,
            this.status=this.appointmentInfo.status, */
            console.log('End..')

    }

}
</script>

