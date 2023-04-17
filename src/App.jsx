import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./store/AuthContext";
import NotAuthHeader from "./components/NotAuthHeader";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const { user, login, logout, profile, getProfile } = useContext(AuthContext);
  useEffect(() => {
    const listener = onAuthStateChanged(auth, async (user) => {
      if (user) {
        login(user);
        if (!profile) {
          const prof = await getDoc(doc(db, "profile", user.uid));
          getProfile(prof.data());
          return;
        }
      } else {
        logout();
        return;
      }
    });
    return () => {
      listener();
    };
  }, []);
  return (
    <>
      {user ? <Header /> : <NotAuthHeader />}

      <Outlet />
    </>
  );
}

export default App;
