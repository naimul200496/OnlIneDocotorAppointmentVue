import { defineStore } from 'pinia'
import { getAllAppointmentList,getAllAppointmentAdminDasboard,getAllPatient,updateStatusFire } from '../Services/userFirebase'
export const useStoreAppointment = defineStore('Appointment', {
  state() {
    return {
      appointmentInfo: null,
      appointmentdataForadmin:[]
    }
  },
  getters: {
    getAppointmentInfo() {
      if (this.appointmentInfo) {
        return this.appointmentInfo
      } else {
        return null
      }
    },
    getAllAppointmentDataAdmin(){
     if(this.appointmentdataForadmin){
      return this.appointmentdataForadmin
     }else{
      return null
     }
    }
  },
  actions: {
    // For Admin
    async updateStatus(id,statusValue){
     let result=await updateStatusFire(id,statusValue)
    },
     async getAllAppointmentInfo(Info) {
     let data1= await getAllAppointmentList(Info.uid);
     //console.log('data1',data1)
     if(data1){
     this.appointmentInfo=data1
      return true;
     }
     else{
      return false;
     }
        
    },

    async getAllAppointmentForAdmin(){
      let dataSetAppointment= await getAllAppointmentAdminDasboard()
      let tempdataSetAppointment =  dataSetAppointment
      let dataSetPateint = await getAllPatient()
      tempdataSetAppointment.forEach((dataset1)=>{
        dataSetPateint.forEach((dataset2)=>{
          if(dataset1.patientId===dataset2.uid){
             for(let object of dataSetAppointment){
              object.patientName=dataset2.patientName
             }
          }
          })
      })
     // console.log('dataSetPateint',dataSetAppointment)
      this.appointmentdataForadmin=dataSetAppointment
      
    }
   
  }
})