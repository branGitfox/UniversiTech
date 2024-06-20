import React, { useContext } from 'react'
import s from "./emploiefiltersection1.module.css"
import { Fragment } from 'react'
import { useState } from 'react'
import CardDatafiliere from '../../data/Carddatafiliere'
import { Link, useParams } from 'react-router-dom'
import UserProvider from '../../hooks/UserProvider'

export default function Emploieffiltersection1() {
    const {annee} = useParams();
    const {userData} = useContext(UserProvider)
    const [filiere, setFiliere] = useState(CardDatafiliere)

const id_filiere = (fil) => {
    if(fil=='IGGLIA'){
        return 1
    }else if(fil=='ESIA'){
        return 2
    }else if(fil = 'EMII'){
        return 3
    }else{
        return 0
    }
}
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
                                <Link to={"/trueedt/"+annee+"/"+id_filiere(item.name)} className={`${s.categorie_sary} `} key={index}>
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
