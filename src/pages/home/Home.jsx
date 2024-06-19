import React, { Fragment, useState } from 'react';
import "../../tailwind.css";
import s from "./home.module.css";
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Basheader from '../../components/basheader/Basheader';
import Section1 from '../../components/section1/Section1';
import Section2 from '../../components/section2/Section2';




export default function Home() {


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
        <div className={`${s.homepage} p-4`}>
          <div className="mb-4">
            <Basheader />
          </div>
          <main>
            <div className={`${s.section1}`}>
              <Section1 />
            </div>
            <div className={`${s.section2}`}>
              <Section2 />
            </div>

          </main>
        </div>
      </div>
    </div>
    </Fragment>
  );
}
