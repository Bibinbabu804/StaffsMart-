import React from 'react'
import Banner from '../Components/Banner'
import Details from '../Components/Details'
import Services from '../Components/Services'
import About from '../Components/About'
import Slider from '../Components/Slider'
import Stats from '../Components/Stats'
import { Company } from '../Components/Company'
import Design from '../Components/Design'



function Home() {
  return (
    <div>
        <Banner/>
        <About/>
        <Design/>
        <Slider/>
        <Services/>
        <Company/>
        <Stats/>
        <Details/>






    </div>
  )
}

export default Home