import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
  import Home from '../pages/Home'
  import About from '../pages/About'
  import Search from '../pages/Search'
import Update from '../pages/Update';

  

const MyRoutes = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/search' element={<Search/>}></Route>  
          <Route path='/update/:id' element={<Update/>}></Route>  
      
          <Route path='*' element={<div>404 Not Found</div>}></Route>  
        </Routes>
        </>
  )
}

export default MyRoutes