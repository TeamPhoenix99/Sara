import React from 'react'
import { FaStar } from "react-icons/fa";
import chitwan from '../../../assets/images/chitwan.jpg'
import './day.css'
import { Map } from '../Map/Map';

export const Day = () => {
  let hotels = [
    {
      'name': 'Book Everent hotel',
      'type': 'Cultural',
      'rate': 4.5,
      'img': 'https://pix10.agoda.net/hotelImages/49694689/-1/33fea79ce6f9ab961b3c3977cf2dd990.jpg?ce=0&s=702x392'
    },
    {
      'name': 'Book Royal star hotel',
      'type': 'Luerious',
      'rate': 4.7,
      'img': 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/367397409.webp?k=21ebe4bce0a0d04789c2f82d95763dcc61b015ad73ba16a81384d621be94d298&o='
    },
    {
      'name': 'Book Hotel Manakamana',
      'type': 'Simple',
      'rate': 4.2,
      'img': 'https://pix10.agoda.net/hotelImages/266552/-1/feb0bd77287b957212c46e2fb6cf9ef3.jpg?ca=28&ce=0&s=414x232&ar=16x9'
    },
    {
      'name': 'Book Kali Hotel',
      'type': 'Simple',
      'rate': 4.3,
      'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyX1GYDGu0031y5_OBtRwWVQLqb68tdY5KLw&s'
    }
    
  ]

  let vehicles = [
    {
      'name': 'Book Flight',
      'place': 'Kathmandu - Pokhara',
      'rate': 4.5,
      'img': 'https://yetiairlines.com/file-manager/photos/2/ATR.JPG'
    },
    {
      'name': 'Book Texi',
      'place': 'Pokhara',
      'rate': 4.2,
      'img': 'https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2018/02/Traffic-jam.jpg'
    },
    {
      'name': 'Rent Bicycle',
      'place': 'Chitwan',
      'rate': 4.1,
      'img': 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/3c539edc-Pokhara-Mountain-Biking/Pokhara%20Mountain%20Biking.jpg'
    },
  ]
  return (
    <div className='day'>
      <div className="day-desc">
        <h1 className='dayNo'>Hotels</h1>
        {
          hotels.map((e, index)=>(
            <div key={index} className="plan">
              <img src={e.img} alt="hotel" />
              <div className="plan-desc">
                <h1>{e.name}</h1>
                <p>{e.type}</p>
                <div className="rating-view">
                  <div className="rate">
                    <FaStar />
                    <p>(${e.rate})</p>
                  </div>
                  <button>View more</button>
                </div>
              </div>
              </div>

          ))
        }
      </div>
      <div className="day-desc">
        <h1 className='dayNo'>Vechicls</h1>
        {
          vehicles.map((e, index)=>(
            <div key={index} className="plan">
              <img src={e.img} alt="vecicle" />
              <div className="plan-desc">
                <h1>{e.name}</h1>
                <p>{e.place}</p>
                <div className="rating-view">
                  <div className="rate">
                    <FaStar />
                    <p>(${e.rate})</p>
                  </div>
                  <button>View more</button>
                </div>
              </div>
              </div>

          ))
        }
        
      </div>
      <div className="map">
        <Map/>
      </div>
    </div>
  )
}
