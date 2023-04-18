import { useState } from "react";
import Select from "react-select";
import InputBox from "../components/shared/InputBox";
import { hospital, medicalDepartment } from "../data/medical_department";
import { stateOptions } from "../data/stateOptions";
import Selectss from "../components/shared/Selectss";
import { useForm } from "react-hook-form";

// TODO::1. Medical department, hospital, specialist physician, date and time of appointment
const Appointment = () => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const { control, register, handleSubmit } = useForm();
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

  return (
    <>
      <section className="min-h-screen w-full">
        <div className="text-center mt-20 md:mt-20">
          <h1 className="md:text-3xl text-2xl">Doctor Appointment Form</h1>
        </div>

        <hr className="my-2" />

        {/* form to handle the request for appointment */}
        <form className="md:px-8 md:py-8">
          <div className="grid grid-cols-1 mx-4 md:border border-4-[#0E63F4] rounded gap-8 md:px-8 md:py-8">
            <InputBox
              width={"full"}
              label={"Appointment date"}
              id={"name"}
              type={"date"}
              placeholder={"Enter your full name"}
              isRequired={true}
            />
            <div className="mb-4 md:flex gap-4">
              <p className="block md:inline text-gray-700 font-bold mb-2 mr-6">
                Time Interval
              </p>
              <input
                type="radio"
                id="morning"
                name="morning"
                value="morning"
                className="mx-2"
              />
              <label className="mx-2" htmlFor="Morning">
                Morning
              </label>
              <br />
              <input
                type="radio"
                id="afternoon"
                name="afternoon"
                value="afternoon"
                className="mx-2"
              />
              <label className="mx-2" htmlFor="Afternoon">
                Afternoon
              </label>
              <br />
              <input
                type="radio"
                id="evening"
                name="evening"
                value="evening"
                className="mx-2"
              />
              <label className="mx-2" htmlFor="Evening">
                Evening
              </label>
              <br />
            </div>
            <div className="mb-4 md:flex gap-4">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="state-select"
              >
                Choose a state
              </label>
              <Selectss
                options={stateOptions}
                isLoading={isLoading}
                isClearable={isClearable}
                isSearchable={isSearchable}
                name="state"
                id="state"
                control={control}
                selectedVal={selectedState}
                handleChange={handleStateChange}
                placeholder="Choose a state..."
              />
              {selectedState && (
                <div className="flex gap-2">
                  <label
                    className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                    htmlFor="area-select"
                  >
                    Select Area:
                  </label>
                  <Select
                    id="area-select"
                    options={areaSelectOptions}
                    value={selectedArea}
                    onChange={handleAreaChange}
                    placeholder="Choose an area..."
                  />
                </div>
              )}
            </div>
            <div className="mb-4 md:flex gap-4">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="state-select"
              >
                Which hostipal would you like to get an appointment from?
              </label>
              <Select
                className="basic-single text-black"
                classNamePrefix="select"
                defaultValue={hospital[0]}
                isLoading={isLoading}
                isClearable={isClearable}
                isSearchable={isSearchable}
                name="hospital-select"
                id="hospital-select"
                options={hospitalSelectOptions}
                value={selectedHospital}
                onChange={handleHospitalChange}
                placeholder="Choose a hospital..."
              />
            </div>
            <div className="mb-4 md:flex gap-4">
              <label
                className="block md:inline text-gray-700 font-bold mb-2 mr-6"
                htmlFor="state-select"
              >
                Which department would you like to get an appointment from?
              </label>
              <Select
                className="basic-single text-black"
                classNamePrefix="select"
                defaultValue={medicalDepartment[0]}
                isLoading={isLoading}
                isClearable={isClearable}
                isSearchable={isSearchable}
                name="department-select"
                id="department-select"
                options={departmentSelectOptions}
                value={selectedDepartment}
                onChange={handleMedicalDepartmentChange}
                placeholder="Choose a medical department..."
              />
            </div>
            <div className=" mb-2 md:flex gap-12 ">
              <label
                className=" block md:inline text-gray-700 font-bold mb-2 "
                htmlFor="appointment_details"
              >
                Appointment details
              </label>
              <textarea
                id="appointment_details"
                className="md:shadow aspect-square appearance-none border rounded md:w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full max-h-52"
              ></textarea>
            </div>
            <div className="mb-4 md:flex gap-4">
              <p className="block md:inline text-gray-700 font-bold mb-2 mr-6">
                Would you agree to reschedule the appointment, if needed?
              </p>
              <input
                type="radio"
                id="yes"
                name="yes"
                value="yes"
                className="mx-2"
              />
              <label className="mx-2" htmlFor="yes">
                Yes
              </label>
              <br />
              <input
                type="radio"
                id="no"
                name="no"
                value="no"
                className="mx-2"
              />
              <label className="mx-2" htmlFor="no">
                No
              </label>

              <br />
            </div>
          </div>
          <div className="mx-4 my-2">
            <button
              className=" w-full bg-[#0E63F4]  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-full  md:mx-4 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Fix Appointment
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Appointment;
