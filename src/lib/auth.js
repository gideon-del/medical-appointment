import {createUserWithEmailAndPassword } from 'firebase/auth'
import {auth, db} from '../firebase/firebaseConfig'
import { useAuth } from '../store/AuthContext';
import { setDoc } from 'firebase/firestore';
export const SignUp = async (cred) => {
  const res = await createUserWithEmailAndPassword(auth, cred.email, cred.password);

  return res
}