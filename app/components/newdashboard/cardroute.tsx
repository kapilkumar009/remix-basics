export default function CardRoute(props: any) {
  return (
    // sm:flex sm:justify-center sm:items-center
    <div className="lg:block ml-2 xs:ml-0 xs:flex xs:flex-col sm:ml-0 sm:mt-12 md:mt-12 xs:mt-12 sm:flex sm:flex-col sm:justify-center sm:items-center xs:justify-center xs:items-center">
    <div className="lg:grid lg:grid-cols-4 lg:gap-3 lg:pl-2 sm:mr-1 sm:pl-0 bg-[#fff] sm:grid-cols-1 md:flex  md:flex-wrap md:gap-6 md:justify-center md:items-center ">
      {props.data.map((item:any) => (
        <>
          <div className="mt-5  lg:w-[300px] lms:w-[350px]  sm:w-[343px] xs:w-[340px] md:w-[343px] border-2 p-6 shadow-sm">
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
    </div>
  );
}
