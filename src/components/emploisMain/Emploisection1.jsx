import React, { Fragment, useContext } from 'react'
import s from "./emploisection1.module.css"
import Emploisecion1datas from '../../data/Emploisecion1data';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserProvider from '../../hooks/UserProvider'
export default function Emploisection1() {

    const [filiere, setFiliere] = useState(Emploisecion1datas)
    // const {userData} = useContext(UserProvider)
    
    



    return (
        <Fragment>

            <div className={`${s.screen} d-flex  `}>




                {/* Section droite: formulaire de login */}
                <div className={`${s.content} w-full md:w-2/2 flex flex-col justify-center items-center`}>
                    <div className={`${s.titre} `}>
                        <h2>Liste des emploi du temps</h2>
                    </div>

                    <div className={`${s.box_content} `}>
                        <div className={`${s.content_soratra} `}>
                            <h1 className={`${s.soratra} `}>Découvrez une multitude de filières passionnantes et prometteuses offertes dans les universités, conçues pour répondre aux aspirations et aux besoins de chacun.</h1>
                        </div>


                        {
                            filiere.map((item, index) => (
                                <div className={`${s.categorie_sary} `} key={index}>
                                    <div className={`${s.box_sary} flex-col`}>
                                        <img className={`${s.image}`} src={`image/icone/${item.sary}.png`} alt="" />
                                        <div className={`${s.box_text_image}`}>
                                            <h3>{item.name}</h3>
                                            <h4 className={`${s.classe}`}>{item.classe}</h4>
                                            <Link to={"/emploidutempsbyfiliere/"+item.classe} className={`pt-4 flex justify-center`}>
                                                <input className={`${s.seconnecter} ${s.apropos}  text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline`} type="submit" style={{ backgroundColor:  `${item.color}` }} value="Lire" />
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }



                    </div>


                </div>






            </div>
        </Fragment>
    )
}
