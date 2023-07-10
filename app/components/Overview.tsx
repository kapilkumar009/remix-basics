import React from 'react'

export default function overview(props:any) {
  return (
    <div className="sm:pr-8 lg:pr-0">
    <div className='border-2 mt-8 p-6 md:p-12 rounded-xl shadow'>
      <h3 className='mb-6'>Overview</h3>
      <table className="table-auto">
  <thead>
    <tr className=''>
      <th className='lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 '>Total Revenue</th>
      <th className='lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 '>Last Week</th>
      <th className='lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 '>Last Month</th>
      <th className='lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 '>Last Year</th>
    </tr>
  </thead>
  <tbody>
      {props.data.map((item:any)=>(
      <tr className='hover:bg-gray-300 sm:text-sm ' key={item.id}>
        <td className='py-4 px-2'>${item.totalrevenue}</td>
        <td>${item.lastweek}</td>
        <td>${item.lastmonth}</td>
        <td>${item.lastyear}</td>
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
