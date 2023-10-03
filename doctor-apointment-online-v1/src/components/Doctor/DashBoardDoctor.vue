<template>
    <!-- Page Content -->
    <div class="col-md-7 col-lg-8 col-xl-9">
    <div style="min-height: 923px;">
    <div class="row">
								<div class="col-md-12">
									<div class="card dash-card">
										<div class="card-body">
											<div class="row">
												<div class="col-md-12 col-lg-4">
													<div class="dash-widget dct-border-rht">
														<div class="circle-bar circle-bar1">
															<div class="circle-graph1" data-percent="75">
																<img src="/img/icon-01.png" class="img-fluid" alt="patient">
															</div>
														</div>
														<div class="dash-widget-info">
															<h6>Total Patient</h6>
															<h3>{{totaPatient}}</h3>
															<p class="text-muted">Till Today</p>
														</div>
													</div>
												</div>
												
												<div class="col-md-12 col-lg-4">
													<div class="dash-widget dct-border-rht">
														<div class="circle-bar circle-bar2">
															<div class="circle-graph2" data-percent="65">
																<img src="/img/icon-02.png" class="img-fluid" alt="Patient">
															</div>
														</div>
														<div class="dash-widget-info">
															<h6>Today Patient</h6>
															<h3>{{todayPatient}}</h3>
															<p class="text-muted"> </p>
														</div>
													</div>
												</div>
												
												<div class="col-md-12 col-lg-4">
													<div class="dash-widget">
														<div class="circle-bar circle-bar3">
															<div class="circle-graph3" data-percent="50">
																<img src="img/icon-03.png" class="img-fluid" alt="Patient">
															</div>
														</div>
														<div class="dash-widget-info">
															<h6>Appoinments</h6>
															<h3>{{totalUpcomingPatient}}</h3>
															<p class="text-muted"> </p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="row">
								<div class="col-md-12">
									<h4 class="mb-4">Patient Appoinment</h4>
									<div class="appointment-tab">
									
										
										
										<div class="tab-content">
										
											<!-- Upcoming Appointment Tab -->
											<!-- <div class="tab-pane show active" id="upcoming-appointments">
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
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient.jpg" alt="User Image"></a>
																				<a href="patient-profile.html">Richard Wilson <span>#PT0016</span></a>
																			</h2>
																		</td>
																		<td>11 Nov 2019 <span class="d-block text-info">10.00 AM</span></td>
																		<td>General</td>
																		<td>New Patient</td>
																		<td class="text-center">$150</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient1.jpg" alt="User Image"></a>
																				<a href="patient-profile.html">Charlene Reed <span>#PT0001</span></a>
																			</h2>
																		</td>
																		<td>3 Nov 2019 <span class="d-block text-info">11.00 AM</span></td>
																		<td>General</td>
																		<td>Old Patient</td>
																		<td class="text-center">$200</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient2.jpg" alt="User Image"></a>
																				<a href="patient-profile.html">Travis Trimble  <span>#PT0002</span></a>
																			</h2>
																		</td>
																		<td>1 Nov 2019 <span class="d-block text-info">1.00 PM</span></td>
																		<td>General</td>
																		<td>New Patient</td>
																		<td class="text-center">$75</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient3.jpg" alt="User Image"></a>
																				<a href="patient-profile.html">Carl Kelly <span>#PT0003</span></a>
																			</h2>
																		</td>
																		<td>30 Oct 2019 <span class="d-block text-info">9.00 AM</span></td>
																		<td>General</td>
																		<td>Old Patient</td>
																		<td class="text-center">$100</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient4.jpg" alt="User Image"></a>
																				<a href="patient-profile.html">Michelle Fairfax <span>#PT0004</span></a>
																			</h2>
																		</td>
																		<td>28 Oct 2019 <span class="d-block text-info">6.00 PM</span></td>
																		<td>General</td>
																		<td>New Patient</td>
																		<td class="text-center">$350</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient5.jpg" alt="User Image"></a>
																				<a href="patient-profile.html">Gina Moore <span>#PT0005</span></a>
																			</h2>
																		</td>
																		<td>27 Oct 2019 <span class="d-block text-info">8.00 AM</span></td>
																		<td>General</td>
																		<td>Old Patient</td>
																		<td class="text-center">$250</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																</tbody>
															</table>		
														</div>
													</div>
												</div>
											</div> -->
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
                                                                        
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-for="toApt in todayAppt" :key="toApt.patientId">
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <a href="patient-profile.html" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient6.jpg" alt="User Image"></a>
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

				
			<!-- /Page Content -->
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