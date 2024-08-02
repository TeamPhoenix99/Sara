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
          <p>HolidayNepal is a goto platform for all the travel enthusiast seeking to explore the glory of Nepal.
            Using our versitile AI you can design  packages to your desire. 
          </p>
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
