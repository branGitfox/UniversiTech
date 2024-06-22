import React, { Fragment, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import s from "./header.module.css";
import { LuLogOut } from 'react-icons/lu';
import UserProvider from '../../hooks/UserProvider';
import Modal from 'react-modal';
import AOS from 'aos';
import 'aos/dist/aos.css';

Modal.setAppElement('#root');

export default function Header() {
  const navigate = useNavigate();
  const { userData } = useContext(UserProvider);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
    AOS.refresh();
  }, []);

  const toggle = (link) => {
    link === '' ? (userData.status = 0) : navigate('/' + link);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLogout = () => {
    userData.status = 0;
    navigate('/connexion');
    closeModal();
  };

  return (
    <Fragment>
      <div className={`${s.content} fixed top-0 left-0 right-0 z-10`}>
        <div className={`${s.box_content} flex justify-between text-center px-4 py-2`}>
          <div className={`${s.compte}`}>
            <div className={`${s.Box_sary} flex gap-4 text-center`}>
              <img src="/image/connexion/connexion.jpg" alt="" />
              <div className={`${s.Box_name_andfiliere}`}>
                <h4>{userData.name}</h4>
                <h3>{userData.filiere}</h3>
              </div>
            </div>
          </div>
          <div onClick={userData.status === 0 ? () => toggle('connexion') : openModal} className={`${s.deconnect}`}>
            {userData.status === 0 ? (
              <button className={`${s.btnconnect} py-2 px-4 bg-gray-800 text-gray-100`}>Se connecter</button>
            ) : (
              <button className={`${s.btndeconnect}`} style={{ background: '#1F2937', color: 'white', padding: '7px 10px', borderRadius: '5px' }}>
                <LuLogOut size={25} />
              </button>
            )}
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmation de déconnexion"
        className={`bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto my-8 ${modalIsOpen ? 'aos-init' : ''}`}
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center"
      >
        <h2 className="text-xl font-bold mb-4">Confirmer la déconnexion</h2>
        <p className="mb-6">Êtes-vous sûr de vouloir vous déconnecter ?</p>
        <div className="flex justify-end space-x-4">
          <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Oui</button>
          <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Non</button>
        </div>
      </Modal>
    </Fragment>
  );
}
