import React from 'react'

export default function NotificationRoute(props:any) {
  return (
        <div>
             <div className=" bg-white lg:block xs:ml-1 lg:mr-1 lg:ml-3 sm:ml-0 sm:mr-0 md:mr-0 md:ml-0 sm:flex sm:justify-center sm:items-center">
    <div className='border-2 mt-6 lg:ml-2 sm:ml-0  shadow overflow-hidden md:w-[705px] sm:w-[350px] xs:w-[360px] lg:w-auto '>
      <h3 className='lg:p-4 sm:p-2 text-[20px] border-b-2'>Notification</h3>
      <div className="h-[373px] hover:overflow-y-auto">
      <table className="w-full table-auto  ">
            <thead className="border-r-2 border-l-2 shadow">
            <tr className="bg-gray-600 text-[16px] text-white ">
              <th scope="col" className="text-sm font-medium  py-4 text-center">
              
              </th>
              <th scope="col" className="text-sm font-medium  py-4 text-left px-5 xs:px-2">
              Name
              </th>
              <th scope="col" className="text-sm font-medium   py-4 text-left">
              Request
              </th>
              <th scope="col" className="text-sm font-medium   py-4 text-left px-5 xs:px-2">
              date
              </th>
              <th scope="col" className="text-sm font-medium   py-4 text-center">
              
              </th>
            </tr>
            </thead>
            <tbody className="[&>*:nth-child(even)]:border-y-2 [&>*:nth-child(even)]:bg-[#F2F2F2]">
              {props.data.map((item: any) => (
                <tr className=" border-b" key={item.id}>
                  <td className=" py-4 whitespace-nowrap text-sm font-medium text-gray-900 px-2">
                  <img
                        className="h-[32px] w-[32px] rounded-full object-cover "
                        src={item.avtar}
                        alt="img"
                      />
                  </td>
              <td className=" py-4 xs:px-0 whitespace-nowrap text-sm font-sm text-gray-900 text-left">{item.name}</td>
              <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap text-left">
                {item.request}
              </td>
              <td className="text-sm text-gray-900 font-light text-left  py-4 whitespace-nowrap">
              {item.date}
              </td>
              <td className="text-s font-light  py-4 whitespace-nowrap text-left text-red-500">
                <button>X</button>
              </td>
            </tr>
            
              ))}
            </tbody>
          </table>
      {/* <div className="flex justify-between">
        <img src="" alt="" />
        <p>kapil</p>
        <p>request</p>
        <span>i</span>
      </div> */}
  </div>
    </div>
    </div>
        </div>
    )
}
