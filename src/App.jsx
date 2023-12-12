import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Wwa from './components/Whoweare/index.jsx';
import Pso from './components/Aboutpso/index.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wwa" element={<Wwa/>} />
        <Route path="/pso" element={<Pso/>} />
  </Routes>
    </>
  );
}

export default App;
