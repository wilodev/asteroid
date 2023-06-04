import React, { FC } from 'react';
import { InputType } from './type';

const Input: FC<{
  label: string;
  placeholder?: string;
  type?: InputType;
  required?: boolean;
  id?: string;
}> = ({
  label,
  placeholder = '',
  type = InputType.TEXT,
  required = false,
  id = '',
}) => {
  return (
    <div className="flex flex-col flex-1 w-full">
      <label
        htmlFor={id}
        className="block mb-2 text-lg font-semibold text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="appearance-none bg-transparent border border-gray-300 text-white text-mf rounded-lg font-semibold focus:ring-transparent focus:border-transparent block p-2.5 w-full"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
