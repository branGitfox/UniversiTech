import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavData from '../data/Navdata'


export default function Routers() {
  return (
    <BrowserRouter>
      <Routes >
        {
          NavData.map((route, index) => (
            <Route key={index} path={route.path} element={< route.page />} />))
        }
      </Routes>
    </BrowserRouter>
  )
}
