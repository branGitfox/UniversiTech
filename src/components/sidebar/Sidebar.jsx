import React, { Fragment, useContext } from 'react';
import s from "./sidebar.module.css";
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaHome } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { GiAcousticMegaphone } from "react-icons/gi";
import { PiNoteFill } from "react-icons/pi";
import { NavLink } from 'react-router-dom'; // Utilisez NavLink au lieu de Link
import { useState } from 'react';
import UserContext from '../../hooks/UserProvider';

export default function Sidebar({ isOpen, toggleSidebar }) {
    const {userData} = useContext(UserContext)
    const stat = userData.status
    const menu = stat ==0?
    [{ name: "Menue", link: "/", icon: FaHome }, { name: "Evenement", link: "/connexion", icon: GiAcousticMegaphone }, { name: "Emploi du temps", link: "/connexion", icon: MdEventAvailable }, { name: "Notes", link: "/connexion", icon: PiNoteFill }]:
    [{ name: "Menue", link: "/", icon: FaHome }, { name: "Evenement", link: "/evenement", icon: GiAcousticMegaphone }, { name: "Emploi du temps", link: "/emploidutemps", icon: MdEventAvailable }, { name: "Notes", link: "/notes", icon: PiNoteFill }]
   
  return (
    <Fragment>
      <section className="flex gap-6">
        <div className={`fixed top-16 left-0 min-h-screen ${isOpen ? 'w-72' : 'w-16'} duration-500 text-gray-100 px-4 bg-gray-800`}>
          <div className="py-3 flex justify-end items-center">
            {isOpen && <span className="mr-32">UniersiTech</span>}
            <HiMenuAlt3 size={50} onClick={toggleSidebar} className="cursor-pointer" />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menu.map((item, index) => (
              <NavLink
                to={item.link}
                className={(nav) => (nav.isActive ? s.active : s.Non_active) + ` ${s.linkhover} group flex items-center text-sm gap-3.5 font-medium p-2 rounded-md`}
                key={index}
              >
                <div>
                  {React.createElement(item.icon, { size: 20 })}
                </div>
                <h2
                  style={{ transitionDelay: `${index + 3}00ms` }}
                  className={`whitespace-pre duration-500 ${!isOpen && 'opacity-0 translate-x-28 overflow-hidden'}`}
                >
                  {item.name}
                </h2>
                <h2 className={`absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit ${isOpen && 'hidden'}`}>
                  {item.name}
                </h2>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
