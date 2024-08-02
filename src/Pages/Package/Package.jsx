import React, { useState, useEffect } from 'react'
import { getPlan } from '../../assets/data'
import './Package.css'
import { TripInfo } from '../../Components/OutputComponent/TripInf/TripInfo'
import { Task } from '../../Components/OutputComponent/Task/Task'
import { PackageLayout } from './PackageLayout'
import { Map } from '../../Components/OutputComponent/Map/Map'
import { FaStar } from "react-icons/fa";


export const Package = () => {
 
  const [data, setData] = useState([])
  const [showdetail, setShowDetail] = useState('info');


  useEffect(()=>{

    const fetchPlan = async()=>{
      let plan = await getPlan(window.location.href.split('?')[1])
      setData(plan)
      console.log(plan)
    }
    fetchPlan()
  },[])

  
  
  return (
    <div>
      <div className='info-btn'>
        <button value={showdetail} onClick={()=>setShowDetail('info')} className={showdetail === 'info' ? 'active-info':''}>Trip Info</button>
        <button value={showdetail} onClick={()=>setShowDetail('task')} className={showdetail === 'task' ? 'active-info':''}>Bookings</button>
      </div>
      {
        showdetail === 'info' ? <>
          
            {
              data.map((dailyTask, i)=>(
                <>
              <div className="day-desc">
              <h1 className='dayNo'>Day {i +1}</h1>
              {
              dailyTask.map((task, index)=>(
                <>
                <div className="plan">
                <img src={task.img} alt={`${task.task} image`} />
                <div className="plan-desc">
                  <h1>{task.task}</h1>
                  <p>{task.time} hr.+</p>
                  <div className="rating-view">
                    <p>rs.{task.cost}00</p>
                    <button>View more</button>
                  </div>
                </div>
              </div>
                </>
              ))
              }             
            </div>
            
            </> 
              ))
            }
            <div className="map">
            <Map />
          </div>
          
          
     
        
        
        
        </> : <></>
      }
      {
        showdetail === 'task' ? <Task/> : <></>
      }
    </div>
  )
}


//http://localhost:5173/package?days=5&budget=40000&accommodation=Cultural&food=Non-Vegetarian&place=Boudhanath%20Stupa&place=Swayambhunath%20(Monkey%20Temple)&type=Natural&type=Religious