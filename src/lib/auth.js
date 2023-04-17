import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {auth, db} from '../firebase/firebaseConfig'
import { useAuth } from '../store/AuthContext';
import { setDoc } from 'firebase/firestore';
export const SignUp = async (cred) => {
  try {
    
    const res = await createUserWithEmailAndPassword(auth, cred.email, cred.password);
    return res
  } catch (error) {
    throw new Error(error.message)
  }
}

export const SignIn = async (cred) => {
  try {
    const res = await signInWithEmailAndPassword(auth, cred.email, cred.password)
    return res
  } catch (error) {
    throw new Error(error.message)
  }
}