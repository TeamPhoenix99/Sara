import React, { createContext, useEffect, useState } from "react";
import {getData} from '../assets/data'

export const FormContext = createContext(null);

export const FormContextProvider = (props) => {
    const [plansData,setPlansData] = useState([])
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
        <FormContext.Provider value={ contextValue }>
            {props.children}
        </FormContext.Provider>
     )
}