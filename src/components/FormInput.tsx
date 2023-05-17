import React, { useState, useRef } from "react";
import { Control, FieldValues, useController } from "react-hook-form";
import InputMask from "react-input-mask";
import EyeIcon from "../icons/EyeIcon";
import ClosedEyeIcon from "../icons/ClosedEyeIcon";

interface MaskedInputProps<T extends FieldValues> {
  control: Control<T>;
  name: any;
  label: string;
  placeholder: string;
  errors: any;
  type: string;
}

const FormInput = <T extends FieldValues>({
  control,
  name,
  label,
  errors,
  placeholder,
  type,
}: MaskedInputProps<T>) => {
  const { field } = useController({
    name,
    control,
  });
  const [reveal, setReveal] = useState(false);
  const inputRef = useRef(null);

  const handleReveal = () => {
    setReveal(!reveal);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "password") return field.onChange(event.target.value);
    const inputValue = event.target.value;
    const cleanedValue = inputValue.replace(/\D/g, "");

    if (cleanedValue.length > 3) {
      const maskedValue =
        cleanedValue.length > 6
          ? `(${cleanedValue.slice(0, 3)}) ${cleanedValue.slice(
              3,
              6
            )}-${cleanedValue.slice(6, 10)}`
          : `(${cleanedValue.slice(0, 3)}) ${cleanedValue.slice(3, 6)}`;
      field.onChange(maskedValue);
    } else {
      field.onChange(inputValue);
    }
  };

  return (
    <div className="mt-5">
      <label
        className="text-goalsetter-gray-100 block text-xs"
        htmlFor={name as string}
      >
        {label}
      </label>
      <div className="flex mt-1 p-3 border rounded-xl">
        <InputMask
          {...field}
          type={reveal ? "text" : type}
          className="w-11/12 placeholder:text-goalsetter-gray-200 bg-white outline-none"
          onChange={handleChange}
          mask=""
          placeholder={placeholder}
          ref={inputRef}
        />
        {type === "password" && (
          <div onClick={handleReveal} className="flex justify-end w-1/12">
            {reveal ? <EyeIcon /> : <ClosedEyeIcon />}
          </div>
        )}
      </div>
      {errors[name] && (
        <div className="pt-2">
          <label className="text-goalsetter-red-100 text-base">
            {errors[name]?.message}
          </label>
        </div>
      )}
    </div>
  );
};

export default FormInput;
