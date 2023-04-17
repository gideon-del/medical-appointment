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
});

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [profile, setProfile] = useState(null);
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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
