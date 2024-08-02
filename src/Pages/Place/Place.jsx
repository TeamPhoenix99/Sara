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
    if(userKeyword.length > 0){
      setSearchKeyword(userKeyword)
    }
  }

  return (
    <div className='container'>
      <TopCategory img={chitwan} Utext="Explore" Ltext="Nepal With HolidayNepal"/>
      <div className='search'>
        <h1>Places</h1>
        <div className="input-box">
          <input type="text" placeholder='Search places' value={userKeyword} onKeyDown={(e) => {
            if (e.key === "Enter")
              handleSearch();}}
            onChange={(e)=>{setUserKeyword(e.target.value)}}/>
          <button onClick={()=>handleSearch()}><CiSearch className='search-icon'/></button>
        </div>
        </div>
        <div className='place-grid'>
        {
          apiData.filter((place, index)=>(place.type === 'place' && place.name.toLowerCase().includes(searchKeyword.toLowerCase()))).map((place,index) => (
            <div key={index}>
             {
              index < count ? <Category id={place.id} name={place.name} theme={place.theme} rating={place.rating} img={place.image} /> : <></>}
            </div>
        ))
          
        }
        </div>
         <button className='load-btn' onClick={()=>setCount((prevCount)=>prevCount+10)}>Load More</button>
    </div>
  )
}
