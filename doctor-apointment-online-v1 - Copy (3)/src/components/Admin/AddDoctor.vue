<template>

    <!-- Basic Information -->
    <div style="margin-left: 250px; margin-top: 100px">
        <div class="col-md-7 col-lg-8 col-xl-9">
          <form @submit.prevent="onSubmitDocotroInfo">
            <div class="card">
              <div class="card-body">
                <!--  <div v-if="success_message" class="alert alert-danger" role="alert">
                       {{ success_message }}
                     </div> -->
                <div
                  v-if="success_message"
                  class="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Success!</strong> {{ success_message }}
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <h4 class="card-title">Basic Information</h4>
                <div class="row form-row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <div class="change-avatar">
                        <div class="profile-img">
                          <img src="/img/doctors/doctor-01.jpg" alt="User Image" />
                          <!-- <img :src="docimage" alt="User Image" /> -->
                          
                        </div>
                        <div class="upload-img">
                          <div class="change-photo-btn">
                            <span @click.prevent="uploadClicked()"><i class="fa fa-upload"></i> Upload Photo</span>
                           
                          </div>
                          <small class="form-text text-muted"
                            >Allowed JPG, GIF or PNG. Max size of 2MB</small
                          >
                        </div>
                      </div>
                    </div>
                   
                  </div>
  
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Email <span class="text-danger">*</span></label>
                      <input type="email" v-model.trim="docEmail"  ref='docEmail' class="form-control" required />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>First Name <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" v-model.trim="docFirstName" required />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Last Name <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" v-model.trim="docLastName" required />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Phone Number</label>
                      <input type="text" class="form-control" v-model.trim="docPhone" required />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Gender</label>
                      <select class="form-control select" v-model.trim="docGender" required>
                        <option disabled>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group mb-0">
                      <label>Date of Birth</label>
                      <input type="date" class="form-control" v-model="docDob" required />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Basic Information -->
            <!-- About Me -->
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">About Me</h4>
                <div class="form-group mb-0">
                  <label>Biography</label>
                  <textarea class="form-control" rows="5" v-model="docBiography"></textarea>
                </div>
              </div>
            </div>
            <!-- /About Me -->
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Latest Education</h4>
                    <div class="education-info">
                        <div class="row form-row education-cont">
                            <div class="col-12 col-md-10 col-lg-11">
                                <div class="row form-row">
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="form-group">
                                            <label>Degree</label>
                                            <input type="text" class="form-control" v-model.trim="degree">
                                        </div> 
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="form-group">
                                            <label>College/Institute</label>
                                            <input type="text" class="form-control" v-model.trim="institute">
                                        </div> 
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="form-group">
                                            <label>Year of Completion</label>
                                            <input type="text" class="form-control" v-model="yearofcompletion">
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
  
            <!-- Contact Details -->
            <div class="card contact-card">
              <div class="card-body">
                <h4 class="card-title">Contact Details</h4>
                <div class="row form-row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Address Line 1</label>
                      <input type="text" class="form-control" v-model.trim="address1" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="control-label">Address Line 2</label>
                      <input type="text" class="form-control" v-model.trim="address2" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="control-label">City</label>
                      <input type="text" class="form-control" v-model.trim="city" required />
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Country</label>
                      <select class="form-control select"  v-model="selectedCountry" @change='selectCountry()'>
                        <option disabled>Select</option>
                        <option
                        v-for='country in countries'
                        :key='country.id'
                        :value='country'>
                        {{ country.name }}
                        
                        </option>
                      </select>
                      <div>Selected: {{ selectedcountry }}</div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label>State / Province</label>
                      <select class="form-control select" v-model="selectedState" @change="selectState">
                        <option disabled>Select</option>
                        <option
                        v-for='state in states'
                        :key='state.id'
                        :value='state'>
                        {{ state.name }}
                        
                        </option>
                      </select>
                      <div>Selected: {{ selectedcountry }}</div>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="control-label">Postal Code</label>
                      <input type="text" class="form-control" v-model.trim="postalCode" />
                    </div>
                  </div>



                </div>
              </div>
            </div>
            <!-- /Contact Details -->
  
            <!-- Services and Specialization -->

            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Specialization & Pricing</h4>
                    <div class="education-info">
                        <div class="row form-row education-cont">
                            <div class="col-12 col-md-10 col-lg-11">
                                <div class="row form-row">
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="form-group">
                                            <label>Specialization </label>
                                             <input type="text" class="form-control" v-model.trim="specialization" />
                                        </div> 
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="form-group">
                                            <label>Pricing</label>
                                             <input type="number" class="form-control" v-model.trim="pricing" min="0" />
                                        </div> 
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>


<!-- 
            <div class="form-group mb-0">
              <label>Specialization </label>
              <input type="text" class="form-control" v-model.trim="specialization" />
            </div> -->

            <!-- <div class="form-group">
                <label>Services</label>
                <div class="bootstrap-tagsinput"> <span class="tag badge badge-info">asdsa<span data-role="remove"></span></span> <span class="tag badge badge-info">sadsad<span data-role="remove"></span></span> <span class="tag badge badge-info">sadsa<span data-role="remove"></span></span> <span class="tag badge badge-info">sdsa<span data-role="remove"></span></span> <input type="text" placeholder="Enter Services" size="14"></div><input type="text" data-role="tagsinput" class="input-tags form-control" placeholder="Enter Services" name="services" value="Tooth cleaning " id="services" style="display: none;">
                <small class="form-text text-muted">Note : Type &amp; Press enter to add new services</small>
            </div> -->
  
            <div class="submit-section submit-btn-bottom">
              <button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
            </div>
          </form>
        </div>
      </div>

</template>
<script>

import { useStoreAddDoctor } from '../../stores/AddDoctorStore'
import { useFileDialog } from '@vueuse/core'
import ServicesApi from '../../Services/ConfigeFile.js'

export default {
    data(){
        return{
            docEmail:'',
            docFirstName:'',
            docLastName:'',
            docPhone:'',
            docGender:'',
            docDob:'',
            docBiography:'',
            address1:'',
            address2:'',
            address:[],
            city:'',
            selectedState:'',
            provience:'',
            country:'',
            selectedCountry:'',
            countryList:[],
            postalCode:'',
            education:[],
            degree:'',
            institute:'',
            yearofcompletion:'',
            pricing:'',
            uid:'',
           
            success_message:'',
            imageUrl: '',
            countries: [],
            countryIso2: "",
            states: [],
                

        }
    },
    mounted(){
        this.onChange((files) => {
                this.uploadImage(files[0]);
            });
       
     
        ServicesApi.getCountryName()
        .then((response)=>{
            this.countries=response.data
				console.log('dattt:',response.data)
			})
			.catch((error)=>{
				console.log(error)
			})

    },
    setup(){
    const docotorAddStore= useStoreAddDoctor();
    const { open, onChange } = useFileDialog();
    return  { docotorAddStore,open, onChange };
  },
  methods:{
    async onSubmitDocotroInfo(event) {
        if (!event.preventDefault()){
            const doctorinfo={
                docEmail:this.docEmail,
                docPassword:'Welcome1',
                displayname:'Doctor',
                docFirstName:this.docFirstName,
                docLastName:this.docLastName,
                docPhone:this.docPhone,
                docGender:this.docGender,
                docDob:this.docDob,
                docBiography:this.docBiography,
                address:[this.address1,this.address2],
                city:this.city,
                provience:this.provience,
                country:this.country,
                postalCode:this.postalCode,
                specialization:this.specialization,
                imageUrl:this. imageUrl,
                isactive:'Active',
                education:[this.degree,this.institute,this.yearofcompletion],
                pricing:this.pricing,
            
            }
           
           //console.log('toadd',doctorinfo)
         await this.docotorAddStore.registerDoctorProfileInfo(doctorinfo);
         const data=this.docotorAddStore.getDoctorInfo
           if(data.displayname){
          await this.$refs.docEmail.focus();
            this.success_message = `${data.displayname} added Successfully`
           }
             
        
        }

    }
    , 
    uploadClicked() {
        this.open({ accept: 'image/*', multiple: false });
     },
     async uploadImage(image) {
        console.log(image)
        this.imageUrl = await this.docotorAddStore.uploadProfileImage(image);
      },
      async selectCountry() {
        this.countryIso2 = await this.selectedCountry.iso2
        this.country =  this.selectedCountry.name
        if(!this.selectedCountry.name)
        {this.country =  ''}
        
        this.states = [];
        ServicesApi.getStateName(this.countryIso2)
        .then((response)=>{
            this.states=response.data
				console.log('state:',response.data)
			})
			.catch((error)=>{
				console.log(error)
			})
        
      },
      async selectState() {
        if(!this.selectedState.name)
        {this.provience = ''}
        this.provience = this.selectedState.name
      }
  }
    
}
</script>