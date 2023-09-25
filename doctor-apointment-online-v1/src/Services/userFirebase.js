import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import {
  collection,
  doc,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  where,
  query
} from 'firebase/firestore'
import { useFirestore, useFirebaseAuth, useCollection, useDocument } from 'vuefire'

export async function registerUser(email, password) {
  const auth = useFirebaseAuth()
  const cred = await createUserWithEmailAndPassword(auth, email, password)
  if (cred.user) {
    console.log('cred-user: ', cred.user)
    return cred.user
  } else {
    return null
  }
}

export async function updateUserProfile(displayName, photoURL) {
  const auth = useFirebaseAuth()

  await updateProfile(auth.currentUser, {
    displayName: displayName,
    photoURL: photoURL
  })

  return true
}

export async function registerDoctorProfile(doctorinfo) {
  const auth = useFirebaseAuth()
  let uid = ''
  console.log('doctorinfo', doctorinfo)
  await createUserWithEmailAndPassword(auth, doctorinfo.docEmail, doctorinfo.docPassword).then(
    (userCredential) => {
      uid = userCredential.user.uid
      // console.log('uid',userCredential.user.uid)
      //console.log('uid1',uid)
      updateProfile(auth.currentUser, {
        displayName: doctorinfo.displayname
      })
    }
  )
  return { id: uid, ...doctorinfo }
}

export async function addDoctorData(doctorInfo) {
  const db = useFirestore()
  const userRef = doc(db, 'doctorList', doctorInfo.id)
  await setDoc(userRef, doctorInfo)
}
// GetDoctorinfo
export async function getFireDoctorData(id) {
  const db = useFirestore()
  const docRef = doc(db, 'doctorList', id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  }

  return null
}

export async function addUserData(user) {
  const db = useFirestore()
  const userRef = doc(db, 'users', user.uid)
  await setDoc(userRef, user)
}

export async function loginUser(email, password) {
  const auth = getAuth()
  const cred = await signInWithEmailAndPassword(auth, email, password)
  //console.log('cred', cred);
  // console.log('cred.user', cred.user);
  return cred.user
}

export async function getUserData(id) {
  const db = useFirestore()
  const userRef = doc(db, 'users', id)
  const docSnap = await getDoc(userRef)
  const user = docSnap.data()
  return user
}
export async function signout() {
  const auth = useFirebaseAuth()
  signOut(auth)
    .then(() => {
      console.log('Log out Succcess')
    })
    .catch((error) => {
      console.log(error.message)
    })
}

export function getDoctorListFromFireStore() {
  const db = useFirestore()
  const todos = useCollection(collection(db, 'doctorList'))
  console.log('todos', todos.id)
  return todos
  /* const querySnapshot = await getDocs(collection(db, "cities", "SF", "landmarks"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
}); */
}

// Delete Docotr
export async function deleteFireUser(doctid) {
  console.log('DeleterFir', doctid)

  const db = useFirestore()

  const userRef = doc(db, 'doctorList', doctid)
  const docSnap = await getDoc(userRef)

  if (docSnap.exists()) {
    //await deleteDoc(docSnap);
    await deleteDoc(doc(db, 'doctorList', doctid))
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

export async function AddAppointmentInfo(appointmentInfo) {
  const db = useFirestore()
  const appoitnmentlist = doc(db, 'appointmentList', appointmentInfo.document_id)
  await setDoc(appoitnmentlist, appointmentInfo)
}

export async function getFirebaseDrWiseBookSlot(docid,slectiondate){
    let alldoctTimeSlot = []
    const db = useFirestore()
  const q = query(collection(db, 'appointmentList'), where('doctorId', '==', docid))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    //let doctInfo=  getFireDoctorData(doc.data().doctorId)
    alldoctTimeSlot.push({
      id: doc.data().document_id,
      appointmentDate: doc.data().appointmentDate,
      appointmentTime: doc.data().appointmentTime,
      bookingDate: doc.data().bookingDate, 
      selectedItemID: doc.data().selectedItemID, 
    })
  })
  return alldoctTimeSlot
}

export async function getAllAppointmentList(patientId) {
  let allAppointmentdata = []
  const db = useFirestore()
  const q = query(collection(db, 'appointmentList'), where('patientId', '==', patientId))
  const querySnapshot = await getDocs(q)
  console.log('querySnapshot', querySnapshot)
  querySnapshot.forEach((doc) => {
    //let doctInfo=  getFireDoctorData(doc.data().doctorId)
    allAppointmentdata.push({
      id: doc.data().document_id,
      doctorname: doc.data().docnname,
      docimageUrl: doc.data().imageUrl,
      specialization: doc.data().specialization,
      appointmentDate: doc.data().appointmentDate,
      appointmentTime: doc.data().appointmentTime,
      bookingDate: doc.data().bookingDate,
      totalAmount: doc.data().totalAmount,
      followupdate: '--',
      status: 'Pending',
      familyInfo: doc.data().familyInfo,
      dociSpecilaity: doc.data().dociSpecilaity,
      selectedItemID:doc.data().selectedItemID
    })
  })

  return allAppointmentdata

  /* 
   (async () => {
    //let doctInfo=  getFireDoctorData(doc.data().doctorId)
    allAppointmentdata.push({
     'id':doc.data().document_id,
     'doctorname':doc.data().docnname,
     'docimageUrl':doc.data().imageUrl,
     'specialization':doc.data().specialization,
     'appointmentDate':doc.data().appointmentDate,
     'appointmentTime':doc.data().appointmentTime,
     'bookingDate':doc.data().bookingDate,
     'totalAmount':doc.data().totalAmount,
     'followupdate':'--',
     'status':'Pending',
})()
}) */
}
