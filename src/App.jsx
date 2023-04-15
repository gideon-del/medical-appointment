import Header from "./components/Header";

import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Map from "./components/Map";
import { useContext } from "react";
import { AuthContext } from "./store/AuthContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "hospital",
    element: <Map />,
  },
]);
function App() {
  const { showProfile } = useContext(AuthContext);
  return (
    <>
      <Header />

      <RouterProvider router={router} />
      {showProfile && <MedicalProfile />}

    </>
  );
}

export default App;
