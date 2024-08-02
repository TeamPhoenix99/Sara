import React,{useContext, useState} from 'react'
import { TopCategory } from '../../Components/TopCategory/TopCategory'
import { Category } from '../../Components/Category/Category'
import { CiSearch } from "react-icons/ci";
import { StoreContext } from '../../contexts/StoreContext';
import rifting from '../../assets/images/rifting.jpg'


export const Activities = () => {

  const {apiData} = useContext(StoreContext);
  const [count, setCount] = useState(10)

  return (
    <div>
      <TopCategory img={rifting} Utext="Embrese" Ltext="The Adventure Expedtion"/>
      <div className='search'>
        <h1>Activities</h1>
        <input type="text" placeholder='Enter activities'/>
        <CiSearch />
        </div>
        <div className='place-grid'>
        {
          apiData.filter((place, index )=>place.type === 'activities').map((place,index) => (
            <div key={index}>
             { index<count ? <Category name={place.name} theme="" rating={place.rating} img={place.image} />: <></>}
            </div>
          ))
        }
        </div>
        <button className='load-btn' onClick={()=>setCount((prevCount)=>prevCount+10)}>Load More</button>

    </div>
  )
}
