import React, { Fragment, useContext } from 'react';
import { useNavigate } from 'react-router';
import s from "./header.module.css";
import { LuLogOut } from 'react-icons/lu';
import UserProvider from '../../hooks/UserProvider'; // Importez le contexte utilisateur

export default function Header() {
  const navigate = useNavigate()
  const { userData } = useContext(UserProvider); // Accédez aux données utilisateur depuis le contexte
  const toggle = (link) => {
    link===''?userData.status = 0:navigate('/'+link)
    
  }
  console.log(userData);

  return (
    <Fragment>
      <div className={`${s.content} fixed top-0 left-0 right-0 z-10`}>
        <div className={`${s.box_content} flex justify-between text-center px-4 py-2`}>
          <div className={`${s.compte}`}>
            <div className={`${s.Box_sary} flex gap-4 text-center`}>
              <img src="/image/connexion/connexion.jpg" alt="" />
              <div className={`${s.Box_name_andfiliere}`}>
                <h4>{userData.name}</h4> {/* Utilisez le nom de l'utilisateur depuis le contexte */}
                <h3>{userData.filiere}</h3> {/* Utilisez la filière de l'utilisateur depuis le contexte */}
              </div>
            </div>
          </div>
          <div onClick={()=>toggle(userData.status === 0?"connexion":'')} className={`${s.deconnect}`}>
           {userData.status === 0?<button  className={`${s.btnconnect} py-2 px-4  bg-gray-800  text-gray-100`} >Se connecter</button>:<button style={{background:'orangered', color:'white', padding:'7px 10px', borderRadius:'5px'}}><LuLogOut size={25} /></button>} 
          </div>
        </div>
      </div>
    </Fragment>
  );
}
