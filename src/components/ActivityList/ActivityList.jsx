import { ActivityItem } from "./ActivityItem/ActivityItem"
import './ActivityList.css'

import {activityStore} from '../../ActivityStore'
import {observer} from "mobx-react"
import {useEffect} from "react"


export const ActivityList = observer(() => {
  useEffect(() => {
    activityStore.setInitialActivitiesInList()
  },[])

  return (
    <>
    <h2>{`Выполнено:  ${activityStore.activitiesCountDone}/${activityStore.activitiesCount}`}</h2>
    <div className="list_container">
      {activityStore.activitiesInList.map((activity) =>
        <ActivityItem key={activity.id} id={activity.id} text={activity.text} isDone={activity.isDone} />)}
    </ div>
    </>
  ) 
})

