import React from 'react'
import './PackageLayout.css'
import chitwan from '../../assets/images/chitwan.jpg'
import { useNavigate } from 'react-router-dom'

export const PackageLayout = () => {
  const navigate = useNavigate();
  return (
    <div className='packagelayout'>
        <img src={chitwan} alt="" />
        <div className="package-desc">
            <h1>Travel to Chitwan</h1>
            <div className="time-cost">
                <p>20 min</p>
            </div>
            <button  className='view-btn'>View more</button>
        </div>
    </div>
  )
}
