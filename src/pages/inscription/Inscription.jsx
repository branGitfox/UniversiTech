import React from 'react'
import s from "./inscription.module.css"
import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Lottie from 'lottie-react';
import test from "../../Lottie/8.json";

export default function Inscription() {

  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }


  const handleSubmit = async (e) => {

    e.preventDefault();
    console.log(`Nom : ${inputs.name} ; Prenom : ${inputs.firstName} ; email : ${inputs.email} ; mot de passe : ${inputs.password} ; `);

    try {
      const response = await axios.post('http://localhost/api/', inputs)
      console.log('reponse ', response.data)
      navigate("/connexion")
    } catch (error) {
      console.error('Erreur lors de la requête:', error)
    }

  }





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
          <h2 className="text-3xl font-bold mb-6">inscription</h2>


          <form className="w-full max-w-sm" onSubmit={handleSubmit}>

            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">
                  Nom
                </label>
                <input
                  className={`${s.name}  appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  id="name"
                  type="text"
                  placeholder="RAZAFITIANA"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="w-1/2 pl-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prenom">
                  Prenom
                </label>
                <input
                  className={`${s.firstName}  appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  id="firstName"
                  type="text"
                  placeholder="Loic"
                  name="firstname"
                  onChange={handleChange}
                  required
                />
              </div>

            </div>



            <div className="mb-6">
              <label for="filière" className="block text-gray-700 text-sm font-bold mb-2">
                Filière
              </label>
              <select
                className={`${s.filière} appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="filière"
                name="filiere"
                onChange={handleChange}
                required
              >
                <option value="1" selected>IGGLIA</option>
                <option value="2" selected>TOUR</option>
                <option value="3" selected>ESIIA</option>
                <option value="4" selected>EMI</option>
                <option value="5" selected>TOUR</option>
            
              </select>
            </div>

            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                  Date de naissance
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

              <div className="w-1/2 pl-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tel">
                  Tel
                </label>
                <input
                  className={`${s.tel}  appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  id="tel"
                  type="tel"
                  placeholder="0342290407"
                  name="tel"
                  onChange={handleChange}
                  required
                />
              </div>

            </div>



            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="matricule">
                Numéro matricule
              </label>
              <input
                className={`${s.matricule}  appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="matricule"
                type="tel"
                placeholder="4507921864"
                name="matricule"
                onChange={handleChange}
                required
              />
            </div>


            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="matricule">
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
              <input className={`${s.seconnecter} text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline`} type="submit" value="s' inscrire" />
            </div>

            <div className="flex items-center justify-between pt-4">
              <h3>Vous possedez déja un compte ? </h3>
              <Link className={`${s.link_inscription}`} to="/connexion">identifiez vous</Link>
            </div>

          </form>

          <img className={`${s.deco}`} src="./image/connexion/deco1.png" alt="" width={100} />
          <img className={`${s.deco2}`} src="./image/inscription/deco5.png" alt="" width={100} />
          {/* <img className={`${s.deco3}`} src="./image/connexion/deco1.png" alt="" width={200} /> */}
        </div>
      </div>
    </Fragment>
  )
}
