import React from "react";

export default function ReportIssue() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] p-10">
        <div className="rounded-xl border border-[#e9e9e9] shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-sans font-semibold leading-none tracking-tight">
              Report an issue
            </h3>
            <p className="pt-1 text-sm text-[#909098]">
              What area are you having problems with?
            </p>
          </div>
          <div className="grid gap-4 p-6 pt-0">
            <div className="grid grid-cols-2 gap-6">
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="area">
                  Area
                </label>
                <button></button>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="security-level">
                  Security-Level
                </label>
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="subject">
                Subject
              </label>
              <input
                className="flex h-9 rounded-md border border-[#e9e9e9] px-3 py-1 text-sm shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-[#939599]"
                type="text"
                name="subject"
                id="subject"
                placeholder="I need help with..."
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="description">
              Description
              </label>
              <textarea
                className="flex min-h-[60px] px-4 py-2 rounded-md border border-[#e9e9e9] text-sm shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-[#939599]"
                name="description"
                id="description"
                placeholder="Please include all information relevant to your issue."
              />
            </div>
          </div>
          <div className="flex items-center justify-between p-6 pt-0 space-x-2">
            <button className="text-sm focus-visible:outline-none focus-visible:ring-1 hover:bg-[#efeff3] h-9 px-4 py-2 rounded-md">Cancel</button>
            <button className="text-sm focus-visible:outline-none focus-visible:ring-1 hover:bg-[#2a2a2c] h-9 px-4 py-2 rounded-md bg-bgColor text-white">Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
}
