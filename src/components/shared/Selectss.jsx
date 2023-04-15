const Selectss = ({ name, options }) => {
  return (
    <>
      <div className="mb-4 md:flex gap-4">
        <label
          className="block md:inline text-gray-700 font-bold mb-2 mr-6"
          htmlFor="{name}">
          {name}
        </label>
        <select
          className="w-full md:shadow appearance-none border rounded md:w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={name}
          name={name}
          required>
          <option value="">--Select--</option>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectBox;
