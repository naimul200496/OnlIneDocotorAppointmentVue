export function GetWeekByDate(passDate){
   
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //let d2=  dateSubtractFromCurrentdate("2023-09-14",-1);
  
      
    let dt=passDate;
    let currentDate = dateSubtractFromCurrentdate(dt,-1);
    const currentDay=currentDate.getDay();
  
    
    const literalArray=[];
    let j=0;
    
    for(let i=0;i<currentDay;i++){
        
        if(i>0){
            let temdate= dateSubtractFromCurrentdate(dt,j);
             let dateString=temdate.getFullYear()+'-'+String(temdate.getMonth()+1).padStart(2, "0")+'-'+String(temdate.getDate()).padStart(2, "0");
            //console.log(temdate.getFullYear()+'-'+String(temdate.getMonth()).padStart(2, "0")+'-'+String(temdate.getDate()));
            literalArray.push({'Date':dateString,'Day':temdate.getDay(),'DayName':days[temdate.getDay()]});
           // console.log('x1',dateSubtractFromCurrentdate(dt,j))
    
            j++;
        }
        
    }
    let len=6;
    if(currentDay===0){len=7;}
    j=1;
    for(let i=currentDay;i<len;i++){
      
      if(i>0){
        let temdate=dateAddedFromCurrentdate(dt,j)
        //console.log(temdate.getFullYear()+'-'+String(temdate.getMonth()).padStart(2, "0")+'-'+temdate.getDate());
        let dateString=temdate.getFullYear()+'-'+String(temdate.getMonth()+1).padStart(2, "0")+'-'+String(temdate.getDate()).padStart(2, "0");
       // console.log('j',j)
       // console.log('dateString',dateString)
        literalArray.push({'Date':dateString,'Day':temdate.getDay(),'DayName':days[temdate.getDay()]});
        //console.log('x2',dateAddedFromCurrentdate(dt,j))
            j++; 
       
      }
    }
    const sortedProducts = literalArray.sort((firstItem, secondItem) => firstItem.Day - secondItem.Day);
   return sortedProducts;
}


function dateSubtractFromCurrentdate(p,diffDate)
{
    let x1 = new Date(p); 
    x1.setDate(x1.getDate() - diffDate)
    return x1;
}
function dateAddedFromCurrentdate(p,diffDate)
{
    let x1 = new Date(p); 
    x1.setDate(x1.getDate() + diffDate)
    return x1;
}