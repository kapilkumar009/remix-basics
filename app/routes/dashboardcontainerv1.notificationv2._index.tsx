import React from 'react'
import NotificationRoute from '~/components/newdashboard/notification-v2'
import {data} from "~/components/newdashboard/notificationData"
export default function NotificationsIndex() {
  return (
    <div>
        <NotificationRoute data={data}/>
    </div>
  )
}
