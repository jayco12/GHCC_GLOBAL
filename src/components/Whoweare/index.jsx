
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../navbar.jsx";
import {WWabanner} from './wwabanner.jsx';
import {WhoWeAre} from './whoweare'
import {Vision} from './vision'
import {Mission} from './mission'
import { Contact } from '../Contact.jsx';
import { Footer } from '../Footer.jsx';
import './App.css';
function Wwa() {
  return (
    <div className='h-96 lg:h-screen w-full '>
      <NavBar/>
      <WWabanner/>
      <WhoWeAre/>
      <Vision/>
      <Mission/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default Wwa