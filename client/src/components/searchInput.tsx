import React from "react";

export default function SearchInput({value, onChange, onSubmit}: any) {
  return (
    <form onSubmit={onSubmit} className="p-7">
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-700 sr-only text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="search"
          className="block w-full p-4 ps-10 text-sm text-gray-700 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 border-gray-600 placeholder-gray-400 focus:ring-gray-500 focus:border-gray-500"
          placeholder="Search"
          value={value} // Set input value to the prop value
          onChange={onChange} // Pass onChange event to parent
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 bg-gray-600 hover:bg-gray-700 focus:ring-gray-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}
