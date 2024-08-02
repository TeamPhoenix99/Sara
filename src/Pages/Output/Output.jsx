import React from 'react'
import { TopCategory } from '../../Components/TopCategory/TopCategory'
import badimalika from '../../assets/images/badimalika.jfif'
import './Output.css'
import { TripInfo } from '../../Components/OutputComponent/TripInf/TripInfo'
export const Output = () => {
  return (
    <div>
      <TopCategory img={badimalika} Utext="" Ltext="" />
      <div className='info-btn'>
        <button>Trip Info</button>
        <button>Bookings</button>
      </div>
      <TripInfo/>
    </div>
  )
}
