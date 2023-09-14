import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signOut, 
    signInWithEmailAndPassword,
    updateProfile, 
} from "firebase/auth";

export async function loginUser(email, password) {
    const auth = getAuth();
    const cred = await signInWithEmailAndPassword(auth, email, password);
    console.log('cred', cred);
    console.log('cred.user', cred.user);
    return cred.user;
}