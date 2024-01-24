import { defineStore } from 'pinia'
import {
  registerDoctorProfile,
  updateUserProfile,
  addDoctorData,
  getDoctorListFromFireStore,
  deleteFireUser,
  getFireDoctorData,addUserData,getdoctWiseApptInformation,getPateientName
} from '../Services/userFirebase'
import { uploadPicture } from '../Services/FireFileBucket'

export const useStoreAddDoctor = defineStore('country', {
  state() {
    return {
      doctorInfo: [],
      currentDoctor: null,
      family_member: null,
      doctwiseApptInfo:[],
    }
  },
  getters: {
    getDoctorInfo() {
      if (this.doctorInfo) {
        return this.doctorInfo
      } else {
        return null
      }
    },
    getAllDoctorInfo() {
      // this.doctorInfo= await getDoctorListFromFireStore()
      if (this.doctorInfo) {
        return this.doctorInfo
      } else {
        return null
      }
    },
    getDoctor() {
      return this.currentDoctor
    },
    getFamilyInfo() {
      return this.family_member
    },
    getDcotorWiseApptReport(){
      return this.doctwiseApptInfo
    }
  },
  actions: {
    //Docotr Dasboard Info
    
    async getAllPatinetApptInfo(user){
      let info=null
      this.doctwiseApptInfo=[]
      let todayPatient=[]
      let totalUpcomingPatient=[]
      let todayAppt=[]
      let upcommingApt=[]
      let pateintName=''
      //this.doctwiseApptInfo
      const d= new Date()
      const todayDate= d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2, "0")+'-'+String(d.getDate()).padStart(2, "0");
       info= await getdoctWiseApptInformation(user.uid)
      
        info.forEach((element) => {
          (async() => {
            pateintName =  await getPateientName(element.patientId);
          });
        
        if(element.appointmentDate == todayDate){
          todayAppt.push({
            appointmentDate:element.appointmentDate,
            appointmentTime:element.appointmentTime,
            bookingDate:element.bookingDate,
            familyInfo:element.familyInfo,
            patientId:element.patientId,
            pateintName:pateintName
          });
        }
        else if(new Date(element.appointmentDate) > new Date(todayDate)) {
          upcommingApt.push({
            appointmentDate:element.appointmentDate,
            appointmentTime:element.appointmentTime,
            bookingDate:element.bookingDate,
            familyInfo:element.familyInfo,
            patientId:element.patientId,
            pateintName:pateintName
          });
        }
       });
// Remove Duplicate Data
console.log('todayDate',todayDate)
console.log('todayAppt',todayAppt)
console.log('upcommingApt',upcommingApt)

const ids = info.map(({ patientId }) => patientId);
const filtered = info.filter(({ patientId }, index) =>
    !ids.includes(patientId, index + 1));

    todayPatient = info.filter((c) => new Date(c.appointmentDate)==new Date(todayDate));
    totalUpcomingPatient = info.filter((c) => new Date(c.appointmentDate)>new Date(todayDate));
    this.doctwiseApptInfo.push({
        todayAppt:todayAppt,
        upcommingApt:upcommingApt,
        totaPatient:filtered.length,
        todayPatient:todayPatient.length,
        totalUpcomingPatient:totalUpcomingPatient.length,
      });
      console.log('this.doctwiseApptInfo',this.doctwiseApptInfo)
      
      
    },

    // Set Famiy member.
    setFamilymember(familyinfo) {
      this.family_member = null
      this.family_member = familyinfo
      console.log('this.family_member', this.family_member)
    },

    async registerDoctorProfileInfo(doctorInfo) {
      this.doctorInfo = await registerDoctorProfile(doctorInfo)
      await updateUserProfile('Doctor', '')
      await addDoctorData(this.doctorInfo)
      const forUsers={ firstname: this.doctorInfo.docFirstName, 
        lastname: this.doctorInfo.docLastName,
        isactive: true,
        usertytpe:'Doctor',
        uid:this.doctorInfo.id,
      }
      await addUserData(forUsers)
},
    async getDoctorDetail(id) {
      console.log(id)
      const doctor = await getFireDoctorData(id)
      if (doctor) {
        this.currentDoctor = doctor
        return this.currentDoctor
      }
    },

    async getAllDoctorList() {
    
      this.doctorInfo = await getDoctorListFromFireStore()
     // console.log('this.doctorInfo',this.doctorInfo)
      
    },
    async DeleteDoctor(uuid) {
      console.log('uuuu', uuid)
      await deleteFireUser(uuid)
      this.doctorInfo = null
      this.doctorInfo = await getDoctorListFromFireStore()
    },
    async uploadProfileImage(file) {
      const imageFilePath = `${self.crypto.randomUUID()}_${file.name}`
      console.log('ImageName', imageFilePath)
      const url = await uploadPicture(file)

      if (!url || url.length == 0) {
        return null
      }
        return url
    }
  }
})
