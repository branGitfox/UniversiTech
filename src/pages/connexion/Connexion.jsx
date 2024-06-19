import React, { Fragment, useEffect, useState } from 'react'
import s from "./connexion.module.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import test from "../../Lottie/8.json";


import axios from 'axios';

export default function Connexion() {


    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const[members, setMembers] = useState()
    const [students, setStudents] = useState()
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    useEffect(() => {
        getUser()
    }, [])


    const getUser = async () => {
        const res = await fetch('http://localhost/api/index.php')
        const jsonData = await res.json()
        setMembers(jsonData)

    }
    console.log(members);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email : ${inputs.email} ; Mot de passe : ${inputs.password}`);


            
            const chercheMember = members.find(member => member.email === inputs.email && member.password === inputs.password);

            console.log(chercheMember);
            if (chercheMember) {
                setStudents({name: chercheMember[1], filiere: chercheMember[3]})
                console.log(students);
                navigate("/");
            } else {
                alert("veuillez bien verifier votre information")
            }
      
    };




    return (
        <Fragment>
            <div className={`${s.screen} d-flex  `}>


                {/* Section gauche: grande photo */}
                <div className={`${s.sary} hidden md:block md:w-1/2 lottie-background`}>
                    <div className={`${s.lotti}`}>
                        <Lottie animationData={test} />
                    </div>

                    <div className={`${s.text_parents}`}>

                        <h1 className={`${s.logo}  p-8  text-3xl  `}>UniversiTech</h1>
                        <div className={`${s.text}  text-gr p-8 `}>
                            <p>Connectez-vous pour accéder à tous vos outils Universitaire et à votre espace Universitaire Personnalisé en un seul endroit.</p>

                            <p>Votre passerelle vers une gestion académique sans stress</p>

                            <p>Gagner du temps et rester avec à jour avec <span>UniversiTech</span> </p>
                            <div />
                        </div>

                    </div>
                </div>


                {/* Section droite: formulaire de login */}
                <div className={`${s.droite} w-full md:w-1/2 flex flex-col justify-center items-center`}>
                    <h2 className={`${s.connexion} text-3xl font-bold mb-6 `}>Connexion</h2>
                    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                email
                            </label>
                            <input
                                className={`${s.mail}  appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                id="email"
                                type="email"
                                placeholder="yann@gmail.com"
                                name="email"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                mot de passe
                            </label>
                            <input
                                className={`${s.password}  appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                id="password"
                                type="password"
                                placeholder="**********"
                                name="password"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <input className={`${s.seconnecter} text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline`} type="submit" value="se connecter" />
                        </div>
                        <div className="flex items-center justify-between pt-4">
                            <h3>Vous ne possedez pas un  compte ? </h3>
                            <Link className={`${s.link_inscription}`} to="/inscription">créer un compte</Link>
                        </div>

                    </form>

                    <img className={`${s.deco}`} src="./image/connexion/deco1.png" alt="" width={200} />
                    <img className={`${s.deco2}`} src="./image/connexion/deco3.png" alt="" />
                    {/* <img className={`${s.deco3}`} src="./image/connexion/deco1.png" alt="" width={200} /> */}
                </div>
            </div>
        </Fragment>
    )
}
