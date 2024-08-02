import React,{useContext, useState} from 'react'
import { TopCategory } from '../../Components/TopCategory/TopCategory'
import { Category } from '../../Components/Category/Category'
import { CiSearch } from "react-icons/ci";
import { StoreContext } from '../../contexts/StoreContext';


export const Event = () => {

  const {apiData} = useContext(StoreContext); 
  const [searchKeyword, setSearchKeyword] = useState('')
  const [userKeyword, setUserKeyword] = useState('')

  function handleSearch(){
    console.log(userKeyword)
    if(userKeyword.length > 0){
      setSearchKeyword(userKeyword)
    }
  }
  return (
    <div>
       <TopCategory img="https://cdn.britannica.com/57/244757-050-CADDB530/Hindu-Holi-Festival-Mathura-Uttar-Pradesh-India.jpg" Utext="Vibrant" Ltext="Celebration of tradition" />
       <div className='search'>
        <h1>Events</h1>
        <div className="input-box">
          <input type="text" placeholder='Search events' value={userKeyword} onKeyDown={(e) => {
            if (e.key === "Enter")
              handleSearch();}}
            onChange={(e)=>{setUserKeyword(e.target.value)}}/>
          <button onClick={()=>handleSearch()}><CiSearch className='search-icon'/></button>
        </div>
        </div>
        <div className='place-grid'>
        {
          apiData.map((place,index) => (
            <div key={index}>
             { place.type === 'events' ? <Category name={place.name} theme={place.month} rating={place.rating} img={place.image} /> : <></>}
            </div>
          ))
        }
        </div>
    </div>
  )
}
