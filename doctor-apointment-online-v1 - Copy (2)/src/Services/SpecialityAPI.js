import axios from 'axios'
const apiClient =axios.create({
    baseURL: 'http://localhost:5036/api/SpecialityAPI/',
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
       // 'content-type': 'application/x-www-form-urlencoded',
        
    },
})
 export default {
   
    AddSpeciality(name,filename)
    {
        return apiClient.post('AddSpeciality?formFile='+filename+'&SpecialityName='+name )
    }
 }



//import userInfo from '../data/userinfo.json';
/* export function getUserInfo(){
    return userInfo;
} */

/* const apiClient = axios.create({
    baseURL:'http://localhost:8070',
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
})*/
/* export default {
    /* getWeatherForecast(){
        return apiClient.get('/WeatherForecast')
    } 
    ,
    test(){
        return apiClient.get ()
    },
    checkuserexist(){
        return apiClient.get('/CheckUserExist')
    } */ 

 /*   getUserInfo 
} */
 