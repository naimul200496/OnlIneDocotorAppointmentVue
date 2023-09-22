<template>
 <div class="card">
            <div class="card-body">
                <div class="booking-doc-info">
                    <a href="doctor-profile.html" class="booking-doc-img">
                        <img src="/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                    </a>
                    <div class="booking-info">
                        <h4><a href="doctor-profile.html">Dr. {{name}}</a></h4>
                        <div class="rating">
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star"></i>
                            <span class="d-inline-block average-rating">35</span>
                        </div>
                        <p class="text-muted mb-0"><i class="fas fa-map-marker-alt"></i>{{location}}</p>
                    </div>
                </div>
            </div>
</div>
       
</template>
<script>
/* export default {
        name: 'BookingDoctorPart' getDoctor
} */
    import { useStoreAddDoctor } from '../../stores/AddDoctorStore.js';

    export default {
        name: 'BookingDoctorPart',
        computed: {
            name() {
                return this.doctorStore.getDoctor ? this.doctorStore.getDoctor.docFirstName+' ' +  this.doctorStore.getDoctor.docLastName: '<Hero>';
            },
            image() {
                return this.doctorStore.getDoctor ? this.doctorStore.getDoctor.imageUrl : 'assets/img/profile-img.jpg';
            },
            location() {
                return this.doctorStore.getDoctor ? this.doctorStore.getDoctor.country : '<Location>' ;
            },
            
            pricing() {
                return this.doctorStore.getDoctor ? this.doctorStore.getDoctor.pricing : '<Pricing>' ;
            },
        },
        setup() {
            const doctorStore = useStoreAddDoctor();
            return { doctorStore };
        },
    }
</script>