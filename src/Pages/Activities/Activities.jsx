import React,{useContext, useState} from 'react'
import { TopCategory } from '../../Components/TopCategory/TopCategory'
import { Category } from '../../Components/Category/Category'
import { CiSearch } from "react-icons/ci";
import activitieshero from '../../assets/images/activityhero.jfif';
import { StoreContext } from '../../contexts/StoreContext';


export const Activities = () => {

  const {apiData} = useContext(StoreContext);
  const [count, setCount] = useState(10)

  return (
    <div>
      <TopCategory img={activitieshero} Utext="Try Something New" Ltext="With HolidayNepal"/>
      <div className='search'>
        <h1>Activities</h1>
        <input type="text" placeholder='Enter activities'/>
        <CiSearch />
        </div>
        <div className='place-grid'>
        {
          apiData.filter((place, index )=>place.type === 'activities').map((place,index) => (
            <div key={index}>
             { index<count ? <Category name={place.name} rating={place.rating} img={place.image} />: <></>}
            </div>
          ))
        }
        </div>
        <button className='load-btn' onClick={()=>setCount((prevCount)=>prevCount+10)}>Load More</button>

    </div>
  )
}
