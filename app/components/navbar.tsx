import React from 'react'

export default function navbar() {
  return (
    <div className='mt-6'>
        <div className="flex">
            <ul className='flex  bg-[#e9e9e9] p-2 rounded-md '>
                <li className='mr-6 sm:mr-2'><a className='sm:text-sm' href="#">Overview</a></li>
                <li className='mr-6 sm:mr-2'><a className='sm:text-sm' href="#">Analytics</a></li>
                <li className='mr-6 sm:mr-2'><a className='sm:text-sm' href="#">Reports</a></li>
                <li className='mr-6 sm:mr-2'><a className='sm:text-sm' href="#">Notifications</a></li>
            </ul>
        </div>
    </div>
  )
}
