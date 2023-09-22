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
     this.appointmentInfo= getAllAppointmentList(Info.uid);
        
    },
   
  }
})