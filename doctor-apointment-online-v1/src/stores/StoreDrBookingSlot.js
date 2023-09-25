import { defineStore } from 'pinia'
import {
    getFirebaseDrWiseBookSlot,
   
  } from '../Services/userFirebase'
export const useStoredrBookSlot = defineStore('doctorbookingslot', {
  state() {
    return {
      docbookslot: null,
      
    }
  },
  getters: {
    getdoctWiseBookSlot() {
      if (this.docbookslot) {
        return this.docbookslot
      } else {
        return null
      }
    },
  },
  actions: {
     async storeGetDrWiseBookSlot(doctid,selectionDate) {
      this.docbookslot=null
      this.docbookslot = await getFirebaseDrWiseBookSlot(doctid,selectionDate)
     
    }
  }
})
