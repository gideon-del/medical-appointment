import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./store/AuthContext";
import NotAuthHeader from "./components/NotAuthHeader";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Spinner from "./components/Spinner";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { getAppoitments } from "./lib/validation";

function App() {
  const {
    login,
    logout,
    profile,
    getProfile,
    setLoading,
    loading,
    appointments,
    setAppointmets,
  } = useContext(AuthContext);
  useEffect(() => {
    const listener = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          if (!profile) {
            const prof = await getDoc(doc(db, "profile", user.uid));
            getProfile(prof.data());
          }
          login(user);
          if (!appointments || appointments.length === 0) {
            const app = await getAppoitments(user.uid);
            setAppointmets(app);
          }
        } else {
          logout();
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    });
    return () => {
      listener();
    };
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <Outlet />
        </>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
