import React, { useContext } from 'react'
import './Destination.css'
import { EachPlace } from './EachPlace'
import { FaCircleArrowRight } from "react-icons/fa6";
import { StoreContext } from '../../../contexts/StoreContext';
import { useNavigate } from 'react-router-dom';



export const Destination = () => {

  const { apiData } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='destination'>
        <h1 className='title' >Popular <span className='underline'>Destinations</span> </h1>
           <div className='dest-container'>
            {
                apiData.filter((place) => place.id < 5).map((place,index) => (
                    <div key={index}>
                        <EachPlace name={place.name} img={place.image} rating={place.rating} price={place.price} />
                    </div>
                ))
            }
          </div>
        <FaCircleArrowRight className='arrow' onClick={()=>{
          navigate('/place')}}/>
    </div>
  )
}
