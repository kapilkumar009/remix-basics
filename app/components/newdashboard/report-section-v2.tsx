import React from 'react'

export default function ReportSectionRoute(props:any) {
  return (
    <div className="lg:block bg-white mr-1 ml-1 md:ml-0 md:mr-0 xs:ml-1 xs:mr-1 sm:flex sm:justify-center sm:items-center">
    <div className='lg:ml-2 sm:ml-0 mt-6  border-2 shadow md:w-[705px] xs:w-[365px] sm:w-[350px] lg:w-auto'>
      <h3 className='p-4 sm:p-2 text-[20px]'>Report</h3>
      <div className="hover:overflow-y-auto h-[389px] overflow-hidden">
      <table className="table-auto w-full  ">
  <thead>
    <tr className='text-[16px] sm:text-[14px] bg-gray-600 text-white uppercase'>
      <th className=' lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 lg:text-[16px] sm:text-[14px] py-4'>NAME</th>
      <th className=' lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 lg:text-[16px] sm:text-[14px]'>quantity</th>
      <th className=' lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 lg:text-[16px] sm:text-[14px]'>totalsale</th>
      <th className=' lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 lg:text-[16px] sm:text-[14px]'>profite</th>
    </tr>
  </thead>
  <tbody className='[&>*:nth-child(even)]:border-2 [&>*:nth-child(even)]:bg-[#F2F2F2]'>
      {props.data.map((item:any)=>(
      <tr className='hover:bg-gray-300 sm:text-sm lg:text-[14px]' key={item.id}>
        <td className='xs:py-4 lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8 md:py-4'>{item.name}</td>
        <td className='xs:py-4 lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8 md:py-4'>{item.quantity}</td>
        <td className='xs:py-4 lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8 md:py-4'>{item.totalsale}</td>
        <td className='xs:py-4 lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8 md:py-4'>{item.profite}</td>
      </tr>
      ))}
  </tbody>
  </table>
  </div>
    </div>
    </div>
  )
}
