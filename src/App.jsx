import {Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home/Home"
import { Place } from "./Pages/Place/Place"
import { Event } from "./Pages/Event/Event"
import { Activities } from "./Pages/Activities/Activities"
import { Package } from "./Pages/Package/Package"
import { Navbar } from "./Components/Navbar/Navbar"
import { Footer } from "./Components/Footer/Footer"
import Form from "./Components/Form/Form"
import { Output } from "./Pages/Output/Output"
import { PackageLayout } from "./Pages/Package/PackageLayout"


function App() {


  return (
    <>
      <Navbar />
      <Routes>
         <Route  path="/" element={<Home/>} />
         <Route path="/place" element={<Place/>} />
         <Route path="/event" element={<Event/>} />
         <Route path="/activity" element={<Activities/>}/>
         <Route path="/package" element={<Package />}/>
         <Route path="/form" element={<Form />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
