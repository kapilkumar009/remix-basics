import React from "react";

export default function tablecomp() {
  return (
    // <div classNameName="bg-white sm:mr-3">
    //   <div classNameName="ml-2 mt-6  border-2 shadow  ">
    //     <h3 classNameName="p-4 text-[20px]">Analytics</h3>
    //     <div classNameName="h-[400px] sm:h-[480px]">
    //       <table classNameName="w-full table-auto  ">
    //         <thead>
    //           <tr classNameName="bg-gray-600 text-[16px] text-white ">
    //             <th classNameName="py-4 sm:pr-4 sm:text-sm md:pr-14 lg:px-16 lg:pr-10 lg:text-[16px]">
    //               CLIENT
    //             </th>
    //             <th classNameName="sm:pr-4 sm:text-sm md:pr-14 lg:px-6 lg:pr-10 lg:text-[16px]">
    //               AMOUNT
    //             </th>
    //             <th classNameName=" sm:pr-4 sm:text-sm md:pr-14 lg:pr-10 lg:text-[16px]">
    //               STATUS
    //             </th>
    //             <th classNameName=" sm:pr-4 sm:text-sm md:pr-14 lg:pr-10 lg:text-[16px]">
    //               DATE
    //             </th>
    //           </tr>
    //         </thead>
    //         <tbody classNameName="[&>*:nth-child(even)]:border-y-2 [&>*:nth-child(even)]:bg-[#F2F2F2]">
    //           <tr classNameName="hover:bg-gray-300 sm:text-sm lg:text-[14px]">
    //             <td classNameName="md:px-  sm:px-4 sm:py-4 lg:py-4">
    //               <div classNameName="flex items-center gap-8">
    //                 <img
    //                   classNameName="h-[32px] w-[32px] rounded-full object-cover"
    //                   src=""
    //                   alt="img"
    //                 />
    //                 <p>kapil</p>
    //               </div>
    //             </td>
    //             <td classNameName="sm:px-4  sm:py-4 md:px-8 lg:py-4">123456</td>
    //             <td>
    //               <p>Pending</p>
    //             </td>
    //             <td classNameName="sm:px-4 sm:py-4 md:px-8 lg:py-4">12-09-2002</td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col">
  <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
      <table className="w-full table-auto  ">
            <thead className="border-r-2 border-l-2 shadow">
            <tr className="bg-gray-600 text-[16px] text-white ">
              <th scope="col" className="text-sm font-medium  py-4 text-center">
              
              </th>
              <th scope="col" className="text-sm font-medium  py-4 text-left">
              Name
              </th>
              <th scope="col" className="text-sm font-medium   py-4 text-center">
              Request
              </th>
              <th scope="col" className="text-sm font-medium   py-4 text-center">
              date
              </th>
              <th scope="col" className="text-sm font-medium   py-4 text-center">
              
              </th>
            </tr>
            </thead>
            <tbody className="[&>*:nth-child(even)]:border-y-2 [&>*:nth-child(even)]:bg-[#F2F2F2]">
              {data.map((item: any) => (
                <tr className=" border-b" key={item.id}>
                  <td className=" py-4 whitespace-nowrap text-sm font-medium text-gray-900 px-2">
                  <img
                        className="h-[32px] w-[32px] rounded-full object-cover "
                        src={item.avtar}
                        alt="img"
                      />
                  </td>
              <td className=" py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">{item.name}</td>
              <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap text-center">
                {item.request}
              </td>
              <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap">
              {item.date}
              </td>
              <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap text-center">
                X
              </td>
            </tr>
            
              ))}
            </tbody>
          </table>
      </div>
    </div>
  </div>
</div>
  );
}
