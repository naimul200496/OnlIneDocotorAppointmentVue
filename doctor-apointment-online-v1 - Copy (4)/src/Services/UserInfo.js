import { useFirebaseAuth,useFirestore} from 'vuefire'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from 'firebase/auth'
import { doc, setDoc,getDoc } from 'firebase/firestore'


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
   await signInWithEmailAndPassword(auth, loginemail,loginpassword, "Patient")
        .then((userCredential) => {
            /* const userinformation = userCredential.user
            useruid= {
                uid:userinformation.uid,
                email:loginemail,
            } */
           

            if(userCredential.user){return true;}
            else{return false;}
            

           
            // Geting userothers info
            //userinfo = getUserOtherInfo(user.uid,loginemail)
           
        })
        .catch((error) => {
            const errorCode = error.code
			console.log('errorCode',errorCode)
            const errorMessage = error.message
			console.log('ErrMessage',errorMessage)
			//this.error='ErrMessage' + errorMessage
            return false;
			
          })
      
}


export async function signout() {
    const auth = useFirebaseAuth()
    signOut(auth).then(() => {
        console.log('Log out Succcess')
           
   }).catch((error) => {
    console.log(error.message)
});
}

export async function getCurrentUserInfo(){
    const auth = useFirebaseAuth()
    const user = auth.currentUser;
    const db = useFirestore()
    let userInfo = null
    console.log('usertrrere',user)
    if(user){
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          //console.log("Firbase data:", docSnap.data());
          //console.log("FirstName",docSnap.data().FirstName)
          userInfo = {
            Id: user.uid,  
            FirstName : docSnap.data().FirstName,
            LastName:docSnap.data().LastName,
            Email:user.email,
            phone:docSnap.data().phone,
            IsActive:docSnap.data().isactive,
            usertype:docSnap.data().usertype,
            }
          } else {
            userInfo = {
                Id: user.uid,  
                FirstName : "",
                LastName:"",
                Email:user.email,
                phone:"",
                IsActive:docSnap.data().isactive,
                usertype:docSnap.data().usertype,
                }
          console.log("User Other Info Not Found!");
        }
    }
   
    
    return userInfo;

}