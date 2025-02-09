import React from 'react'
import Banner from '../Components/Banner'
import Details from '../Components/Details'
import Services from '../Components/Services'
import About from '../Components/About'
import Slider from '../Components/Slider'
import Stats from '../Components/Stats'
import { Company } from '../Components/Company'

import Design2 from '../Components/Design2'



function Home() {
  return (
    <div>
        <Banner/>
        <About/>
       <Design2/>
        <Slider/>
        
        <Company/>
        <Stats/>
        <Details/>






    </div>
  )
}

export default Home