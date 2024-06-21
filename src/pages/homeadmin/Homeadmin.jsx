import React, { useContext, useEffect } from 'react'
import s from "./homeadmin.module.css"
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Basheader from '../../components/basheader/Basheader';
import { useState, Fragment } from 'react';
import "../../tailwind.css";
import Dashbord from '../../components/dashbord/Dashbord';
import Bashheaderadmin from '../../components/bashheaderadmin/Bashheaderadmin';
import UserProvider  from '../../hooks/UserProvider';
import { useNavigate } from 'react-router';

export default function Homeadmin() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const {userData} = useContext(UserProvider)
    const Navigate = useNavigate()

    const redirectFakeAdmin = () => {
        if(userData.name != 'Admin'){
            Navigate('/')
        }
    }

    useEffect(() =>{
        redirectFakeAdmin()
    })
    
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
                           <Bashheaderadmin />
                        </div>
                        <main>

                            <Dashbord />

                        </main>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
