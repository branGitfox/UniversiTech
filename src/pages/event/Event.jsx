import React, { useEffect } from 'react'
import s from "./event.module.css"
import { useState, Fragment } from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Basheader from '../../components/basheader/Basheader';
import Eventsection1 from '../../components/evenementMain/Eventsection1';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Event() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [pubs, setPubs] = useState([]); 
  const[delid, setDelid] =useState()
  const Navigate = useNavigate()



useEffect(() =>{
    axios.delete('http://localhost/api/index.php/'+delid).then(response =>{
        console.log(response.data);
       
    }) 
 Navigate('/evenement')
    
}, [delid])

  
  
  useEffect(() => {
    getEvents()
  }, [delid])

  const getEvents = async () => {
    const res = await fetch("http://localhost/api/index.php/events")  
    const jsonData =await res.json()
    setPubs(jsonData) 
  }

  console.log(pubs);
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
          {
            pubs.map((event, index) => (
              <div key={index} className={`${s.section1}`}>
                  <Eventsection1 key={event.id} ev={event} setid={setDelid}/>
             </div>
          
            ))
          }

          {
            
          }

         

          </main>
        </div>
      </div>
    </div>
    </Fragment>
  )
}