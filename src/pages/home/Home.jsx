import React, { Fragment, useState, useEffect } from 'react';
import "../../tailwind.css";
import s from "./home.module.css";
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Basheader from '../../components/basheader/Basheader';
import Section1 from '../../components/section1/Section1';
import Section2 from '../../components/section2/Section2';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1200, // durée de l'animation en millisecondes
      once: true, // si vrai, l'animation ne se déclenche qu'une seule fois
    });
    AOS.refresh(); // rafraîchir AOS après l'initialisation
  }, []);

  return (
    <Fragment>
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`flex-grow ${isSidebarOpen ? 'ml-72' : 'ml-16'} transition-all duration-500 pt-16`}>
          <Header />
          <div className={`${s.homepage} p-4`}>
            <div className="mb-4" data-aos="fade-up">
              <Basheader />
            </div>
            <main>
              <div className={`${s.section1}`} data-aos="fade-up">
                <Section1 />
              </div>
              <div className={`${s.section2}`} data-aos="fade-up">
                <Section2 />
              </div>
            </main>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
