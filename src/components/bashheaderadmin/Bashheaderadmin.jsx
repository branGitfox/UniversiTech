import React from 'react'
import s from "./bashheaderadmin.module.css"
import { Fragment } from 'react';
import { MdOutlineEventAvailable } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import {Link} from "react-router-dom"

export default function Bashheaderadmin() {
    return (
        <Fragment>

            <div className={`${s.screen} d-flex  `}>


                {/* Section gauche */}

                <div className={`${s.gauche} w-full md:w-1/2 flex flex-col justify-center items-center `}>



                    <div className={`${s.box1} d-flex flex-col justify-between gap-8  `}>
                        <PiStudentFill size={60} />
                        <h3>elève</h3>
                        <h1>20</h1>

                    </div>


                </div>


                {/* Section droite: formulaire de login */}
                <div className={`${s.droite} w-full md:w-1/2 flex flex-col justify-center items-center`}>

                    <div className={`${s.box2} d-flex flex-col justify-between gap-8  `}>
                        <MdOutlineEventAvailable size={60} />
                        <h3>elève</h3>
                        <h1>20</h1>
                        <Link to={'/modifevent'}>Ajoutez</Link>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
