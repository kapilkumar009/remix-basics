import React from 'react'
import Analytics from '~/components/analytics'
import {data} from "~/components/analyticsData"

export default function AnalyticsRoute() {
  return (
    <div>
      <Analytics data={data}/>
    </div>
  )
}
