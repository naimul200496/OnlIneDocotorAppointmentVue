<template>
<!-- Appointment Tab -->
<div id="pat_appointments">
    <div class="card card-table mb-0">
        <div class="card-body">
            <div class="table">
                <table class="table table-hover table-center mb-0">
                    <thead>
                        <tr>
                            <th>Doctor</th>
                            <th>Patient</th>
                            <th>Appt Date</th>
                            <th>Booking Date</th>
                            <th>Amount</th>
                            <th>Follow Up</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="appointment in appointmentData" :key="appointment.id">
                            <td>
                                <h2 class="table-avatar">
                                    <a href="#" class="avatar avatar-sm mr-2">
                                        <img class="avatar-img rounded-circle" src="/img/doctor_default_image.jpg" alt="Doctor Image">
                                    </a>
                                    <a href="#">Dr. {{appointment.doctorname }} <span>{{appointment.dociSpecilaity}}</span></a>
                                </h2>
                            </td>
                            <td v-if="appointment.familyInfo">{{appointment.familyInfo.family_fullname}}</td>
                            <td v-else>{{userInfo.firstname}} {{userInfo.lastname}}</td>
                           
                            <td>{{appointment.appointmentDate }} <span class="d-block text-info">{{appointment.appointmentTime}}</span></td>
                            <td>{{appointment.bookingDate}}</td>
                            <td>{{appointment.totalAmount}}</td>
                            <td>{{appointment.followupdate}}</td>
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
import {
    useStoreAppointment
} from '../../stores/StorePatient.js'
import {
    userUserStore
} from '../../stores/userStore.js'



export default {
    name: 'PatientDashboard',
    data() {
        return {
            appointmentData: [],
            userInfo: null,
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
        const storeUser = userUserStore()
        const storeAppointInfo = useStoreAppointment()
        
        return {
            storeUser,
            storeAppointInfo,
        }
    },
   
    async mounted() {
        console.log('Started..')
        this.userInfo = await this.storeUser.userInfo
        await this.storeAppointInfo.getAllAppointmentInfo(this.userInfo)
       this.appointmentData = await this.storeAppointInfo.getAppointmentInfo
      console.log('appointmentInfo', this.appointmentData)
        /* console.log('appointmentInfo', this.userInfo)

            this.id=this.appointmentInfo.id,
            this.doctorname=this.appointmentInfo.doctorname,
            this.doctorPhot=this.appointmentInfo.doctorPhot,
            this.specialization=this.appointmentInfo.specialization,
            this.appointmentDate=this.appointmentInfo.appointmentDate,
            this.appointmentTime=this.appointmentInfo.appointmentTime,
            this.bookingDate=this.appointmentInfo.bookingDate,
            this.totalAmount=this.appointmentInfo.totalAmount,
            this.followupdate=this.appointmentInfo.followupdate,
            this.status=this.appointmentInfo.status,
            console.log('End..') */

    }

}
</script>
