import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signOut, 
    signInWithEmailAndPassword,
    updateProfile, 
} from "firebase/auth";
import { collection, doc, getDoc, setDoc, addDoc, updateDoc, deleteDoc,getDocs  } from 'firebase/firestore'
import { useFirestore, useFirebaseAuth,useCollection, useDocument } from 'vuefire'


export async function registerUser(email, password) {
    const auth = useFirebaseAuth();
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    if(cred.user) {
        console.log('cred-user: ',cred.user)
        return cred.user;
    } else {
        return null;
    }
}

export async function updateUserProfile(displayName, photoURL) {
    const auth = useFirebaseAuth();
    
    await updateProfile(auth.currentUser, {
            displayName: displayName, 
            photoURL: photoURL,
    });

    return true;
}

export async function registerDoctorProfile(doctorinfo) {
    const auth = useFirebaseAuth();
    let uid = ''
    console.log('doctorinfo',doctorinfo)
    await createUserWithEmailAndPassword(auth, doctorinfo.docEmail, doctorinfo.docPassword)
    .then((userCredential) => {
        uid = userCredential.user.uid
       // console.log('uid',userCredential.user.uid)
        //console.log('uid1',uid)
       updateProfile(auth.currentUser, {
      displayName: doctorinfo.displayname,
    });
  })
  return { id:uid, ...doctorinfo}

}

export async function addDoctorData(doctorInfo){
    const db = useFirestore();
    const userRef = doc(db, 'doctorList', doctorInfo.id);
    await setDoc(userRef, doctorInfo);
}
// GetDoctorinfo
export async function getFireDoctorData(id){
    const db = useFirestore();
    const docRef = doc(db,'doctorList', id);
    const docSnap = await getDoc(docRef);
    
    if(docSnap.exists()) {
        return docSnap.data();
    }

    return null;
}

export async function addUserData(user)  {
    const db = useFirestore();
    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, user);
    // const userRef = await addDoc(collection(db, 'users'), {
    //     id: user.id,
    //     firstName: user.firstName,
    //     lastName: user.lastName,
    //     timezone: user.timezone,
    //     language: user.language,
    //     role: ['superhero'],
    //     title: 'Super Hero',
    //     photoUrl: '',
    // });
}

export async function loginUser(email, password) {
    const auth = getAuth();
    const cred = await signInWithEmailAndPassword(auth, email, password);
    //console.log('cred', cred);
   // console.log('cred.user', cred.user);
    return cred.user;
}

export async function getUserData(id) {
    const db = useFirestore();
    const userRef = doc(db, 'users', id);
    const docSnap = await getDoc(userRef);
    const user = docSnap.data();
    return user
}
export async function signout() {
    const auth = useFirebaseAuth()
    signOut(auth).then(() => {
        console.log('Log out Succcess')
           
   }).catch((error) => {
    console.log(error.message)
});
}

export function getDoctorListFromFireStore(){
 
    const db = useFirestore();
    const todos =   useCollection(collection(db, 'doctorList'))
    console.log('todos',todos.id)
    return todos
    /* const querySnapshot = await getDocs(collection(db, "cities", "SF", "landmarks"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
}); */
}


// Delete Docotr 
export async function deleteFireUser(doctid)  {
    console.log('DeleterFir',doctid)

   
    const db = useFirestore();
   
    const userRef = doc(db, 'doctorList', doctid);
    const docSnap = await getDoc(userRef);

    if(docSnap.exists()) {
        //await deleteDoc(docSnap);
        await deleteDoc(doc(db, 'doctorList', doctid));
    }

    /* const userSnap = docSnap.data();
    console.log('userRef',userSnap) */

   
   /*  const db = useFirestore();
    const userRef =  doc(db,'doctorList', user.id);
    console.log('userRef',userRef)
    const userSnap = await getDoc(userRef); */
    
   /*  if(userSnap.exists()) {
        await deleteDoc(userRef);
    } */
}