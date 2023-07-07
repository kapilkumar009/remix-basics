import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function dashboard() {
  const [startDate, setStartDate] = useState(null);
  const handleStartDateChange = (date: any) => {
    setStartDate(date);
  };
  return (
    <div className="mt-4 flex justify-between ">
      <div className=" text-3xl font-semibold sm:text-xl">
        <h2>Dashboard</h2>
      </div>
      <div className="flex">
        <div className="flex px-2 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500">
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            startDate={startDate}
            selectsStart
            placeholderText="12/12/2012"
            className="w-[150px] outline-none sm:w-[100px] sm:hidden"
            id="datepicker"
          />
          <label htmlFor="datepicker">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>
          </label>
        </div>
        <button className="ml-4 rounded-md bg-bgColor px-2 py-1 text-white">
          download
        </button>
      </div>
    </div>
  );
}
