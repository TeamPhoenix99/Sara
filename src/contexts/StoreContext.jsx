import React, { createContext, useEffect } from "react";


const StoreContext = createContext(null);

export const StoreContextPrvider = (props) => {

    useEffect(()=>{


    },[]);


    const conextValue = {}
     return(
        <StoreContext.Provider value={ conextValue }>
            {props.children}
        </StoreContext.Provider>
     )
}