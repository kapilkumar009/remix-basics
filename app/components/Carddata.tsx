import React from "react";
// interface CarddataProps {
//   name?: string;
//   value:number;
//   svgIcon:string|JSX.Element;
// }
export default function carddata(props:any) {
  return (
    <div className=" mt-5 shadow-sm w-[308px] p-6 border-2 rounded-xl">
      <div className="flex justify-between">
        <h3>{props.name}</h3>
       <span>{props.svgIcon}</span>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-semibold">{props.value}</p>
        <p className="text-sm text-[#949191]">{props.compare}</p>
      </div>
    </div>
  );
}