import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Navbar} from './components/Navbar';
import { Home } from './Components/Pagess/Home';
import { About } from './Components/Pagess/About';
import { Contacts } from './Components/Pagess/Contacts';
import { Servicess } from './Components/Pagess/Servicess';
import { Footer } from './Components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/servicess" element={<Servicess />} />
      </Routes>
      <Footer />
    </>
  );
}
