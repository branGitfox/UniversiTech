import React from 'react'
import s from "./notes.module.css"
import { useState, Fragment } from 'react'; 
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Notessection1 from '../../components/notesection1/Notessection1';

export default function Notes() {

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
                    <div className={`${s.homepage}`}>
                        <div className="mb-4">
                        <Notessection1 />
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
