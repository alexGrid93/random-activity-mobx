import { ActivityItem } from "./ActivityItem/ActivityItem"
import './ActivityList.css'

import {activityStore} from '../../core/ActivityStore'
import {observer} from "mobx-react"
import {useEffect} from "react"


export const ActivityList = observer(() => {
  useEffect(() => {
    activityStore.getInitialActivitiesInList()
  },[])

  return (
    <div className="list-container">
      {activityStore.activitiesInList.map((activity) =>
        <ActivityItem key={activity.id} id={activity.id} text={activity.text} isDone={activity.isDone} />)}
    </ div>
  ) 
})

