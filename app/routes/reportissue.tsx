import React, { useState } from "react";

export default function ReportIssue() {
  const [isOpenMenu, setOpenMenu] =useState(false);
  const [securityMenu, setSecurityMenu] = useState(false);
  const [itemList, setItemList] = useState([
    {
      name:"Team",
      value:"team"
    },
    {
      name:"Billing",
      value:"billing"
    },
    {
      name:"Account",
      value:"account"
    },
    {
      name:"Deployments",
      value:"deployments"
    },{
      name:"Support",
      value:"support"
    },
  ])
  const [securityItemList, setSecurityItemList] = useState([
    {
      name:"Severity 1 (Highest)",
      value:"1"
    },
    {
      name:"Severity 2",
      value:"2"
    },
    {
      name:"Severity 3",
      value:"3"
    },
    {
      name:"Severity 4 (Lowest)",
      value:"4"
    },
  ])

  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [securityIndex, setSecurityIndex] = useState(null);
  return (
    <div className="flex items-center justify-center lg:mt-16 sm:mt-2">
      <div className="w-[500px] p-2 md:w-[790px]">
        <div className="rounded-xl border border-[#e9e9e9] shadow">
          <div className="flex flex-col space-y-1.5 p-6 sm:p-4 xs:p-3">
            <h3 className="font-sans md:text-xl font-semibold leading-none tracking-tight">
              Report an issue
            </h3>
            <p className="pt-1 text-sm text-[#909098]">
              What area are you having problems with?
            </p>
          </div>
          <div className="grid gap-4 p-6 sm:p-4 xs:p-3 pt-0">
            <div className="grid grid-cols-2 gap-6 sm:gap-1">
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="area">
                  Area
                </label>
                <div className=" cursor-pointer">
                  <div className="h-9 flex justify-between sm:w-[145px] md:w-[345px] relative items-center rounded-md border border-[#e9e9e9] p-2 pt-1 bg-white outline-none" onClick={e=>{
                    setOpenMenu(!isOpenMenu);
                  }}>
                    {selectedItemIndex !==null ? itemList[selectedItemIndex].name : "Biling"}
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-50" aria-hidden="true"><path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                  </div>
                    {/* drop item */}
                  {
                    isOpenMenu ?(
                      <div className="rounded-md border sm:w-[145px] xs:w-[125px] xs:text-sm md:w-[345px] absolute w-[175px] border-[#e9e9e9] p-2 mt-1 bg-white outline-none">
                    {
                      itemList.map((item,index:any)=>(
                        <div className="py-1 pl-1 hover:bg-[#efeff3]" key={item.value} onClick={e=>{setSelectedItemIndex(index)
                        setOpenMenu(false)
                        }}>
                          {item.name}
                        </div>
                      ))
                    }
                  </div>
                    ):<></>
                  }
                </div>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="security-level">
                  Security-Level
                </label>
                <div className=" cursor-pointer">
                  <div className="h-9 overflow-hidden truncate w-[175px] sm:w-[150px] md:w-[355px] xs:w-[125px] flex justify-between relative items-center rounded-md border border-[#e9e9e9] p-2 pt-1 bg-white outline-none" onClick={e=>{
                    setSecurityMenu(!securityMenu);
                  }}>
                    {securityIndex !==null ? securityItemList[securityIndex].name : "Severity"}
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-50" aria-hidden="true"><path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                  </div>
                    {/* drop item */}
                  {
                    securityMenu ?(
                      <div className="rounded-md border sm:w-[145px] md:w-[350px] xs:w-[125px] xs:text-sm absolute w-[175px] border-[#e9e9e9] p-2 mt-1 bg-white outline-none">
                    {
                      securityItemList.map((item,index:any)=>(
                        <div className="py-1 pl-1 hover:bg-[#efeff3]" key={item.value} onClick={e=>{setSecurityIndex(index)
                        setSecurityMenu(false)
                        }}>
                          {item.name}
                        </div>
                      ))
                    }
                  </div>
                    ):<></>
                  }
                </div>
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
          <div className="flex items-center justify-between p-6 xs:p-3 pt-0 space-x-2">
            <button className="text-sm focus-visible:outline-none focus-visible:ring-1 hover:bg-[#efeff3] h-9 px-4 py-2 rounded-md">Cancel</button>
            <button className="text-sm focus-visible:outline-none focus-visible:ring-1 hover:bg-[#2a2a2c] h-9 px-4 py-2 rounded-md bg-bgColor text-white">Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
}
