interface CarddataProps {
  name?: string;
  value:string;
  svgIcon:string|JSX.Element;
  compare:string
}
export default function Carddata(props:CarddataProps) {
  return (
    <div className=" mt-5 shadow-sm w-[308px] p-6 border-2 rounded-xl">
      <div className="flex justify-between">
        <h3>{props.name}</h3>
       <span>{props.svgIcon}</span>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-semibold">{props.value}</p>
        <p className="text-sm text-[#1C4E80]">{props.compare}</p>
      </div>
    </div>
  );
}
