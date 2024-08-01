import React, { createContext, useEffect, useState } from "react";
import {getData} from '../assets/data'
import { Place } from "../Pages/Place/Place";


export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const [apiData,setApiData] = useState([])
    useEffect(()=>{

        const fetchData = async ()=> {
             
            let data = await getData();
            setApiData(data);
            console.log(data)
        }
        fetchData()
    },[]);


    const contextValue = {apiData}
     return(
        <StoreContext.Provider value={ contextValue }>
            {props.children}
        </StoreContext.Provider>
     )
}