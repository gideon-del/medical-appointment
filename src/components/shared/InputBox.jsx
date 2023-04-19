const InputBox = ({
  width,
  label,
  id,
  name,
  type,
  placeholder,
  isRequired,
  register,
}) => {
  return (
    <>
      <div className=" flex flex-col gap-4 ">
        <label
          className=" block md:inline text-gray-700 font-bold "
          htmlFor={label}
        >
          {label}
        </label>
        <input
          className={`w-full max-w-sm md:shadow appearance-none border rounded md:w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={isRequired ? true : false}
          {...register("date", {
            required: true,
          })}
        />
      </div>
    </>
  );
};

export default InputBox;
