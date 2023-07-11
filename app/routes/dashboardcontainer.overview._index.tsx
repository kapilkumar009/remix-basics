import React from 'react'
import Overview from '~/components/Overview'
import {data} from "~/components/revenueData"
export default function OverviewContainer() {
  return (
    <div>
        <Overview data={data}/>
    </div>
  )
}
