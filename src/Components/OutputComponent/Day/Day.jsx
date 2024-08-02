import React from 'react'
import { FaStar } from "react-icons/fa";
import chitwan from '../../../assets/images/chitwan.jpg'
import './day.css'
import { Map } from '../Map/Map';

export const Day = () => {

  return (
    <div className='day'>
      <div className="day-desc">
        <h1 className='dayNo'>Day1</h1>
        <div className="plan">
          <img src="https://pix10.agoda.net/hotelImages/49694689/-1/33fea79ce6f9ab961b3c3977cf2dd990.jpg?ce=0&s=702x392" alt="" />
          <div className="plan-desc">
            <h1>Book Everent hotel</h1>
            <p>Historical</p>
            <div className="rating-view">
              <div className="rate">
                <FaStar />
                <p>(4.8)</p>
              </div>
              <button>View more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <Map/>
      </div>
    </div>
  )
}
