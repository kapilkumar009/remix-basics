import React from 'react'
import ReportSection from '~/components/reportsection'
import {data} from "~/components/reportData"
export default function ReportRoute() {
  return (
    <div>
      <ReportSection data={data}/>
    </div>
  )
}
