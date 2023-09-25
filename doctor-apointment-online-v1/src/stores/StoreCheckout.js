import { defineStore } from 'pinia'
export const useStoreCheckOut = defineStore('ChekcOut', {
  state() {
    return {
      checkoutinfo: null,
      family_member:null,
    }
  },
  getters: {
    getCheckOutInfo() {
      if (this.checkoutinfo) {
        return this.checkoutinfo
      } else {
        return null
      }
    },
    
    getFamilyInfo() {
      return this.family_member;
    }
  },
  actions: {
     async storeCheckOutInfo(checkoutInfo) {
      this.checkoutinfo=null
      this.checkoutinfo = checkoutInfo
     
    },
    // Set Famiy member.
    setFamilymember(familyinfo){
      
      this.family_member=familyinfo
      console.log('this.family_member',this.family_member)
     },
  }
})
