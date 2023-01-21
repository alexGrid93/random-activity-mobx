import {observer} from 'mobx-react'
import './ActivitySearch.css'
import { activityStore } from '../../core/ActivityStore' 
import {useEffect} from 'react'


export const ActivitySearch = observer(() => {

  useEffect(() => {
    activityStore.getRandomActivity()
  }, [])

  return (
    <div className="search_container">
    <div className='search_text'>{activityStore.currentRandomActivity?.activity}</div>
    <div className='search_button-container'>
      <button onClick={activityStore.getRandomActivity}>🔃</button>
      <button  disabled={!activityStore.canAddCurrentAcitivity} onClick={activityStore.addCurrentRandomActivity}>➕</button>
      </div>
    </div>
  )
})