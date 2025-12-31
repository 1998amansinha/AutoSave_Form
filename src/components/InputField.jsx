import React, { useState, useEffect } from "react";

const FIELDS = [
  { name: "firstname", placeholder: "Enter your firstname", type: "text" },
  { name: "lastname", placeholder: "Enter your lastname", type: "text" },
  { name: "email", placeholder: "Enter your email", type: "email" },
];

const InputField = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="font-bold text-3xl text-center w-full">
        AutoComplete Form
      </h1>

      <div className="py-10 ">
        <form className="flex flex-col gap-y-4">
          {FIELDS.map((fields) => (
            <div key={fields.name} className="mb-4 ">
              <label
                htmlFor={fields.name}
                className="block text-gray-700 font-medium mb-1"
              >
                {fields.placeholder}
              </label>
              <input
                type={fields.type}
                placeholder={fields.placeholder}
                className="border border-gray-400 py-2 px-4 rounded-md w-80"
              />
            </div>
          ))}

          <button className="border bg-gray-600 text-white p-2 rounded-md cursor-pointer hover:bg-gray-700 ">
            Submit
          </button>
          <button className="border border-gray-500 p-2 rounded-md cursor-pointer hover:bg-gray-700 hover:text-white">
            Clear
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputField;
