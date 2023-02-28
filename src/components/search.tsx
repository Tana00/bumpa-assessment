import React from "react";
import { ChangeEvent } from "react";
import { BiSearch } from "react-icons/bi";

interface SearchBarProps {
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const SearchBar = ({ placeholder, onChange, value }: SearchBarProps) => {
  return (
    <div className="flex items-center border-none rounded-md px-2 py-1 bg-white dark:bg-gray-800 shadow-sm dark:shadow-none">
      <BiSearch className="text-customGray5 ml-6 text-xl" />
      <input
        className="flex-1 appearance-none bg-transparent border-none w-full text-customGray7 dark:text-customGray2 mr-3 p-3 leading-tight focus:outline-none"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
