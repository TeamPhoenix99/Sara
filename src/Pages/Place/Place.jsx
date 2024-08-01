import React, { useContext } from 'react'
import { TopCategory } from '../../Components/TopCategory/TopCategory'
import { Category } from '../../Components/Category/Category'
import { CiSearch } from "react-icons/ci";
import './Place.css'
import chitwan from '../../assets/images/chitwan.jpg'
import { StoreContext } from '../../contexts/StoreContext';

export const Place = () => {  

  const {apiData} = useContext(StoreContext); 

  return (
    <div>
      <TopCategory img={chitwan} Utext="Discover Destination" Ltext="With HolidayNepal"/>
      <div className='search'>
        <h1>Places</h1>
        <input type="text" placeholder='Enter places'  />
        <CiSearch />
        </div>
        <div className='place-grid'>
        {
          apiData.map((place,index) => (
            <div key={index}>
             { place.type === 'place' ? <Category name={place.name} rating={place.rating} img={place.image} /> : <></>}
            </div>
          ))
        }
        </div>
         <button className='load-btn'>Load More</button>
    </div>
  )
}
