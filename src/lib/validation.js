import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export function validateAppoint(appoint) {
    const date = new Date(appoint.createdAtDate).getTime() + (15 * 60 * 1000);
    const nextApp= new Date(appoint.createdAtDate).getTime()
  
    if(nextApp < date) return false
    return true
}

export async function getAppoitments(id) {
   const appointments = await getDoc(doc(db, 'appointments', id))
   return appointments.data()?.appointments || [] 
}