import React,{useContext} from 'react'
import { TopCategory } from '../../Components/TopCategory/TopCategory'
import { Category } from '../../Components/Category/Category'
import { CiSearch } from "react-icons/ci";
import { StoreContext } from '../../contexts/StoreContext';


export const Event = () => {

  const {apiData} = useContext(StoreContext); 

  return (
    <div>
       <TopCategory img="https://cdn.britannica.com/57/244757-050-CADDB530/Hindu-Holi-Festival-Mathura-Uttar-Pradesh-India.jpg" Utext="Vibrant" Ltext="Celebration of tradition" />
       <div className='search'>
        <h1>Events</h1>
        <input type="text" placeholder='Enter Events'  />
        <CiSearch />
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
