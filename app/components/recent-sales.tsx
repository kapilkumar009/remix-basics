export default function RecentSales(props: any) {
  return (
    <div className="sm:pr-8 lg:pr-0">
    <div className="mt-8 rounded-xl border-2 p-6 shadow">
      <h3 className=""> Recent Sales</h3>
      <p className="text-sm text-[#949191]">You made 265 sales this month.</p>
      {props.data.map((item: any) => (
        <>
          <div className="my-8 flex lg:flex lg:items-center lg:justify-between items-center sm:block justify-between">
            <div className="flex items-center">
              <img src={item.avtar} className="w-[34px] " alt="image" />
              <div className="">
                <p className="px-4">{item.name}</p>
                <p className="px-4 text-[#949191]">{item.email}</p>
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
