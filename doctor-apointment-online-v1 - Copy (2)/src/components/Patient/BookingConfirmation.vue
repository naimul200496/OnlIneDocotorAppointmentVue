<template>
    <!-- Page Content -->
			<div class="content success-page-cont">
				<div class="container-fluid">
				
					<div class="row justify-content-center">
						<div class="col-lg-6">
						
							<!-- Success Card -->
							<div class="card success-card">
								<div class="card-body">
									<div class="success-cont">
										<i class="fas fa-check"></i>
										<h3>Appointment booked Successfully!</h3>
										<p>Appointment booked with <strong>Dr. {{this.checkoutInfo.docnname}}</strong><br> on <strong>{{this.checkoutInfo.Date }} {{this.checkoutInfo.timeSlot}}</strong></p>
										<a href="#" class="btn btn-primary view-inv-btn" @click.prevent="gotoDashboard()">Dashboard</a>
									</div>
								</div>
							</div>
							<!-- /Success Card -->
							
						</div>
					</div>
					
				</div>
			</div>		
			<!-- /Page Content -->
</template>
<script>
import { useStoreCheckOut } from '../../stores/StoreCheckout.js'
export default {
	name:'BookingConfirmation',
	data(){
		return{
			checkoutInfo:'',
		}

	},
	setup(){
		const checkoutStore = useStoreCheckOut()
		return{
			checkoutStore,
		}

	},
	async mounted(){
		this.checkoutInfo = await this.checkoutStore.getCheckOutInfo;
		console.log('Confirmation',this.checkoutInfo)
	},
	methods:{
		gotoDashboard(){
			this.$router.push({ name: 'PatientDashboard'});

		}
	}
}
</script>