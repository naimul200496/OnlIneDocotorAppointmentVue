<template>
    <div style="margin-left: 250px;margin-top: 100px;">
        <nav class="user-tabs mb-4">
            <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                <li class="nav-item">
                   
                </li>
                <li class="nav-item">
                   
                </li>
                <li class="nav-item">
                   
                </li>
                <li class="nav-item">
                    <button type="button"  class="btn btn-info" @click="AddDoctorItem()">Add</button>
                </li>
            </ul>
        </nav>
        <div class="card card-table mb-0">
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-hover table-center mb-0">
                    <thead>
                        <tr>
                            <th>Doctor Name</th>
                            <th>Specialization</th>
                            <th>Status</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="doctor in doctorList"  :key="doctor.id">
                            <td>
                                <h2 class="table-avatar">
                                    <a href="#" class="avatar avatar-sm mr-2">
                                        <img class="avatar-img rounded-circle" src="/img/doctor_default_image.jpg" alt="User Image">
                                    </a>
                                    <a href="#">Dr. {{ doctor.docFirstName }} {{ doctor.docLastName  }} <span>{{doctor.specialization}}</span></a>
                                </h2>
                            </td>
                            <td>{{doctor.specialization}}</td>
                            <td>{{doctor.isactive}}</td>
                            <td>{{doctor.docEmail}}</td>
                            <td>{{doctor.docPhone}}</td>
                           
                            <td>
                                <button type="button" class="btn btn-block btn-outline-info" 
                                data-toggle="modal">Edit</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-block btn-outline-danger"  @click="DeleteFunction(`${doctor.id}`)">Delete</button>
                            </td>
                        </tr>
                      
                    </tbody>
                </table>
            </div>
        </div>

    </div>
    </div>
    <!-- Add Modal -->
			<div v-if="OpenClose" class="modal fade show" aria-modal="true" id="Edit_doctor_details" role="dialog" 
            style="display: block;">
				<div class="modal-dialog modal-dialog-centered" role="document" >
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Are You sure you want to delete this?</h5>
							<button type="button" @click="closeFunction()" class="close" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
                           <form>
                            <slot>
							
								<div class="row form-row" >
									<div class="col-12 col-sm-6">
										<div class="form-group">
											<button type="submit" class="btn btn-primary btn-block" @click.prevent="confirm_delete()">Yes</button>
										</div>
									</div>
									<div class="col-12 col-sm-6">
										<div class="form-group">
											<button type="submit" class="btn btn-secondary btn-block" @click.prevent="closeFunction()">No</button>
										</div>
									</div>
									
								</div>
								
							
                        </slot>
                    </form>
						</div>
					</div>
				</div>
			</div>
			<!-- /ADD Modal -->
</template>
<script>
import {useStoreAddDoctor} from '../../stores/AddDoctorStore'
//import {getDoctorListFromFireStore} from '../../Services/userFirebase'
export default {
    name:'AddDoctor',
    data(){
        return{
            OpenClose:this.visible,
             SpecalityName:'',
             file:'',
             doctorList:null,
             doctorId:'',
             filterdataForEdit:''
        }
    },
    props:{
    visible:Boolean,
    varriant: String,
},

/* computed: {
    filterdata(){
        const t =  this.doctorList.filter((c)=>c.id = this.doctorId)
       
        return t;
    }
}, */
    
   methods:{
    DeleteFunction(iid){
        this.doctorId= iid;
        console.log('aaaassssssss',this.doctorId)
     // this.filterdataForEdit= this.filterdata;
       this.OpenClose=!this.OpenClose;
       // this.filterdataForEdit=this.doctorList.filter((c)=>c.id = this.doctorId)
       
       // const user1={id:this.doctorId}
        //console.log(user1)

},
async confirm_delete(){
   // const doctId={iid:this.doctorId}
    this.docotorInfo.DeleteDoctor(this.doctorId)
    this.doctorList = await this.docotorInfo.getAllDoctorInfo
    this.OpenClose=!this.OpenClose;
},
closeFunction(){this.OpenClose=!this.OpenClose;}
,

/* watch:{
    visible:function(newVal,oldVal){
        this.OpenClose=newVal
        console.log('new val',newVal)
        console.log('oLD val',oldVal)
    }
}, */
    AddDoctorItem(){
        this.$router.push({ name: 'AddDoctor' });

    }
   },
   setup(){
    const docotorInfo= useStoreAddDoctor();
    return  { docotorInfo };
   },
  mounted(){

    // Directly from firestor
   // this.doctorList= await getDoctorListFromFireStore()
   this.docotorInfo.getAllDoctorList()
   this.doctorList =  this.docotorInfo.getAllDoctorInfo
   console.log('sssssss',this.doctorList)

   }
   
}
</script>