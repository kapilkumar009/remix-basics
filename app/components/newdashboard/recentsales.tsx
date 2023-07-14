import React from 'react'

export default function RecentSales(props:any) {
  return (
    <div className='border-2 w-[300px] items-center mt-2 ml-2 bg-white'>
        <div className="flex gap-8 text-xl p-2 items-center justify-center ">
            <h3>Recent Sales</h3>
            <h4 className='text-blue-500 cursor-pointer'>View All</h4>
        </div>
        <div className="">
            {
                props.data.map((item:any)=>(
                    <div className="flex gap-12 p-2 justify-center">
                        <p>{item.name}</p>
                        <p className='text-blue-400'>{item.totalsale}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
