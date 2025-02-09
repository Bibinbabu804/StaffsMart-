
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './PAGES/Home'

import Footer from './Components/Footer'
import ServicesPage from './PAGES/ServicePage'
import ContactPage from './PAGES/ContactPage'


function App() {
  
  return (
    <>



    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/service' element={<ServicesPage/>}  />
      <Route path='/contact' element={<ContactPage/>}  />



      


    </Routes>


    <Footer/>
   
    </>
  )
}

export default App
