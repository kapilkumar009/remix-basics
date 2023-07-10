import { Link } from '@remix-run/react'
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Analytics from "~/components/analytics"
import Home from "~/routes/dashcompo"
<Routes>
  <Route index element={<Home />} />
  <Route path="/analytics" element={<Analytics />} />
</Routes>
export default function navbar() {
  return (
    <div className='mt-6'>
        <div className="flex">
            <ul className='flex  bg-[#e9e9e9] p-2 rounded-md '>
                <li className='mr-6 sm:mr-2'><Link className='sm:text-sm' to="#">Overview</Link></li>
                <li className='mr-6 sm:mr-2'><Link className='sm:text-sm' to="/analytics">Analytics</Link></li>
                <li className='mr-6 sm:mr-2'><Link className='sm:text-sm' to="#">Reports</Link></li>
                <li className='mr-6 sm:mr-2'><Link className='sm:text-sm' to="#">Notifications</Link></li>
            </ul>
        </div>
    </div>
  )
}
