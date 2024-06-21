import React from 'react'
import s from "./modifnote.module.css"
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import { Fragment, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { PiNoteFill } from "react-icons/pi";

export default function Modifnote() {



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
                                        <PiNoteFill className={`${s.iconee} `} size={100} />
                                    </div>
                                    <div className={`${s.titreBOXedt} justify-center mb-6 flex items-center`}>
                                        <h1>Notes</h1>
                                    </div>




                                    <div className={`${s.divinput} mb-6 flex items-center`}>
                                        <label className={`${s.label} w-4/4 text-gray-700 text-sm font-bold`} htmlFor="Unité">
                                            Unité :
                                        </label>
                                        <input
                                            className={`${s.titre} w-2/4 appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                            id="Unité"
                                            type="text"
                                            placeholder="Unité"
                                            name="Unité"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className={`${s.divinput} mb-6 flex items-center`}>
                                        <label className={`${s.label} w-4/4 text-gray-700 text-sm font-bold`} htmlFor="Matière">
                                            Matière:
                                        </label>
                                        <input
                                            className={`${s.titre} w-2/4 appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                            id="Matière"
                                            type="text"
                                            placeholder="Matière"
                                            name="Matière"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className={`${s.divinput} mb-6 flex items-center`}>
                                        <label className={`${s.label} w-4/4 text-gray-700 text-sm font-bold`} htmlFor="Coeff">
                                            Coeff :
                                        </label>
                                        <input
                                            className={`${s.titre} w-2/4 appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                            id="Coeff"
                                            type="text"
                                            placeholder="Coeff"
                                            name="Coeff"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className={`${s.divinput} mb-6 flex items-center`}>
                                        <label className={`${s.label} w-4/4 text-gray-700 text-sm font-bold`} htmlFor="Note">
                                            Note :
                                        </label>
                                        <input
                                            className={`${s.titre} w-2/4 appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                            id="Note"
                                            type="text"
                                            placeholder="Note"
                                            name="Note"
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
