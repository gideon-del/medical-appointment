import Header from "./components/Header";
import { appointment } from "./data/appointment";
import AppointmentConfirmation from "./pages/AppointmentConfirmation";
// import Appointment from "./pages/Appointment";

function App() {
  return (
    <>
      <Header />
      <AppointmentConfirmation appointment={appointment} />
      {/* <Appointment /> */}
    </>
  );
}

export default App;
