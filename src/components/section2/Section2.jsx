import React, { Fragment } from 'react'
import s from "./section2.module.css"
import Lottie from 'lottie-react';
import test from "../../Lottie/13.json";
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';





export default function Section2() {
    return (
        <Fragment>
            <div className={`${s.screen} d-flex  `}>


               

                {/* Section droite: formulaire de login */}
                <div className={`${s.droite} w-full md:w-1/2 flex flex-col justify-center items-center`}>
                    <div className={`${s.box_droite} flex justify-center `}>
                        <Lottie animationData={test} style={{ width: "65%" }} />
                    </div>
                </div>



                 {/* Section gauche */}

                 <div className={`${s.gauche} hidden md:block md:w-1/2 lottie-background `}>
                    <h1 className={`${s.soratra}`}> Accédez facilement à vos notes et à vos résultats en vous connectant à votre compte étudiant sécurisé.</h1>
                    <h1 className={`${s.soratra}`}>Découvrez les annonces d'événements passionnants directement depuis votre espace étudiant!</h1>
                    <h1 className={`${s.soratra}`}>Suivez vos emploi du temps en temps réel</h1>


                


                </div>

            </div>
        </Fragment>
    )
}
