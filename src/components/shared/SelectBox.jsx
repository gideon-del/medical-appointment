import { useState } from "react";
import Select from "react-select";
const SelectBox = ({ options }) => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);

  const handleStateChange = (option) => {
    const state = options.find((state) => state.value === option.value);
    setSelectedState(state);
    setSelectedArea(null);
  };
  const handleAreaChange = (option) => {
    setSelectedArea(option);
  };

  const stateSelectOptions = options.map((state) => ({
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

  return (
    <>
      <div className="mb-4 md:flex gap-4">
        <label
          className="block md:inline text-gray-700 font-bold mb-2 mr-6"
          htmlFor="state-select">
          Choose a state
        </label>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={options[0]}
          isLoading={isLoading}
          isClearable={isClearable}
          isSearchable={isSearchable}
          name="state-select"
          id="state-select"
          // options={options}
          options={stateSelectOptions}
          value={selectedState}
          onChange={handleStateChange}
          placeholder="Choose a state..."
        />
        {selectedState && (
          <div className="flex gap-2">
            <label
              className="block md:inline text-gray-700 font-bold mb-2 mr-6"
              htmlFor="area-select">
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
    </>
  );
};

export default Appointment;
