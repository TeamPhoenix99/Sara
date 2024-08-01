import React, { createContext, useEffect, useState } from "react";
import {getData} from '../assets/data'


export const StoreContext = createContext(null);

export const StoreContextPrvider = (props) => {

    const [apiData,setApiData] = useState('')

    useEffect(()=>{
        
        const fetchData = async ()=> {
            let data = await getData();
            setApiData(data);
        }
        fetchData()
    },[]);


    const conextValue = {apiData}
     return(
        <StoreContext.Provider value={ conextValue }>
            {props.children}
        </StoreContext.Provider>
     )
}