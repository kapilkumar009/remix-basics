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
    <div className=" bg-white">
    <div className='border-2 mt-2 ml-2  shadow overflow-hidden h-[450px]'>
      <h3 className='p-6'>Overview</h3>
      <table className="table-auto w-full">
  <thead>
    <tr className=''>
      <th className='lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 '>Total Revenue</th>
      <th className='lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 '>Last Week</th>
      <th className='lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 '>Last Month</th>
      <th className='lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 '>Last Year</th>
    </tr>
  </thead>
  <tbody className='[&>*:nth-child(odd)]:border-2 [&>*:nth-child(odd)]:bg-[#F2F2F2]'>
      {props.data.map((item:any)=>(
      <tr className='hover:bg-gray-300 sm:text-sm' key={item.id}>
        <td className='lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8'>${item.totalrevenue}</td>
        <td className='lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8'>${item.lastweek}</td>
        <td className='lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8'>${item.lastmonth}</td>
        <td className='lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8'>${item.lastyear}</td>
      </tr>
      ))}
      {/* <td>$120000</td>
      <td>$120</td>
      <td>$1200</td>
      <td>$12000</td> */}
  </tbody>
  </table>
    </div>
    </div>
  )
}
