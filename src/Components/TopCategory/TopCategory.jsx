import React from 'react'
import chitwan from '../../assets/images/chitwan.jpg'
import './TopCategory.css'

export const TopCategory = ({img,Utext,Ltext}) => {
  return (
    <div className='top-category'>
        <div className="category-img">
            <img src={img} alt="" />
        </div>
        <div className="category-desc">
            <h1 className='colored'> {Utext} </h1>
            <h1> {Ltext} </h1>
        </div>
    </div>
  )
}
