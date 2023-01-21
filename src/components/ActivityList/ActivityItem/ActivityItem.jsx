import "./ActivityItem.css"
import { activityStore } from "../../../core/ActivityStore" 
import { observer } from "mobx-react"



export const ActivityItem = observer(({text, id, isDone}) => {
  return (
    <div className="item_container">
    <p className={isDone ? 'item_text item_text--done ': "item_text" }>{text}</p>
    <div className="item_button-container">
    <button style={{'fontSize': '20px'}} onClick={() => activityStore.toggleActivity(id)} >{isDone ? '⛔️' : '✅' }</button>
    <button style={{'fontSize': '20px'}} onClick={() => activityStore.deleteActivity(id)}>🗑</button>
    </div>
    </div>
  ) 
})