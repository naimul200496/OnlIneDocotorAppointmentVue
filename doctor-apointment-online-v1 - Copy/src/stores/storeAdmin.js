import { defineStore } from 'pinia'
import {countqueryForAdminDasboard } from '../Services/userFirebase'
export const useStoreForAdmin = defineStore('adminStore', {
  state() {
    return {
      adminCountInfo: null,
    }
  },
  getters: {
    getAllCountInfo(){
      if(this.adminCountInfo){
        return this.adminCountInfo
      }
      else{
        null
      }
    }
  },
  actions: {
    async countInfo(){
      this.adminCountInfo=await countqueryForAdminDasboard()
    }
   
  }
})