import { useFirebaseAuth,useFirestore,useDocument} from 'vuefire'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,} from 'firebase/auth'
import { doc, setDoc,collection } from 'firebase/firestore'


// Firbase User Atuthentication user creation process
export async function CreateUser(eamiladdress,userpassword,userotherinfo){
    const auth = useFirebaseAuth();
    await createUserWithEmailAndPassword(auth, eamiladdress, userpassword)
    .then((userCredential) => {
        createUserOtherInfo(userCredential.user.uid,userotherinfo);
        return true;
    })
    .catch((error) => {
       const errorMessage = error.message;
        console.log('ErrorMes',errorMessage)
        console.log('ErrorCode',error.code)
        return false
        // ..
    });
}
// User Other Infomration Create Or Update
export async function createUserOtherInfo(useruid,userotherinfo){
    
    const db = useFirestore()  
    await setDoc(doc(db, 'users', useruid), {
        FirstName: userotherinfo.FirstName,
        LastName: userotherinfo.LastName,
        isactive: userotherinfo.IsActive,
        phone:userotherinfo.Phone,
        usertype:'admin',
      });

}
// Get User Info
export async function getuserInfo(loginemail,loginpassword){
    
    const auth = useFirebaseAuth()
    let useruid=null
    await signInWithEmailAndPassword(auth, loginemail,loginpassword)
        .then((userCredential) => {
            const userinformation = userCredential.user
            useruid= {
                uid:userinformation.uid,
                email:loginemail,
            }

           //console.log('lett1',lett1)
            // Geting userothers info
            //userinfo = getUserOtherInfo(user.uid,loginemail)
           
        })
        .catch((error) => {
            const errorCode = error.code
			console.log('errorCode',errorCode)
            const errorMessage = error.message
			console.log('ErrMessage',errorMessage)
			//this.error='ErrMessage' + errorMessage
            
			
          })
      // console.log('useruid',useruid)
        return useruid;  
}

export async function getUserOtherInfo(user_uid,emailid){
 
    console.log('user_uid',user_uid)
    
    let userInfo = null;
    const db = useFirestore() // Connect Firstore Database
    const responseData =  await useDocument(doc(collection(db, 'users'),user_uid))
    console.log('F:',responseData._rawValue.FirstName)
    userInfo={
        Id: user_uid,  
        FirstName : responseData._rawValue.FirstName,
        LastName : responseData._rawValue.LastName,
        Email:emailid,
        phone:responseData._rawValue.phone,
        IsActive:responseData._rawValue.isactive,
    }
    
    console.log(responseData)
	/* if(responseData._rawValue.isactive){
        userInfo={
        Id: user_uid,  
        FirstName : responseData._rawValue.LastName,
        LastName:responseData._rawValue.FirstName,
        Email:emailid,
        phone:responseData._rawValue.Phone,
        IsActive:responseData._rawValue.isactive,
        }
    } */
    return userInfo;
}