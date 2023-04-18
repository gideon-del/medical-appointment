const InputBox = ({
  width,
  label,
  id,
  name,
  type,
  placeholder,
  isRequired,
}) => {
  return (
    <>
      <div className=" mb-2 md:flex gap-12 ">
        <label
          className=" block md:inline text-gray-700 font-bold mb-2 "
          htmlFor={label}
        >
          {label}
        </label>
        <input
          className={`w-${width} md:shadow appearance-none border rounded md:w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={isRequired ? true : false}
        />
      </div>
    </>
  );
};

export default InputBox;
