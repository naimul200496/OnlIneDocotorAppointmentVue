import { defineStore } from 'pinia'
const countryS= {
    country: {name:'Canada',Provience:['SK','LK','ML']},
}

const tr={"Country":[
    {id:'1', name:"Canada", Province:"SK,TO" },
    {id:'2',name:"USA", Province:"USHSS" },
    {id:'3',name:"Bangladesh", Province:"USHSS" },
    
  ]}


export const useStoreCountry = defineStore('country', {
    state() {
      return {
        country: null
      }
    },
    getters:{
        getCountry(){
            //this.country=countryS
            this.country=tr
            return this.country
        },
        getProvince(){
            this.country=countryS
            return this.country.Provience
        }
    }/* ,
    actions: {
         
      
    } */
  })
  