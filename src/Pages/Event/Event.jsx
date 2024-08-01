import React from 'react'
import { TopCategory } from '../../Components/TopCategory/TopCategory'
import { Category } from '../../Components/Category/Category'
import { CiSearch } from "react-icons/ci";
import eventhero from '../../assets/images/eventhero.jpg'

export const Event = () => {
  return (
    <div>
       <TopCategory img={eventhero} Utext="Enjoy Our Cultures and Traditions" Ltext="With HolidayNepal" />
       <div className='search'>
        <h1>Events</h1>
        <input type="text" placeholder='Enter Events'  />
        <CiSearch />
        </div>
       <Category />
    </div>
  )
}
