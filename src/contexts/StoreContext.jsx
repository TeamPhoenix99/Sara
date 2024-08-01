import React, { createContext, useEffect, useState } from "react";
import {getData} from '../assets/data'


export const StoreContext = createContext(null);

export const StoreContextPrvider = (props) => {

    const [apiData,setApiData] = useState('')
    const [places,setPlaces] = useState([])
    const [activities,setActivities] = useState([])

    useEffect(()=>{
        
        const fetchData = async ()=> {
            let data = await getData();
            setApiData(data); 
            data.map(()=>{
                console.log(data);
            })
        }
        fetchData()
        // apiData.forEach(e =>{
        //     if(e.type === 'place'){
        //         setPlaces([...places, e]);
        //     }
        // })
        
    },[]);
    



    const conextValue = {apiData}
     return(
        <StoreContext.Provider value={ conextValue }>
            {props.children}
        </StoreContext.Provider>
     )
}