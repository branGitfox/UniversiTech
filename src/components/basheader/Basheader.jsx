import React, { Fragment } from 'react'
import s from "./basheader.module.css"
import Lottie from 'lottie-react';
import test from "../../Lottie/12.json";
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Basheader() {
    return (
        <Fragment>

            <div className={`${s.screen} d-flex  `}>


                {/* Section gauche */}

                <div className={`${s.gauche} hidden md:block md:w-1/2 lottie-background `}>
                    <h1 className={`${s.soratra}`}>Vous êtes connecté!</h1>
                    <h1 className={`${s.soratra}`}> Explorez votre nouvel espace de</h1>
                    <h1 className={`${s.soratra}`}>gestion universitaire</h1>


                    <div className={`${s.boutton}`}>
                        <div className={`${s.contact} flex justify-center  text-white font-bold py-2 px-3  focus:outline-none focus:shadow-outline  ${s.seconnecter} `}>
                            <Link className={`${s.cont}`} to="/connexion">Connexion</Link>

                            <FaArrowRight size={20} />

                        </div>

                        <input className={`${s.seconnecter} ${s.apropos} text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline`} type="submit" value="À propos" />
                    </div>


                </div>


                {/* Section droite: formulaire de login */}
                <div className={`${s.droite} w-full md:w-1/2 flex flex-col justify-center items-center`}>
                    <div className={`${s.box_droite} flex justify-center `}>
                        <Lottie animationData={test} style={{ width: "65%" }} />
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
