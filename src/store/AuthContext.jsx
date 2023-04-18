import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
  user: {},
  profile: {},
  appointments: [],
  login: () => {},
  logout: () => {},
  showProfile: false,
  toggleProfile: () => {},
  getProfile: () => {},
  loading: false,
  setLoading: () => {},
  setAppointmets: () => {},
});

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointmets] = useState([]);
  const login = (cred) => {
    setUser(cred);
  };
  const logout = () => {
    setUser(null);
    setProfile(null);
  };
  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };
  const getProfile = (prof) => {
    setProfile(prof);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        showProfile,
        toggleProfile,
        profile,
        getProfile,
        loading,
        setLoading,
        appointments,
        setAppointmets,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
