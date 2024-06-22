import React from 'react'
import s from "./section1.module.css"
import { Fragment } from 'react';
import CardDatafiliere from '../../data/Carddatafiliere';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Section1() {


  const [filiere, setFiliere] = useState(CardDatafiliere)
  useEffect(() => {
    AOS.init({
      duration: 1200, // durée de l'animation en millisecondes
      once: true, // si vrai, l'animation ne se déclenche qu'une seule fois
    });
    AOS.refresh(); 
  }, []);



  return (
    <Fragment>
      <div className={`${s.screen} d-flex  `}>




        {/* Section droite: formulaire de login */}
        <div className={`${s.content} w-full md:w-2/2 flex flex-col justify-center items-center`}>

          <div className={`${s.box_content} `}>
            <div className={`${s.content_soratra} `}>
              <h1 className={`${s.soratra} `}>Découvrez une multitude de filières passionnantes et prometteuses offertes dans les universités, conçues pour répondre aux aspirations et aux besoins de chacun.</h1>
            </div>


            {
              filiere.map((item, index) => (
                <div className={`${s.categorie_sary} `} key={index}>
                  <div className={`${s.box_sary} flex-col `}>
                    <img className={`${s.image}`} src={`image/icone/${item.sary}.png`} alt="" />
                    <h3>{item.name}</h3>
                  </div>
                
                </div>
              ))
            }



          </div>


        </div>






      </div>

    </Fragment >
  )
}
