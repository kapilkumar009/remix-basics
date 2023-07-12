import React from 'react'

export default function ReportSection(props:any) {
  return (
    <div>
        <div className="pr-8">
            <div className="border-2 shadow mt-8 rounded-xl  h-[450px] overflow-hidden hover:overflow-y-scroll">
                <h3 className='p-6 text-red-500'>Product Report</h3>
                <table className='table-auto w-full'>
                    <thead >
                        <tr className='bg-[#f7f7f5] text-[#ACACAA] uppercase text-sm sm:text-xs'>
                            <th className='lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 py-4'>Name</th>
                            <th className='lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 py-4'>Quantity</th>
                            <th className='lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 py-4'>Total Sale</th>
                            <th className='lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 py-4'>Profite</th>
                        </tr>
                    </thead>
                    <tbody className=''>

                        {
                            props.data.map((item:any)=>(
                                <tr className='border-b-2'>
                                <td className='lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8 text-[#52534a]'>{item.name}</td>
                                <td className='lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8'>{item.quantity}</td>
                                <td className='lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8'>{item.totalsale}</td>
                                <td className='lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8'>{item.profite}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
