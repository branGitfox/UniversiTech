import React from 'react'
import s from "./emploiefiltersection1.module.css"
import { Fragment } from 'react'
import { useState } from 'react'
import CardDatafiliere from '../../data/Carddatafiliere'
import { Link } from 'react-router-dom'


export default function Emploieffiltersection1() {

    const [filiere, setFiliere] = useState(CardDatafiliere)


    return (
        <Fragment>
            <div className={`${s.screen} d-flex  `}>




                {/* Section droite: formulaire de login */}
                <div className={`${s.content} w-full md:w-2/2 flex flex-col justify-center items-center`}>

                    <div className={`${s.box_content} `}>
                        <div className={`${s.content_soratra} `}>
                            <h1 className={`${s.soratra} `}>Les emplois du temps des première année</h1>
                        </div>


                        {
                            filiere.map((item, index) => (
                                <Link to="/trueedt" className={`${s.categorie_sary} `} key={index}>
                                    <div className={`${s.box_sary} flex-col`}>
                                        <img className={`${s.image}`} src={`image/icone/${item.sary}.png`} alt="" />
                                        <h3>{item.name}</h3>
                                    </div>

                                </Link>
                            ))
                        }



                    </div>


                </div>






            </div>

        </Fragment >
    )
}
