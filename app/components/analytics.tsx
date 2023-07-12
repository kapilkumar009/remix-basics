import React from "react";
// import {data} from "~/components/analyticsData"

export default function analytics(props: any) {
  return (
    <div className="md:pr-8 sm:pr-8">
      <div className=" mt-8 justify-between rounded-xl border-2 p-6 sm:p-3 shadow overflow-hidden h-[450px] hover:overflow-y-scroll">
      <h3>Analytics</h3>
        {props.data.map((item: any) => (
          <>
           <div className=" p-6 sm:p-2 rounded-xl hover:bg-slate-200 my-8 flex lg:flex lg:items-center lg:justify-between items-center sm:block justify-between">
            <div className="flex items-center">
              <img src={item.avtar} className="w-[34px] " alt="image" />
              <div className="flex">
                <p className="px-4">{item.name}</p>
                <p className="px-4 sm:ml-4 ml-10 text-[#6AB187]">{item.status}</p>
              </div>
            </div>
              <p className="sm:ml-14">{item.totalsale}</p>
          </div>
          </>
        ))}
      </div>
    </div>
  );
}

