import React from 'react'

type propsData={
  data:{
    id:Number;
    totalrevenue:Number;
    lastweek:Number;
    lastmonth:Number;
    lastyear:Number;
  }[]
}
export default function NewOverview(props:propsData) {
  return (
    <div className=" bg-white mr-3 ml-3 md:ml-0 md:mr-0">
    <div className='border-2 mt-6 lg:ml-2 sm:ml-0  shadow overflow-hidden md:w-[710px] xs:w-[365px] lg:w-auto '>
      <h3 className='p-4 sm:p-2 text-[20px]'>Overview</h3>
      <div className="hover:overflow-y-auto h-[389px] xs:h-[300px]">
      <table className="table-auto w-full  ">
  <thead>
    <tr className='text-[16px] sm:text-[14px] bg-gray-600 text-white'>
      <th className=' lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 lg:text-[16px] sm:text-[14px] py-4'>Total Revenue</th>
      <th className=' lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 lg:text-[16px] sm:text-[14px]'>Last Week</th>
      <th className=' lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 lg:text-[16px] sm:text-[14px]'>Last Month</th>
      <th className=' lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 lg:text-[16px] sm:text-[14px]'>Last Year</th>
    </tr>
  </thead>
  <tbody className='[&>*:nth-child(even)]:border-2 [&>*:nth-child(even)]:bg-[#F2F2F2]'>
      {props.data.map((item:any)=>(
      <tr className='hover:bg-gray-300 sm:text-sm lg:text-[14px]' key={item.id}>
        <td className='xs:py-4 lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8 md:py-4'>${item.totalrevenue}</td>
        <td className='xs:py-4 lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8 md:py-4'>${item.lastweek}</td>
        <td className='xs:py-4 lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8 md:py-4'>${item.lastmonth}</td>
        <td className='xs:py-4 lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8 md:py-4'>${item.lastyear}</td>
      </tr>
      ))}
  </tbody>
  </table>
  </div>
    </div>
    </div>
  )
}
