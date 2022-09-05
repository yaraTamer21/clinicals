import React from 'react'
import About from '../Components/About'
import Compersation from '../Components/Compersation'
import Contact from '../Components/Contact'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import News from '../Components/News'
import Services from '../Components/Services'

const Home = () => {
  return (
    <>
     {/* <Header/> */}
     {/* <Navbar/> */}
     <About/>
     <Services/>
     <Contact/>
     <Compersation/>
     <News/>
    
    </>
  )
}

export default Home