import React from 'react'
import Notification from '~/components/notification'
import {data} from "~/components/notificationData"
export default function NotificationRoute() {
  return (
    <div>
    <Notification data={data}/>
    </div>
  )
}
