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
  query,getCountFromServer,orderBy,
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

// Doctor Dashboard

export async function getdoctWiseApptInformation(uid){
  const db = useFirestore()
  let info=[] 
  const coll = collection(db, "appointmentList");
  const countAllAppointmentColl = query(coll, where("doctorId", "==", uid));
  const querySnapshot = await getDocs(countAllAppointmentColl)
  //const countAllPatientData = await getCountFromServer(countAllAppointmentColl);
 //const allPatient=countAllPatientData.data().count
 querySnapshot.forEach((doc)=>{
 info.push({
    appointmentDate:doc.data().appointmentDate,
    appointmentTime:doc.data().appointmentTime,
    bookingDate:doc.data().bookingDate,
    familyInfo:doc.data().familyInfo,
    patientId:doc.data().patientId,
   })
 })
 return info

/*   const countAllPatientColl = collection(db, "users");
  const countAllPatientData = await getCountFromServer(countAllPatientColl); */

 
}
export async function getPateientName(id){
  const db = useFirestore()
  let pateintName=null
  const q = query(collection(db, "users"), where("usertytpe", "==", 'Patient'), where("uid", "==", id));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
   pateintName=`${doc.data().firstname} ${doc.data().lastname}` 
});
return pateintName
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

export async function getDoctorListFromFireStore() {
  const db = useFirestore()
  const alldoctor=[]
  const querySnapshot = await getDocs(collection(db, "doctorList"));
  querySnapshot.forEach((doc) => {
    //let doctInfo=  getFireDoctorData(doc.data().doctorId)
    //console.log('doc.country',doc.data().country)
    alldoctor.push({
      address: doc.data().address,
      city: doc.data().city,
      country: doc.data().country,
      displayname: doc.data().displayname, 
      docBiography: doc.data().docBiography, 
      docDob: doc.data().docDob, 
      docEmail: doc.data().docEmail, 
      docFirstName: doc.data().docFirstName,
      docGender: doc.data().docGender,
      docLastName: doc.data().docLastName,
      docPassword: doc.data().docPassword,
      docPhone: doc.data().docPhone,
      education: doc.data().education, 
      id: doc.data().id, 
      imageUrl: doc.data().imageUrl,
      isactive: doc.data().isactive, 
      postalCode: doc.data().postalCode,
      pricing: doc.data().pricing, 
      provience: doc.data().provience,
      specialization: doc.data().specialization,     
    })
  })
  //console.log('alldoctor',alldoctor)
  return alldoctor
 /*  const todos = useCollection(collection(db, 'doctorList'))
  console.log('todos', todos.id)
  return todos */
  /* const querySnapshot = await getDocs(collection(db, "cities", "SF", "landmarks"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
}); 

 */
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
      payment: doc.data().payment,
      familyInfo: doc.data().familyInfo,
      dociSpecilaity: doc.data().dociSpecilaity,
      selectedItemID:doc.data().selectedItemID,
      appointmentStatus:doc.data().appointmentStatus
    })
  })
  allAppointmentdata.sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate));
  //console.log("descending", homes);

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

export async function getAllPatient(){
    const allPateint=[]
    const db = useFirestore()
   
    const q = query(collection(db, 'users'), where('usertytpe', '==', 'Patient'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc)=>{
        allPateint.push({
            patientName:`${doc.data().firstname} ${doc.data().lastname}`,
            uid:`${doc.data().uid}`
        })
    })
    return allPateint
}

export async function getAllAppointmentAdminDasboard() {
    let allAppointmentList = []
    const db = useFirestore()
   
    const querySnapshot = await getDocs(collection(db, "appointmentList"));
    querySnapshot.forEach((doc) => {
     //let doctInfo=  getFireDoctorData(doc.data().doctorId)
     allAppointmentList.push({
      id:doc.data().document_id,
       doctorname: doc.data().docnname,
        docimageUrl: doc.data().imageUrl,
        specialization: doc.data().specialization,
        appointmentDate: doc.data().appointmentDate,
        appointmentTime: doc.data().appointmentTime,
        bookingDate: doc.data().bookingDate,
        totalAmount: doc.data().totalAmount,
        followupdate: '--',
        status:doc.data().payment,
        familyInfo: doc.data().familyInfo,
        dociSpecilaity: doc.data().dociSpecilaity,
        patientId:doc.data().patientId,
        patientName:'',
        patientPhone:'',
        appointmentStatus:doc.data().appointmentStatus
       
      })
});
//console.log('Admin allAppointmentList:',allAppointmentList)
return allAppointmentList
   
  }
  export async function updateStatusFire(id,statusValue){
    const db = useFirestore()
   // const cityRef = db.collection('appointmentList').doc(id);

    // Set the 'capital' field of the city
   // const res = await cityRef.update({appointmentStatus: statusValue});
/* 
    const cityRef = doc(db, 'appointmentList', id);
    setDoc(cityRef, { appointmentStatus: statusValue }, { merge: true }); */

/////
const washingtonRef = doc(db, "appointmentList", id);

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, {
        appointmentStatus: statusValue
});
    
  }

  // For Admin Dashboard
  export async function countqueryForAdminDasboard(){
    const db = useFirestore()
    let allCountAdminData=null
    const countAllApointmentColl = collection(db, "appointmentList");
    const countAllApointmentData = await getCountFromServer(countAllApointmentColl);

    const countAllDoctorColl = collection(db, "doctorList");
    const countAllDoctorData = await getCountFromServer(countAllDoctorColl);

  /*   const countAllPatientColl = collection(db, "users");
    const countAllPatientData = await getCountFromServer(countAllPatientColl); */

    const coll = collection(db, "users");
    const countAllPatientColl = query(coll, where("usertytpe", "==", "Patient"));
    const countAllPatientData = await getCountFromServer(countAllPatientColl);


    const querySnapshot = await getDocs(collection(db, "appointmentList"));
    let totalAmt=0.00
    querySnapshot.forEach((doc)=>
    totalAmt=totalAmt+ parseFloat(doc.data().totalAmount)
    )

    allCountAdminData={
      allApointment:countAllApointmentData.data().count,
      totalDoctor:countAllDoctorData.data().count,
      totalPatient:countAllPatientData.data().count,
      totalAmt:totalAmt,
    }
    console.log('count: ', allCountAdminData);
    return allCountAdminData
  }