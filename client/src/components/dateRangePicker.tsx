import React, {useState} from "react";

export default function DateRangePicker({onDateChange}: any) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e: any) => {
    const date = e.target.value;
    setStartDate(date);
    onDateChange(date, "start");
  };

  const handleEndDateChange = (e: any) => {
    const date = e.target.value;
    setEndDate(date);
    onDateChange(date, "end");
  };

  return (
    <>
      <div date-rangepicker className="sm:flex items-center pb-5">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <input
            name="start"
            type="date"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 border-gray-600 placeholder-gray-400 text-gray focus:ring-blue-500 focus:border-blue-500"
            placeholder="Select date start"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="flex justify-center items-center">
          <span className="mx-4 text-gray-500">to</span>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <input
            name="end"
            type="date"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 border-gray-600 placeholder-gray-400 text-gray focus:ring-blue-500 focus:border-blue-500"
            placeholder="Select date end"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
      </div>
    </>
  );
}
