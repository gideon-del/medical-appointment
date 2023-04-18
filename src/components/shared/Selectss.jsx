import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
const Selects = ({
  name,
  options,
  handleChange,
  isLoading,
  isClearable,
  control,
  selectedVal,
  isSearchable,
  placeholder,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={() => (
          <Select
            className="basic-single text-black"
            classNamePrefix="select"
            defaultValue={options[0]}
            isLoading={isLoading}
            isClearable={isClearable}
            isSearchable={isSearchable}
            name={name}
            id={name}
            options={options}
            value={selectedVal}
            onChange={handleChange}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default React.memo(Selects);
