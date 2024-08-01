import React, { useContext } from 'react'
import { Main } from '../../Components/HomeComponents/Main/Main'
import { StoreContext } from '../../contexts/StoreContext'

export const Home = () => {

  const { apiData } = useContext(StoreContext);
  return (
    <div>
        <Main/>
    </div>
  )
}
