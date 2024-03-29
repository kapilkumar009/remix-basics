import { Outlet } from "@remix-run/react";
import { useState } from "react";
import { revenueData } from "~/components/newdashboard/cardData";
import CardRoute from "~/components/newdashboard/cardroute";
import Chart from "~/components/newdashboard/chart";
import Header from "~/components/newdashboard/header";
import Profile from "~/components/newdashboard/profile";
import RecentSales from "~/components/newdashboard/recentsales";
import Sidebar from "~/components/newdashboard/sidebar";
import { sales } from "~/components/newdashboard/recentsaledata";
import NewOverview from "~/components/newdashboard/newoverview";
// import { data } from "~/components/newdashboard/recentsaledata";
export default function DashboradContainerv1() {
  return (
    <div>
      {/* <div className="flex">
        <div className="sm:w-9 lg:w-[14%]">
          <Sidebar />
        </div>
        <div className="flex-1 bg-[#faf8f8]">
          <Header /> */}
      {/* <Profile/> */}
      {/* <Chart/> */}
      {/* <CardRoute data={revenueData} />
          <div className="sm:grid-cols-1 lg:grid lg:grid-cols-2"> */}
      {/* <NewOverview data={data}/> */}
      {/* <Outlet />
            <RecentSales data={sales} />
          </div>
        </div>
      </div> */}

      <div className="">
        <Header />
        <div className="flex">
          <div className="sm:hidden md:hidden xs:hidden lg:mt-10 lg:block lg:w-[14%] hidden">
            <Sidebar />
          </div>
          <div className="">
            <CardRoute data={revenueData} />
            <div className="sm:grid-cols-1 lg:grid lg:grid-cols-2 md:flex md:flex-col md:justify-center md:items-center">
              <Outlet />
              <RecentSales data={sales} />
              {/* <NewOverview data={data}/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
