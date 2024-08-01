import React,{useContext} from 'react'
import { TopCategory } from '../../Components/TopCategory/TopCategory'
import { Category } from '../../Components/Category/Category'
import { CiSearch } from "react-icons/ci";
import activitieshero from '../../assets/images/activityhero.jfif';
import { StoreContext } from '../../contexts/StoreContext';


export const Activities = () => {

  const {apiData} = useContext(StoreContext); 

  return (
    <div>
      <TopCategory img={activitieshero} Utext="Try Something New" Ltext="With HolidayNepal"/>
      <div className='search'>
        <h1>Activities</h1>
        <input type="text" placeholder='Enter activities'  />
        <CiSearch />
        </div>
        <div className='place-grid'>
        {
          apiData.map((place,index) => (
            <div key={index}>
             { place.type === 'activities' ? <Category name={place.name} rating={place.rating} img={place.image} /> : <></>}
            </div>
          ))
        }
        </div>
    </div>
  )
}
