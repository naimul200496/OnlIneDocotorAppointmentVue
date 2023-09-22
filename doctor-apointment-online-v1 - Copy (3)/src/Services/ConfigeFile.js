import axios from 'axios'
/* const apiClient =axios.create({
    baseURL: 'http://localhost:5036/api/OnlineAppointmentAPI/',
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
       // 'content-type': 'application/x-www-form-urlencoded',
        
    },
}) */

const apiClient =axios.create({
    baseURL: 'https://api.countrystatecity.in/v1/countries',
    headers:{
        'X-CSCAPI-KEY': 'cmRUR29sWFNrbXZtT3p1WE1FTWhicTJQUWlCYmxpNWlzOEJZUmI0Sg=='
        
    },
})

// For Country


 export default {

    // For Country Name
    getCountryName(){
        return apiClient.get()
    },
    getStateName(parameter){
        return apiClient.get(`/${parameter}/states`)
    },







    // Login API
    checkUserExist(email,password){
        return apiClient.get('CheckUserExist?email='+email+'&password='+password)
    },
    // Registration API
    AddUser(RegInfo)
    {
        return apiClient.post('AddUserInfo',JSON.stringify(RegInfo) )
    },
    // Add Speciality
    // Registration API
    AddSpeciality(SpecialityInfo)
    {
        return apiClient.post('AddUserInfo',JSON.stringify(SpecialityInfo) )
    }
 }

