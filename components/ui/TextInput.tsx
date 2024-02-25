import React from 'react';

const TextInput = ({ title, ...attributes }: any) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">{title}</label>
      <input
        type="text"
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 text-black block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        {...attributes}
      />
    </>
  );
};

export default TextInput;