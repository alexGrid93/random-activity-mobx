import {observer} from 'mobx-react'
import './ActivitySearch.css'
import { activityStore } from '../../ActivityStore' 
import {useEffect} from 'react'


export const ActivitySearch = observer(() => {

  useEffect(() => {
    activityStore.setRandomActivity()
  }, [])

  return (
    <div className="search_container">
    <div className='search_text'>{activityStore.currentRandomActivity?.activity}</div>
    <div className='search_button-container'>
      <button className='search_button' onClick={activityStore.setRandomActivity}>♻️</button>
      <button className='search_button'  disabled={!activityStore.canAddCurrentAcitivity} onClick={activityStore.addCurrentRandomActivity}>❤️</button>
      </div>
    </div>
  )
})