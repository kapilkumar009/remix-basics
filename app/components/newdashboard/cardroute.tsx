export default function CardRoute(props: any) {
  return (
    <div className="grid grid-cols-4 gap-1 pl-2 bg-[#fff]">
      {props.data.map((item:any) => (
        <>
          <div className="mt-5  w-[300px]  border-2 p-6 shadow-sm">
            <h3>{item.name}</h3>
            <span>{item.svgIcon}</span>
            <div className="mt-1">
              <p className="text-2xl font-semibold">{item.value}</p>
              <p className="text-sm text-[#1C4E80]">{item.compare}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
