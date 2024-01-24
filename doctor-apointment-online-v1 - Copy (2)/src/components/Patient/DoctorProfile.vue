<template>

    <!-- Basic Information -->
    <div style="margin-left: 250px; margin-top: 100px">
        <div  class="col-md-7 col-lg-8 col-xl-9">
         
            <div class="card">
              <div class="card-body">
               
                <h4 class="card-title">Basic Information</h4>
                <div class="row form-row">
                  
  
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Email</label>
                      <input type="email" v-model.trim="docEmail" class="form-control" disabled />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>First Name</label>
                      <input type="text" class="form-control" v-model.trim="docFirstName" disabled />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Last Name </label>
                      <input type="text" class="form-control" v-model.trim="docLastName" disabled />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Phone Number</label>
                      <input type="text" class="form-control" v-model.trim="docPhone" disabled />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Gender</label>
                      <input type="text" class="form-control" v-model.trim="docGender" disabled />
                     
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group mb-0">
                      <label>Date of Birth</label>
                      <input type="date" class="form-control" v-model="docDob" disabled />
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
                  <textarea class="form-control" rows="5" v-model="docBiography" disabled></textarea>
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
                                            <input type="text" v-model.trim="degree" class="form-control"  disabled>
                                        </div> 
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="form-group">
                                            <label>College/Institute</label>
                                            <input type="text" v-model.trim="institute" class="form-control" disabled >
                                        </div> 
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="form-group">
                                            <label>Year of Completion</label>
                                            <input type="text" class="form-control" v-model.trim="completionYear" disabled>
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
                      <input type="text" class="form-control" v-model="address1" disabled />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="control-label">Address Line 2</label>
                      <input type="text" class="form-control" v-model="address2" disabled />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="control-label">City</label>
                      <input type="text" class="form-control" v-model="city"  disabled/>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Country</label>
                      <input type="text" class="form-control" v-model="country"   disabled/>
                     
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label>State / Province</label>
                      <input type="text" class="form-control" v-model="state"  disabled/>
                     
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="control-label">Postal Code</label>
                      <input type="text" class="form-control" v-model="postalCode" disabled />
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
                                             <input type="text" class="form-control" v-model.trim="specialization" disabled />
                                        </div> 
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="form-group">
                                            <label>Pricing</label>
                                             <input type="number" class="form-control" v-model.trim="pricing" min="0"  disabled/>
                                        </div> 
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>


        </div>
      </div>

</template>
<script>
import { useStoreAddDoctor } from '../../stores/AddDoctorStore.js'
export default {
    name:'DoctorProfile',
    data(){
        return{
            
            docinfo:null,
            docEmail:'',
            docFirstName:'',
            docLastName:'',
            docPhone:'',
            docGender:'',
            docDob:'',
            docBiography:'',
            address1:'',
            address2:'',
            degree:'',
            institute:'',
            completionYear:'',
            city:'',
           provience:'',
            country:'',
            specialization:'',
          pricing:'',
            uid:'',
           imageUrl: '',
           
        }
    },
    props: {
    docid: {
      type: String,
      required: true
    }
  },
  setup(){
    const storeDoctInfo=useStoreAddDoctor()
    return {storeDoctInfo}

  },
  async mounted(){
    await this.storeDoctInfo.getDoctorDetail(this.docid)
    this.docinfo =this.storeDoctInfo.getDoctor
    this.docEmail=this.docinfo.docEmail,
    this.docFirstName=this.docinfo.docFirstName
    this.docLastName=this.docinfo.docLastName
    this.docPhone=this.docinfo.docPhone
    this.docGender=this.docinfo.docGender
    this.docDob=this.docinfo.docDob
    this.docBiography=this.docinfo.docBiography
    this.degree=this.docinfo.education[0]
    this.address1=this.docinfo.address[0]
    this.address2=this.docinfo.address[1]
    this.city=this.docinfo.city
    this.institute = this.docinfo.education[1]
    this.completionYear = this.docinfo.education[2]
    this.provience=this.docinfo.provience
    this.country=this.docinfo.country
    this.specialization=this.docinfo.specialization
    this.pricing= this.docinfo.pricing
           /*  docPhone=this.docinfo.
            docGender=this.docinfo.
            docDob=this.docinfo.
            docBiography=this.docinfo.
            address1:=this.docinfo.
            address2:=this.docinfo.
            address:=this.docinfo.
            city:=this.docinfo.
           
            provience=this.docinfo.
            country=this.docinfo.
          
          
            education:[],
           
            pricing:'',
            uid:'',
           
           
            imageUrl: '', */
    console.log('doctorprofile',this.docinfo)
  }
}
</script>