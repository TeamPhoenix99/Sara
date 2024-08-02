import React, {useState} from 'react'
import './TripInfo.css'
import { TripInfo } from '../../Components/OutputComponent/TripInf/TripInfo';
import { Task } from '../../Components/OutputComponent/Task/Task';

export const TripLayout = () => {

    const [showdetail, setShowDetail] = useState('info');
  
  return (
    <div className='trip-info'>
     <div className='info-btn'>
        <button value={showdetail} onClick={()=>setShowDetail('info')} className={showdetail === 'info' ? 'active-info':''}>Trip Info</button>
        <button value={showdetail} onClick={()=>setShowDetail('task')} className={showdetail === 'task' ? 'active-info':''}>Bookings</button>
      </div>
      {
        showdetail === 'info' ? <TripInfo/> : <></>
      }
      {
        showdetail === 'task' ? <Task/> : <></>
      }
    </div>
  )
}
