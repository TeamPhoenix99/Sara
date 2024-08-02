import React, { useContext } from 'react'
import { Main } from '../../Components/HomeComponents/Main/Main'
import { Destination } from '../../Components/HomeComponents/Destination/Destination';
import { Review } from '../../Components/HomeComponents/Review/Review';
import { Contact } from '../../Components/HomeComponents/Contact/Contact';

export const Home = () => {

  return (
    <div>
        <Main/>
        <Destination/>
        <Review/>
        <Contact/>
    </div>
  )
}
