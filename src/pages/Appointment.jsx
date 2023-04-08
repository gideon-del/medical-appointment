import InputBox from "../components/shared/InputBox";

const Appointment = () => {
  return (
    <>
      <section className="min-h-screen w-full">
        <div>
          {/* <button className=" w-36 mt-20 text-xl py-2 px-2 text-white bg-[#0E63F4]  hover:bg-blue-700 rounded-lg absolute top-12 right-0 ...">
            Back
          </button> */}
        </div>
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

            <div className=" mb-2 md:flex gap-12 mx-4">
              <label
                className=" block md:inline text-gray-700 font-bold mb-2 "
                htmlFor="appointment_details">
                Appointment details
              </label>
              <textarea
                id="appointment_details"
                rows="5"
                cols="140"
                className="md:shadow appearance-none border rounded md:w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
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
              <label className="mx-2" htmlFor="Yes">
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
              <label className="mx-2" htmlFor="No">
                No
              </label>
              <br />
            </div>
          </div>
          <div className="mx-4 my-2">
            <button
              className=" w-full bg-[#0E63F4]  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-full  md:mx-4 focus:outline-none focus:shadow-outline"
              type="submit">
              Fix Appointment
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Appointment;
