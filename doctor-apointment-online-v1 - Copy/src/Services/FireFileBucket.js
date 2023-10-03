import { useFirebaseStorage, useStorageFile } from 'vuefire';
import { getStorage, ref as storageRef , uploadBytes, getDownloadURL, deleteObject  } from 'firebase/storage';


/* import { ref as storageRef } from 'firebase/storage'
import { useFirebaseStorage, useStorageFile } from 'vuefire' */



/* export async function uploadDocImage(imageName, file) {
    debugger;
    const storage = useFirebaseStorage();
    const imageRef = ref(storage, `Images/doctor/${imageName}`);
    await uploadBytes(imageRef, file);
    const url = await getDownloadURL(imageRef);
    console.log(url)


    return url;
} */



export async function uploadPicture(file) {
  console.log(file)
  const storage = useFirebaseStorage()
  const mountainFileRef = storageRef(storage, `images/${file.name}`)
  console.log(mountainFileRef)
 
}