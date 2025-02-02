
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './PAGES/Home'

import Footer from './Components/Footer'


function App() {
  
  return (
    <>



    <Routes>
      <Route path='/' element={<Home/>}  />

      


    </Routes>


    <Footer/>
   
    </>
  )
}

export default App
