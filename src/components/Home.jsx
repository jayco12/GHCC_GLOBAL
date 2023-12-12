import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./navbar.jsx";
import { About } from './About.jsx';
import { Ministries } from './Ministries.jsx';
import { Banner } from './Banner.jsx';
import { Worship } from './Worship.jsx';
import { Contact } from './Contact.jsx';
import { Footer } from './Footer.jsx';
function Home() {
  return (
    <div className='h-96 lg:h-screen w-full '>
      <NavBar/>
      <Banner/>
      <About/>
      <Ministries/>
      <Worship/>
      <Contact/>

      <Footer/>
    </div>
  )
}

export default Home