import React, { useEffect } from 'react'
import s from "./trueedt.module.css"
import { useState , Fragment } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';

import Trueedtsection1 from '../../components/trueedtsection1/Trueedtsection1';
import { useParams } from 'react-router';

export default function TrueEdt() {
    const [listEmplois, setListEmplois] = useState({})
      const{annee, filiere}=useParams()
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const getEmplois = async () => {
        const res = await fetch('http://localhost/api/index.php/'+annee+"/"+filiere)
        const jsonData = await res.json()
        setListEmplois(jsonData)
        
    }



    useEffect(() => {
      getEmplois()
    }, [])

    console.log(listEmplois);

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
            <Trueedtsection1 emplois={listEmplois}/>
            </div>
     
          </div>
        </div>
      </div>
    </Fragment>
  )
}
