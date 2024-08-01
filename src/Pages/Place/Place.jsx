import React, { useContext, useState } from 'react'
import { TopCategory } from '../../Components/TopCategory/TopCategory'
import { Category } from '../../Components/Category/Category'
import { CiSearch } from "react-icons/ci";
import './Place.css'
import chitwan from '../../assets/images/chitwan.jpg'
import { StoreContext } from '../../contexts/StoreContext';

export const Place = () => {  

  const {apiData, handleLoadMore} = useContext(StoreContext); 
  const [count, setCount] = useState(10)
  const [searchKeyword, setSearchKeyword] = useState('')
  const [userKeyword, setUserKeyword] = useState('')

  function handleSearch(){
    console.log(userKeyword)
    if(userKeyword.length >= 0){
      setSearchKeyword(userKeyword)
    }
  }

  return (
    <div>
      <TopCategory img={chitwan} Utext="Discover Destination" Ltext="With HolidayNepal"/>
      <div className='search'>
        <h1>Places</h1>
        <input type="text" placeholder='Enter places' value={userKeyword}  onChange={(e)=>setUserKeyword(e.target.value)}/>
        <button onClick={()=>handleSearch()}>Search</button>
        <CiSearch />
        </div>
        <div className='place-grid'>
        {
          apiData.filter((place, index)=>(place.type === 'place' && place.name.toLowerCase().includes(searchKeyword.toLowerCase()))).map((place,index) => (
            <div key={index}>
             {
              index < count ? <Category name={place.name} rating={place.rating} img={place.image} /> : <></>}
            </div>
        ))
          
        }
        </div>
         <button className='load-btn' onClick={()=>setCount((prevCount)=>prevCount+10)}>Load More</button>
    </div>
  )
}
