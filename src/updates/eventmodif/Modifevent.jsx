import React from 'react'
import s from "./modifevent.module.css"
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import { Fragment, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Modifevent() {



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
        console.log(`Titre : ${inputs.Titre} ; Date : ${inputs.date} ; email : ${inputs.description} ; `);

        try {
            const response = await axios.post('http://localhost/api/index.php/newEvent', inputs);
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

                                <form className={`${s.form} w-full`} onSubmit={handleSubmit}>

                                    <div className="mb-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="titre">
                                            Titre
                                        </label>
                                        <input
                                            className={`${s.titre}  appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                            id="Titre"
                                            type="text"
                                            placeholder="BIENVENUE"
                                            name="titre"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>




                                    <div className="mb-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                                            Date
                                        </label>
                                        <input
                                            className={`${s.date}  appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                            id="date"
                                            type="date"
                                            placeholder=""
                                            name="date"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Description">
                                            Description
                                        </label>
                                        <textarea
                                            className={`${s.Description} appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                            id="Description"
                                            placeholder=""
                                            name="description"
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>





                                    <div className="flex items-center justify-end">
                                        <input className={`${s.publier} text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline`} type="submit" value="Publier" />
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
