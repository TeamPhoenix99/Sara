import React, { useState, useEffect } from 'react'
import { getPlan } from '../../assets/data'
import './Package.css'
import { PackageLayout } from './PackageLayout'
import { TripLayout } from './TripLayout'

  

export const Package = () => {
 
  const [data, setData] = useState([])
 


  useEffect(()=>{

    const fetchPlan = async()=>{
      // fetch("http://127.0.0.1:5000/plan?" + window.location.href.split('?')[1])
      // .then((response) => response.json())
      // .then((json) => {()=>setData(json)});
      let plan = await getPlan(window.location.href.split('?')[1])
      setData(plan)
      console.log(plan)
    }
    fetchPlan()
  },[])

  
  
  return (
    <div>
       <PackageLayout/>
       <TripLayout/>
    </div>
  )
}


//http://localhost:5173/package?days=5&budget=40000&accommodation=Cultural&food=Non-Vegetarian&place=Boudhanath%20Stupa&place=Swayambhunath%20(Monkey%20Temple)&type=Natural&type=Religious