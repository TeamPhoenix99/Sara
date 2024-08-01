import React from 'react'
import { TopCategory } from '../../Components/TopCategory/TopCategory'
import { Category } from '../../Components/Category/Category'
import { CiSearch } from "react-icons/ci";
import './Place.css'
import chitwan from '../../assets/images/chitwan.jpg'

export const Place = () => {
  return (
    <div>
      <TopCategory img={chitwan} Utext="Discover Destination" Ltext="With HolidayNepal"/>
      <div className='search'>
        <h1>Places</h1>
        <input type="text" placeholder='Enter places'  />
        <CiSearch />
        </div>
      <Category />
    </div>
  )
}
