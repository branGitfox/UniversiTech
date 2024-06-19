import React from 'react'
import { useState, Fragment } from 'react';
import s from "./emploi.module.css"
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Emploisection1 from '../../components/emploisMain/Emploisection1';



export default function Emploi() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <Fragment>
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`flex-grow ${isSidebarOpen ? 'ml-72' : 'ml-16'} transition-all duration-500 pt-16`}>
          <Header />
          <div className={`${s.homepage} p-8`}>
            <div className="mb-4">
              <Emploisection1 />
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  )
}
