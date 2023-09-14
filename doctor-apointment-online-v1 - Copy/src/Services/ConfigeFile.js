import axios from 'axios'
const apiClient =axios.create({
    baseURL: 'http://localhost:5036/api/OnlineAppointmentAPI/',
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
       // 'content-type': 'application/x-www-form-urlencoded',
        
    },
})
 export default {
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

