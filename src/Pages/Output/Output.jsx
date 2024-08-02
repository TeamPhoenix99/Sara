import React, { useState } from 'react'
import { TopCategory } from '../../Components/TopCategory/TopCategory'
import badimalika from '../../assets/images/badimalika.jfif'
import './Output.css'
import { TripInfo } from '../../Components/OutputComponent/TripInf/TripInfo'
import { Task } from '../../Components/OutputComponent/Task/Task'
export const Output = () => {

  const [showdetail, setShowDetail] = useState('info');
  
  return (
    <div>
      <TopCategory img={badimalika} Utext="" Ltext="" />
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
