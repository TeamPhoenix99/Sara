import React from 'react'
import './Main.css'
import { useNavigate } from 'react-router-dom'
import { IoSparkles } from "react-icons/io5";



export const Main = () => {
  const navigate = useNavigate();

  return (
    <div className='main'>
      <div className="main-left">
        <div className="main-desc">
          <p >Your Guide</p>
          <h1>To <span className='un-line'>Travel </span> <br />and Explore Nepal </h1>
       
            <p>Discover Nepal like never before with HolidayNepal <br />Your ultimate travel companion for unforgettable adventures.</p>
        </div>
        <button className='ai-btn' onClick={()=>navigate('/form')}><IoSparkles className='sparkle-logo'/> Create trip with AI</button>
      </div>
      <div className="main-right">
        <div className="frames">
          <div className="child-frame frame1"></div>
          <div className="child-frame frame2"></div>
          <div className="child-frame frame3"></div>
          <div className="child-frame frame4"></div>
        </div>

      </div>
    </div>
  )
}
