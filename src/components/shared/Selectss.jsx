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
        render={({ field: { onChange, value, ref } }) => (
          <Select
            className="basic-single text-black max-w-md"
            classNamePrefix="select"
            isLoading={isLoading}
            isClearable={isClearable}
            isSearchable={isSearchable}
            id={name}
            options={options}
            value={options.find((c) => c.value === value)}
            onChange={(val) => {
              handleChange(val);
              return onChange(val.value);
            }}
            Inputref={ref}
            placeholder={placeholder}
          />
        )}
        rules={{
          required: true,
        }}
        defaultValue={""}
      />
    </>
  );
};

export default React.memo(Selects);
