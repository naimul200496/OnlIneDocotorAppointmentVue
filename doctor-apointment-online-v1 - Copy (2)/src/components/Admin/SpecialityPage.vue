<template>
    	<!-- Page Wrapper -->
        <div class="page-wrapper">
            <div class="content container-fluid">
            
                <!-- Page Header -->
                <div class="page-header">
                    <div class="row">
                        <div class="col-sm-7 col-auto">
                            <h3 class="page-title">Specialities</h3>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                                <li class="breadcrumb-item active">Specialities</li>
                            </ul>
                        </div>
                        <div class="col-sm-5 col">
                            <a href="#" @click="OpenCloseFun" data-toggle="modal" class="btn btn-primary float-right mt-2">Add</a>
                        </div>
                    </div>
                </div>
                <!-- /Page Header -->
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="datatable table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Specialities</th>
                                                <th class="text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>#SP001</td>
                                                
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="" class="avatar avatar-sm mr-2">
                                                            <img class="avatar-img" src="/img/specialities/specialities-01.png" alt="Speciality">
                                                        </a>
                                                        <a href="">Urology</a>
                                                    </h2>
                                                </td>
                                            
                                                <td class="text-right">
                                                    <div class="actions">
                                                        <a class="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_specialities_details">
                                                            <i class="fe fe-pencil"></i> Edit
                                                        </a>
                                                        <a  data-toggle="modal" href="#delete_modal" class="btn btn-sm bg-danger-light">
                                                            <i class="fe fe-trash"></i> Delete
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                           <!--  <tr>
                                                <td>#SP002</td>
                                                
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="profile.html" class="avatar avatar-sm mr-2">
                                                            <img class="avatar-img" src="/img/specialities/specialities-02.png" alt="Speciality">
                                                        </a>
                                                        <a href="profile.html">Neurology</a>
                                                    </h2>
                                                </td>
                                            
                                                <td class="text-right">
                                                    <div class="actions">
                                                        <a class="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_specialities_details">
                                                            <i class="fe fe-pencil"></i> Edit
                                                        </a>
                                                        <a  data-toggle="modal" href="#delete_modal" class="btn btn-sm bg-danger-light">
                                                            <i class="fe fe-trash"></i> Delete
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>	
                                            <tr>
                                                <td>#SP003</td>
                                                
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="profile.html" class="avatar avatar-sm mr-2">
                                                            <img class="avatar-img" src="/img/specialities/specialities-03.png" alt="Speciality">
                                                        </a>
                                                        <a href="profile.html">Orthopedic</a>
                                                    </h2>
                                                </td>
                                            
                                                <td class="text-right">
                                                    <div class="actions">
                                                        <a class="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_specialities_details">
                                                            <i class="fe fe-pencil"></i> Edit
                                                        </a>
                                                        <a  data-toggle="modal" href="#delete_modal" class="btn btn-sm bg-danger-light">
                                                            <i class="fe fe-trash"></i> Delete
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#SP004</td>
                                                
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="profile.html" class="avatar avatar-sm mr-2">
                                                            <img class="avatar-img" src="/img/specialities/specialities-04.png" alt="Speciality">
                                                        </a>
                                                        <a href="profile.html">Cardiologist</a>
                                                    </h2>
                                                </td>
                                            
                                                <td class="text-right">
                                                    <div class="actions">
                                                        <a class="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_specialities_details">
                                                            <i class="fe fe-pencil"></i> Edit
                                                        </a>
                                                        <a  data-toggle="modal" href="#delete_modal" class="btn btn-sm bg-danger-light">
                                                            <i class="fe fe-trash"></i> Delete
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#SP005</td>
                                                
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="profile.html" class="avatar avatar-sm mr-2">
                                                            <img class="avatar-img" src="/img/specialities/specialities-05.png" alt="Speciality">
                                                        </a>
                                                        <a href="profile.html">Dentist</a>
                                                    </h2>
                                                </td>
                                            
                                                <td class="text-right">
                                                    <div class="actions">
                                                        <a class="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_specialities_details">
                                                            <i class="fe fe-pencil"></i> Edit
                                                        </a>
                                                        <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                            <i class="fe fe-trash"></i> Delete
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr> -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>			
                </div>
            </div>			
        </div>
        <!-- /Page Wrapper -->
     
        <!-- Add Modal -->
			<div v-if="OpenClose" class="modal fade show" aria-modal="true" id="Add_Specialities_details" role="dialog" 
            style="display: block;">
				<div class="modal-dialog modal-dialog-centered" role="document" >
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Add Specialities</h5>
							<button type="button" @click="OpenCloseFun()" class="close" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
                            <slot>
							<form @submit.prevent="onSubmitSpeciality">
								<div class="row form-row">
									<div class="col-12 col-sm-6">
										<div class="form-group">
											<label>Specialitie Name</label>
											<input type="text" v-model="SpecalityName" class="form-control" required>
										</div>
									</div>
									<div class="col-12 col-sm-6">
										<div class="form-group">
											<label>Image</label>
											<input type="file" id="file"  v-on:change="handleFileUpload($event)" class="form-control">
										</div>
									</div>
									
								</div>
								<button type="submit" class="btn btn-primary btn-block">Save Changes</button>
							</form>
                        </slot>
						</div>
					</div>
				</div>
			</div>
			<!-- /ADD Modal -->
</template>
<script>

import ServicesApi from '../../Services/SpecialityAPI.js'
export default {
    name:'SpecialityPage',
    data(){
        return{
             OpenClose:this.visible,
             SpecalityName:'',
             file:''
        }
    },
  
props:{
    visible:Boolean,
    varriant: String,
},
methods:{
OpenCloseFun(){
    this.OpenClose=!this.OpenClose;
},
handleFileUpload(){
    this.file = event.target.files[0];
  },
  async onSubmitSpeciality(event) {
    if (!event.preventDefault()) {
       /*  let InputedData={
            Name:this.SpecalityName,
            fileName:this.file,
        } */
       // console.log(InputedData);
        await ServicesApi.AddSpeciality(this.SpecalityName,this.file)
          .then((response) => {
			if (response.status===200)
           {console.log('Reg', response)} 
            
          })
          .catch((error) => {
			this.error_status = true
			this.error_message = `Error Message Name:${error.name} [Message:${error.message}]`
			//console.log(this.error_message)
           // console.log(error)
          })
          this.OpenClose=false
    }
  }
},
watch:{
    visible:function(newVal,oldVal){
        this.OpenClose=newVal
        console.log('new val',newVal)
        console.log('oLD val',oldVal)
    }
}
}
</script>
<style></style>