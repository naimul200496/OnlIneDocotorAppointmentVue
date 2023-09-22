import { defineStore } from 'pinia'
export const useStoreCheckOut = defineStore('ChekcOut', {
  state() {
    return {
      checkoutinfo: null
    }
  },
  getters: {
    getCheckOutInfo() {
      if (this.checkoutinfo) {
        return this.checkoutinfo
      } else {
        return null
      }
    }
  },
  actions: {
     async storeCheckOutInfo(checkoutInfo) {
      this.checkoutinfo=null
      this.checkoutinfo = checkoutInfo
     
    }
  }
})
