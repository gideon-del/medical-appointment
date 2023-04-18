import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./store/AuthContext";
import NotAuthHeader from "./components/NotAuthHeader";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Spinner from "./components/Spinner";

function App() {
  const { user, login, logout, profile, getProfile, setLoading, loading } =
    useContext(AuthContext);
  useEffect(() => {
    const listener = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        login(user);
        if (!profile) {
          const prof = await getDoc(doc(db, "profile", user.uid));
          getProfile(prof.data());
        }
      } else {
        logout();
      }
      setLoading(false);
    });
    return () => {
      listener();
    };
  }, []);
  return (
    <>
      {user ? <Header /> : <NotAuthHeader />}
      {loading && <Spinner />}
      <Outlet />
    </>
  );
}

export default App;
