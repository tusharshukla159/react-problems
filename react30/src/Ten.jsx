import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from "./forRoutes/Home";
import About from "./forRoutes/About";
import Contact from "./forRoutes/Contact";

const Ten = () => {
  return (
    <div>
      <BrowserRouter>
        
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Ten;
