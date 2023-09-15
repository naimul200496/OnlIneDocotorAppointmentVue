import { defineStore } from 'pinia'
import { registerDoctorProfile,updateUserProfile,addDoctorData,
  getDoctorListFromFireStore,deleteFireUser } from '../Services/userFirebase'
  import {uploadPicture} from '../Services/FireFileBucket'




export const useStoreAddDoctor = defineStore('country', {
    state() {
      return {
       doctorInfo:[],
      }
    },
    getters:{
       
        getDoctorInfo(){
          if(this.doctorInfo)
          {return this.doctorInfo}
          else {return null}
        },
       getAllDoctorInfo(){
         // this.doctorInfo= await getDoctorListFromFireStore()
          return this.doctorInfo;

        },
        getHero() {
          return this.currentHero;
        }
    },
    actions: {
     async  registerDoctorProfileInfo(doctorInfo){
      this.doctorInfo= await registerDoctorProfile(doctorInfo)
      await updateUserProfile('Doctor', '')
      await addDoctorData(this.doctorInfo)
     
     },

      getAllDoctorList(){
   
      console.log('111',this.doctorInfo)
        
        this.doctorInfo =  getDoctorListFromFireStore()
     
       console.log('dcotorstore',this.doctorInfo)
     
      
     }
     , async DeleteDoctor(uuid){
       console.log('uuuu',uuid)

       await deleteFireUser(uuid)
       this.doctorInfo=null
       this.doctorInfo= await getDoctorListFromFireStore()
     },
     async uploadProfileImage(file) {
        
      const imageFilePath = `${self.crypto.randomUUID()}_${file.name}`;
      console.log('ImageName',imageFilePath)
      const url =  await uploadPicture(file);

      if(!url || url.length == 0) {
        return null;
      }
      
     /*  this.currentHero.image.url = url;

      await upsertHero(this.currentHero);
 */
      return url;
    },
      
    }
  })