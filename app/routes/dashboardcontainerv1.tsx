import { Outlet } from '@remix-run/react'
import { useState } from 'react'
import {revenueData} from "~/components/newdashboard/cardData"
import CardRoute from '~/components/newdashboard/cardroute'
import Chart from '~/components/newdashboard/chart'
import Header from '~/components/newdashboard/header'
import Profile from '~/components/newdashboard/profile'
import RecentSales from '~/components/newdashboard/recentsales'
import Sidebar from '~/components/newdashboard/sidebar'
import {sales} from "~/components/newdashboard/recentsaledata"
import NewOverview from '~/components/newdashboard/newoverview'
import {data} from "~/components/revenueData"
export default function DashboradContainerv1() {
  return (
    <div>
      <div className="flex">
        <div className="w-[14%]">
          <Sidebar/>
        </div>
      <div className="flex-1 bg-[#faf8f8]">
        <Header/>
        {/* <Profile/> */}
      {/* <Chart/> */}
      <CardRoute data={revenueData}/>
      <div className="grid grid-cols-2">
      <NewOverview data={data}/>
      <RecentSales data={sales}/>
      </div>
      <Outlet/>
      </div>
      </div>
    </div>
  )
}
