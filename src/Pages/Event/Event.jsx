import React,{useContext} from 'react'
import { TopCategory } from '../../Components/TopCategory/TopCategory'
import { Category } from '../../Components/Category/Category'
import { CiSearch } from "react-icons/ci";
import eventhero from '../../assets/images/eventhero.jpg'
import { StoreContext } from '../../contexts/StoreContext';


export const Event = () => {

  const {apiData} = useContext(StoreContext); 

  return (
    <div>
       <TopCategory img={eventhero} Utext="Enjoy Our Cultures and Traditions" Ltext="With HolidayNepal" />
       <div className='search'>
        <h1>Events</h1>
        <input type="text" placeholder='Enter Events'  />
        <CiSearch />
        </div>
        <div className='place-grid'>
        {
          apiData.map((place,index) => (
            <div key={index}>
             { place.type === 'events' ? <Category name={place.name} rating={place.rating} img={place.image} /> : <></>}
            </div>
          ))
        }
        </div>
    </div>
  )
}
