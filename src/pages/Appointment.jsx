import { useState } from "react";
import Select from "react-select";
import InputBox from "../components/shared/InputBox";
import { hospital, medicalDepartment } from "../data/medical_department";
import { stateOptions } from "../data/stateOptions";
import Selectss from "../components/shared/Selectss";
import { Controller, useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Navigate, useNavigate } from "react-router-dom";
import { validateAppoint } from "../lib/validation";
import RequireAuth from "../components/RequireAuth";
import { taoster } from "../lib/toaster";
import { useEffect } from "react";
// TODO::1. Medical department, hospital, specialist physician, date and time of appointment
const Appointment = () => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const { selectedHospital, setSelectedHospital } = useContext(AuthContext);
  const { control, register, handleSubmit } = useForm();
  const { setLoading, setAppointmets, user, appointments } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleStateChange = (option) => {
    const state = stateOptions.find((state) => state.value === option.value);
    setSelectedState(state);
    setSelectedArea(null);
  };
  const handleAreaChange = (option) => {
    setSelectedArea(option);
  };

  const handleMedicalDepartmentChange = (option) => {
    const department = medicalDepartment.find(
      (department) => department.name === option.name
    );
    setSelectedDepartment(department);
  };

  const handleHospitalChange = (option) => {
    setSelectedHospital(option);
  };

  const stateSelectOptions = stateOptions.map((state) => ({
    value: state.value,
    label: state.label,
  }));

  const areaSelectOptions =
    selectedState && selectedState.areas
      ? selectedState.areas.map((area) => ({
          value: area,
          label: area,
        }))
      : [];

  const departmentSelectOptions = medicalDepartment.map((department) => ({
    value: department.name.toLowerCase(),
    label: department.name,
  }));

  const hospitalSelectOptions = hospital.map((hospital) => ({
    value: hospital.name.toLowerCase(),
    label: hospital.name,
  }));
  if (appointments.length > 0) {
    let canMakeAppointMent = validateAppoint(
      appointments[appointments.length - 1]
    );
    if (!canMakeAppointMent) {
      taoster({
        state: "error",
        message: "You  must wait 15 Minute to make another appointment",
      });
      return <Navigate to="/profile" />;
    }
  }
  const submitHandler = async (data) => {
    try {
      const date = new Date();
      const appointment = {
        ...data,
        createdAtDate: date.getTime(),
      };
      setLoading(true);
      await setDoc(doc(db, "appointments", user.uid), {
        appointments: [...appointments, appointment],
      });
      setAppointmets((prev) => [...prev, appointment]);

      navigate("/profile");
      setLoading(false);
    } catch (error) {}
  };
  return (
    <RequireAuth>
      <section className="bg-[#E2E8F0] min-h-screen w-full pt-10 font-workSans">
        <div className="text-center">
          <h1 className="md:text-3xl text-2xl text-black font-semibold">Doctor Appointment Form</h1>
        </div>

        <hr className="my-2" />

        {/* form to handle the request for appointment */}
        <form
          className="md:px-28 md:py-8 max-w-4xl mx-auto flex flex-col gap-4 w-fit px-4 py-2 bg-white rounded-2xl"
          onSubmit={handleSubmit(submitHandler)}
        >
        <div className="flex flex-col gap-4">
            <label
              className="block md:inline text-gray-700 font-bold mb-2 mr-6"
              htmlFor="state-select"
            >
              Hospital Name
            </label>
            <Controller
              name="hospital"
              control={control}
              render={({ field: { value } }) => (
                <input
                  type="text"
                  className="p-2 rounded text-white font-semibold bg-gray-500"
                  value={selectedHospital.name}
                  disabled
                />
              )}
              defaultValue={selectedHospital.name}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label
              className="block md:inline text-gray-700 font-bold mb-2 mr-6"
              htmlFor="state-select"
            >
              Hospital Address
            </label>
            <Controller
              name="address"
              control={control}
              render={({ field: { value } }) => (
                <input
                  type="text"
                  className="p-2 rounded text-white font-semibold bg-gray-500"
                  value={selectedHospital.vicinity}
                  disabled
                />
              )}
              defaultValue={selectedHospital.vicinity}
            />
          </div>
          <div className="flex flex-col w-fit max-auto rounded gap-8 ">
            <InputBox
              width={"full"}
              label={"Appointment date"}
              id={"name"}
              type={"date"}
              placeholder={"Enter your full name"}
              isRequired={true}
              register={register}
            />
            <div className="flex flex-col gap-0 max-w-sm">
              <label
                htmlFor="time"
                className="block md:inline text-gray-700 font-bold "
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                {...register("time", {
                  required: true,
                })}
                className=" text-black p-2 max-w-md border border-gray-200 shadow-xl rounded"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="state-select"
              >
                Which department would you like to get an appointment from?
              </label>

              <Controller
                name="department"
                control={control}
                render={({ field: { value, ref, onChange } }) => (
                  <Select
                    className="basic-single text-black max-w-md"
                    classNamePrefix="select"
                    isLoading={isLoading}
                    isClearable={isClearable}
                    isSearchable={isSearchable}
                    ref={ref}
                    id="department-select"
                    options={departmentSelectOptions}
                    value={departmentSelectOptions.find(
                      (dep) => dep.value === value
                    )}
                    onChange={(val) => onChange(val.value)}
                    placeholder="Choose a medical department..."
                  />
                )}
                defaultValue={""}
                rules={{
                  required: true,
                }}
              />
            </div>
            <div className=" flex gap-2 flex-col ">
              <label
                className=" block md:inline text-gray-700 font-bold mb-2 "
                htmlFor="appointment_details"
              >
                Can you tell us how you feel
              </label>
              <textarea
                id="appointment_details"
                className="md:shadow aspect-square appearance-none border rounded max-w-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full max-h-52"
                {...register("reason", {
                  required: true,
                })}
                required={true}
              ></textarea>
            </div>
            <div className="flex flex-col gap-4 text-black">
              <p className="block md:inline text-gray-700 font-bold mb-2 mr-6">
                Would you agree to reschedule the appointment, if needed?
              </p>
              <div className="flex gap-4 items-center">
                <input
                  type="radio"
                  id="yes"
                  value="yes"
                  {...register("reschedule", {
                    required: true,
                  })}
                />
                <label htmlFor="yes">Yes</label>
              </div>
              <div className="flex gap-4 items-center">
                <input
                  type="radio"
                  id="no"
                  {...register("reschedule", {
                    required: true,
                  })}
                  value="no"
                />
                <label htmlFor="no">No</label>
              </div>
            </div>
          </div>
          <div className="mx-4 my-2">
            <button
              className=" w-full bg-[#0E63F4]  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-full  md:mx-4 focus:outline-none focus:shadow-outline max-w-sm"
              type="submit"
            >
              Fix Appointment
            </button>
          </div>
        </form>
      </section>
    </RequireAuth>
  );
};

export default Appointment;
