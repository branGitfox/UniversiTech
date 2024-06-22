import React, { Fragment, useContext, useEffect, useState } from 'react';
import s from "./connexion.module.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import test from "../../Lottie/14.json";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importer les styles AOS
import UserContext from '../../hooks/UserProvider'; // Importez le contexte utilisateur


export default function Connexion() {
  const { userData, setStudents } = useContext(UserContext); // Utilisez setStudents depuis le contexte
  const navigate = useNavigate();
  const [members, setMembers] = useState();
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    AOS.init({

    });
  }, []);

  const getUser = async () => {
    const res = await fetch('http://localhost/api/index.php');
    const jsonData = await res.json();
    setMembers(jsonData);
  };

  console.log(members)

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const chercheMember = members.find(
      (member) =>
        member.email === inputs.email && member.password === inputs.password
    );

    console.log(chercheMember);
    if (chercheMember) {
      setStudents({ name: chercheMember[1], filiere: chercheMember[8], status: 1, id_filiere: chercheMember.id_filiere }); // Mettez à jour les données de l'utilisateur avec setStudents
      navigate('/');
      // console.log(userData)
    } else {
      alert('Veuillez vérifier vos informations');
    }
  };




  return (
    <Fragment>
      <div className={`${s.screen} d-flex  `}>


        {/* Section gauche: grande photo */}
        <div className={`${s.sary} hidden md:block md:w-1/2 lottie-background`}>
          <div className={`${s.lotti}`}>
            <Lottie animationData={test} size={10} />
          </div>

          <div className={`${s.text_parents}`}>

            <h1 className={`${s.logo}  p-8  text-3xl  `}>UniversiTech</h1>
            <div className={`${s.text}  text-gr p-8 `}>
              <p >Connectez-vous pour accéder à tous vos outils Universitaire et à votre espace Universitaire Personnalisé en un seul endroit.</p>

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
