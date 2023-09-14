import { useFirebaseStorage, useStorageFile } from 'vuefire';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject  } from 'firebase/storage';

export async function uploadDocImage(imageName, file) {
    debugger;
    const storage = useFirebaseStorage();
    const imageRef = ref(storage, `Images/doctor/${imageName}`);
    await uploadBytes(imageRef, file);
    const url = await getDownloadURL(imageRef);
    console.log(url)

  /*   uploadBytes(imageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!',snapshot);
      });
      const url = await getDownloadURL(imageRef); */

    return url;
}