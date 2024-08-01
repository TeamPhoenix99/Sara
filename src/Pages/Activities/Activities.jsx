import React from 'react'
import { TopCategory } from '../../Components/TopCategory/TopCategory'
import { Category } from '../../Components/Category/Category'
import { CiSearch } from "react-icons/ci";
import activitieshero from '../../assets/images/activityhero.jfif'

export const Activities = () => {
  return (
    <div>
      <TopCategory img={activitieshero} Utext="Try Something New" Ltext="With HolidayNepal"/>
      <div className='search'>
        <h1>Activities</h1>
        <input type="text" placeholder='Enter activities'  />
        <CiSearch />
        </div>
      <Category />
    </div>
  )
}
