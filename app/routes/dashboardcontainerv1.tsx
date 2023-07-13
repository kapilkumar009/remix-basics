import React from 'react'
import Chart from '~/components/newdashboard/chart'
import Header from '~/components/newdashboard/header'
import Sidebar from '~/components/newdashboard/sidebar'
export default function DashboradContainerv1() {
  return (
    <div>
      <div className="flex">
        <div className="w-[20%]">
          <Sidebar/>
        </div>
      <div className="flex-1">
        <Header/>
      <Chart/>
      </div>
      </div>
    </div>
  )
}
