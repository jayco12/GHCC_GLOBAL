
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../navbar.jsx";
import {PSO} from './psobanner.jsx';
import {Aboutpso} from './about.jsx';
import { Contact } from '../Contact.jsx';
import { Footer } from '../Footer.jsx';
import './App.css';
function Pso() {
  return (
    <div className='h-96 lg:h-screen w-full '>
      <NavBar/>
      <PSO/>
      <Aboutpso/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default Pso