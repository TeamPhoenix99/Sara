import React, { useState, useEffect } from 'react'
import { getPlan } from '../../assets/data'
import './Package.css'
import { TripInfo } from '../../Components/OutputComponent/TripInf/TripInfo'
import { Task } from '../../Components/OutputComponent/Task/Task'
import { PackageLayout } from './PackageLayout'

  

export const Package = () => {
 
  const [data, setData] = useState([])
  const [showdetail, setShowDetail] = useState('info');


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
      <div className='info-btn'>
        <button value={showdetail} onClick={()=>setShowDetail('info')} className={showdetail === 'info' ? 'active-info':''}>Trip Info</button>
        <button value={showdetail} onClick={()=>setShowDetail('task')} className={showdetail === 'task' ? 'active-info':''}>Bookings</button>
      </div>
      {
        showdetail === 'info' ? <TripInfo/> : <></>
      }
      {
        showdetail === 'task' ? <Task/> : <></>
      }
    </div>
  )
}


//http://localhost:5173/package?days=5&budget=40000&accommodation=Cultural&food=Non-Vegetarian&place=Boudhanath%20Stupa&place=Swayambhunath%20(Monkey%20Temple)&type=Natural&type=Religious