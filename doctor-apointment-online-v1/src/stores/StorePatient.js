import { defineStore } from 'pinia'
import { getAllAppointmentList } from '../Services/userFirebase'
export const useStoreAppointment = defineStore('Appointment', {
  state() {
    return {
      appointmentInfo: null
    }
  },
  getters: {
    getAppointmentInfo() {
      if (this.appointmentInfo) {
        return this.appointmentInfo
      } else {
        return null
      }
    }
  },
  actions: {
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
   
  }
})