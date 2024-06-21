import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavData from '../data/Navdata'
import Home from '../pages/home/Home'
// import NotFound from '../pages/404/NotFound'


export default function Routers() {
  return (
    <BrowserRouter>
      <Routes >
        {
          NavData.map((route, index) => (
            <Route key={index} path={route.path} element={< route.page />}  />))
        }
        <Route element={<Home/>}/>
       
      </Routes>
    </BrowserRouter>
  )
}
