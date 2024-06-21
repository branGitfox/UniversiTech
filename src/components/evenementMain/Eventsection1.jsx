import React, { Fragment } from 'react'
import s from "./eventsection1.module.css"


export default function Eventsection1({ev}) {




    return (
        <Fragment>
            <div className={`${s.screen} d-flex  `}>


                {/* Section gauche */}

                <div className={`${s.gauche} w-full md:w-2/2 flex flex-col justify-between items-center  `}>



                    <div className={`${s.box1} d-flex flex-col gap-3 `}>

                        <h1>Date de publication :  <span>{ev.date}</span></h1>
                        <h1>Titre de l évènement : <span>{ev.titre}</span></h1>

                    </div>

                    <div className={`${s.box2} d-flex flex-col justify-center gap-8  `}>
                        <h1>{ev.description}</h1>
                    </div>
                </div>



            </div>
        </Fragment>
    )
}
