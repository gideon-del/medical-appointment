import { useNavigate } from "react-router-dom";
import { taoster } from "../lib/toaster";
import { getAppoitments } from "../lib/validation";
import { SignIn } from "../lib/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "../store/AuthContext";
const useLogin =  () => {
    const {setAppointmets,getProfile,login} = useAuth()
    const navigate = useNavigate()
    const loginUser =async (data) => {

        const { user } = await SignIn(data);
        const appoints = await getAppoitments(user.uid);
        setAppointmets(appoints);
        const prof = await getDoc(doc(db, "profile", user.uid));
        if (!prof.data()) {
            login(user);
            setTimeout(() => navigate("/create"), 500);
            return;
        }
        getProfile(prof.data());
        login(user);
        taoster({ state: "success", message: "Welcome back" });
        setTimeout(() => navigate("/profile"), 500);
    }
return loginUser
}

export default useLogin