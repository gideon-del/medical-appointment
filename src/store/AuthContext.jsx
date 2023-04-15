import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
  user: {},
  profile: {},
  appointments: [],
  login: () => {},
  logout: () => {},
  showProfile: false,
  toggleProfile: () => {},
});

const AuthProvider = (props) => {
  const [user, setUser] = useState({});
  const [showProfile, setShowProfile] = useState(false);
  const login = (cred) => {
    setUser(cred);
  };
  const logout = () => {
    setUser({});
  };
  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        showProfile,
        toggleProfile,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
