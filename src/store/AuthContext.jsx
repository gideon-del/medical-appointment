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
  selectedHospital: null,
  setSelectedHospital: () => {},
});

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointmets] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const login = (cred) => {
    setUser(cred);
  };
  const logout = () => {
    setUser(null);
    setProfile(null);
    setAppointmets([]);
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
        selectedHospital,
        setSelectedHospital,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
