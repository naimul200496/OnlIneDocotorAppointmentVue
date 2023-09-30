import { defineStore } from 'pinia'
import {
  registerDoctorProfile,
  updateUserProfile,
  addDoctorData,
  getDoctorListFromFireStore,
  deleteFireUser,
  getFireDoctorData
} from '../Services/userFirebase'
import { uploadPicture } from '../Services/FireFileBucket'

export const useStoreAddDoctor = defineStore('country', {
  state() {
    return {
      doctorInfo: [],
      currentDoctor: null,
      family_member: null
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
    }
  },
  actions: {
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
