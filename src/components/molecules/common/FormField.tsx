"use client";

import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import { Input } from "../../atoms/input";

interface IPropsFormField<T extends FieldValues> {
  label: string;
  type: string;
  email: Path<T>;
  control: Control<T>;
  error?: FieldError;
  id?: string;
  placeholder?: string;
}

export const FormField = <T extends FieldValues>({
  label,
  type,
  email: name,
  control,
  error,
  id,
  placeholder,
}: IPropsFormField<T>) => {
  return (
    <div className="w-full flex  flex-col mb-4">
      <label
        htmlFor={id || label.toLowerCase()}
        className={`text-sm font-medium`}
      >
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id={id || label.toLowerCase()}
            type={type}
            error={error?.message}
            placeholder={placeholder || ``}
            {...field}
          />
        )}
      />
    </div>
  );
};
