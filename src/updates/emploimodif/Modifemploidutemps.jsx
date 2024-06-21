import React from 'react'
import s from "./modifemploidutemp.module.css"
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import { Fragment, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Modifemploidutemps() {



    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };



    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }


    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log(`Jours : ${inputs.Jours} ; Date : ${inputs.date} ; description : ${inputs.description} ; `);

        try {
            const response = await axios.post('http', inputs);
            console.log('reponse ', response.data);
            navigate("/evenement");
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
        }

    }




    return (
        <Fragment>
            <div className="flex">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className={`flex-grow ${isSidebarOpen ? 'ml-72' : 'ml-16'} transition-all duration-500 pt-16`}>
                    <Header />
                    <div className={`${s.homepage} `}>
                        <div className={`${s.content_homepage} mb-4`}>
                            <div className={`${s.content_box} p-4`}>

                                <form className={`${s.form} w-1/2`} onSubmit={handleSubmit}>
                                    <div className={`${s.iconeeBOX} justify-center mb-6 flex items-center`}>
                                        <FaRegCalendarAlt className={`${s.iconee} `} size={100} />
                                    </div>
                                    <div className={`${s.titreBOXedt} justify-center mb-6 flex items-center`}>
                                        <h1>Emploi du temps</h1>
                                    </div>

                                    <div className={`${s.divinput} mb-6 flex items-center`}>

                                        <label className={`${s.label} w-4/4 text-gray-700 text-sm font-bold`} htmlFor="jours">
                                            touts jours :
                                        </label>
                                        <select
                                            className={`${s.titre} w-2/4 appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                            id="jours"
                                            name="jours"
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="1">Lundi</option>
                                            <option value="2">Mardi</option>
                                            <option value="3">Mercredi</option>
                                            <option value="4">Jeudi</option>
                                            <option value="5">Vendredi</option>
                                            <option value="6">Samedi</option>
                                            <option value="7">Dimanche</option>
                                        </select>
                                    </div>

                                    <div className={`${s.divinput} mb-6 flex items-center`}>

                                        <label className={`${s.label} w-4/4 text-gray-700 text-sm font-bold`} htmlFor="Filieres">
                                        Filieres    <span className={`${s.spanespace}`}>.....</span>   :
                                        </label>
                                        <select
                                            className={`${s.titre} w-2/4 appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                            id="Filieres"
                                            name="Filieres"
                                            onChange={handleChange}
                                            required
                                        >

                                            <option value="1">IGGLIA</option>
                                            <option value="2">TOUR</option>
                                            <option value="3">ESIIA</option>
                                            <option value="4">BIO</option>
                                            <option value="4">EMI</option>
                                          
                                        </select>
                                    </div>

                                    
                                    <div className={`${s.divinput} mb-6 flex items-center`}>

                                        <label className={`${s.label} w-4/4 text-gray-700 text-sm font-bold`} htmlFor="Niveaux">
                                            Niveaux <span  className={`${s.spanespace}`}  >.....</span>  :
                                        </label>
                                        <select
                                            className={`${s.titre} w-2/4 appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                            id="Niveaux"
                                            name="Niveaux"
                                            onChange={handleChange}
                                            required
                                        >

                                            <option value="1">L1</option>
                                            <option value="2">L2</option>
                                            <option value="3">L3</option>
                                            <option value="4">M1</option>
                                            <option value="4">M2</option>
                                          
                                        </select>
                                    </div>







                                    <div className={`${s.divinput} mb-6 flex items-center`}>
                                        <label className={`${s.label} w-4/4 text-gray-700 text-sm font-bold`} htmlFor="matiere1">
                                            7h15 à 9h15
                                        </label>
                                        <input
                                            className={`${s.titre} w-2/4 appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                            id="matiere1"
                                            type="text"
                                            placeholder="matiere1"
                                            name="matiere1"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className={`${s.divinput} mb-6 flex items-center`}>
                                        <label className={`${s.label} w-4/4 text-gray-700 text-sm font-bold`} htmlFor="matiere2">
                                            9h30 à 11h15
                                        </label>
                                        <input
                                            className={`${s.titre} w-2/4 appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                            id="matiere2"
                                            type="text"
                                            placeholder="matiere2"
                                            name="matiere2"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className={`${s.divinput} mb-6 flex items-center`}>
                                        <label className={`${s.label} w-4/4 text-gray-700 text-sm font-bold`} htmlFor="matiere3">
                                            12h30 à 14h00
                                        </label>
                                        <input
                                            className={`${s.titre} w-2/4 appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                            id="matiere3"
                                            type="text"
                                            placeholder="matiere3"
                                            name="matiere3"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className={`${s.divinput} mb-6 flex items-center`}>
                                        <label className={`${s.label} w-4/4 text-gray-700 text-sm font-bold`} htmlFor="matiere4">
                                            14h00 à 15h30
                                        </label>
                                        <input
                                            className={`${s.titre} w-2/4 appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                            id="matiere4"
                                            type="text"
                                            placeholder="matiere4"
                                            name="matiere4"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="flex items-center justify-end">
                                        <input className={`${s.publier} text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline`} type="submit" value="soumettre" />
                                    </div>
                                </form>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
