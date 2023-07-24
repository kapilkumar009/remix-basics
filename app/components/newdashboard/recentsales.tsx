import React from 'react'

type propsData={
  data:{
    id:Number;
    totalrevenue:Number;
    name:string;
    email:string;
  }[]
}
export default function RecentSale(props:any) {
  return (
    <div className="lg:block bg-white mr-3 ml-3 md:ml-0 md:mr-0 xs:ml-0 xs:mr-0 xs:flex xs:justify-center xs:items-center sm:flex sm:justify-center sm:items-center">
    <div className='border-2 mt-6 lg:ml-2 sm:ml-0  shadow overflow-hidden md:w-[710px] sm:w-[350px] xs:w-[365px] lg:w-auto'>
      <h3 className='p-4 sm:p-2 text-[20px]'>Recent Sales</h3>
      <div className="hover:overflow-y-auto h-[389px] xs:h-[230px]">
      <table className="table-auto w-full  ">
  <thead>
    <tr className='text-[16px] sm:text-[14px] bg-gray-600 text-white'>
      <th className=' lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 lg:text-[16px] text-left px-10 sm:text-[14px] py-4 xs:text-center'>Name</th>
      {/* <th className=' lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 lg:text-[16px] sm:text-[14px]'>Email</th> */}
      <th className=' lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 lg:text-[16px] sm:text-[14px] text-left px-10 xs:text-center'>totalsale</th>
    </tr>
  </thead>
  <tbody className='[&>*:nth-child(even)]:border-2 [&>*:nth-child(even)]:bg-[#F2F2F2]'>
      {props.data.map((item:any)=>(
      <tr className='hover:bg-gray-300 sm:text-sm lg:text-[14px]' key={item.id}>
        <td className='xs:py-4 lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8 md:py-4 xs:text-center'>{item.name}</td>
        {/* <td className='lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8'>{item.email}</td> */}
        <td className='xs:py-4 lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8 xs:text-center'>{item.totalsale}</td>
      </tr>
      ))}
  </tbody>
  </table>
  </div>
    </div>
    </div>
  )
}
