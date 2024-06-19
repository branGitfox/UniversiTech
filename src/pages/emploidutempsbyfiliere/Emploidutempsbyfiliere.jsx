import React from 'react'
import s from "./emploidutempsbyfilter.module.css"
import { useState , Fragment } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import Emploieffiltersection1 from '../../components/emploibysiltersection1/Emploieffiltersection1';

export default function Emploidutempsbyfiliere() {

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
              <Emploieffiltersection1 />
            </div>
     
          </div>
        </div>
      </div>
    </Fragment>
  )
}
