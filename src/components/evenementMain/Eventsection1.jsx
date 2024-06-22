import React, { Fragment, useContext, useState } from 'react';
import s from "./eventsection1.module.css";
import { useNavigate } from 'react-router';
import UserContext from '../../hooks/UserProvider';
import { MdDeleteForever } from "react-icons/md";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function Eventsection1({ ev, setid }) {
  const { userData } = useContext(UserContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = () => {
    setid(ev.id_event);
    closeModal();
  };

  return (
    <Fragment>
      <div className={`${s.screen} d-flex`}>
        <div className={`${s.gauche} w-full md:w-2/2 flex flex-col justify-between items-center`}>
          {userData.name === 'Admin' && (
            <button className={`${s.deleteevent}`} onClick={openModal}>
              <MdDeleteForever size={30} />
            </button>
          )}

          <div className={`${s.box1} d-flex flex-col gap-3`}>
            <h1>Date de publication : <span>{ev.date}</span></h1>
            <h1>Titre de l'évènement : <span>{ev.titre}</span></h1>
          </div>

          <div className={`${s.box2} d-flex flex-col justify-center gap-8`}>
            <h1>{ev.description}</h1>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmation de suppression"
        className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto my-8"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center"
      >
        <h2 className="text-xl font-bold mb-4">Confirmer la suppression</h2>
        <p className="mb-6">Êtes-vous sûr de vouloir supprimer cet événement ?</p>
        <div className="flex justify-end space-x-4">
          <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700">Oui</button>
          <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Non</button>
        </div>
      </Modal>
    </Fragment>
  );
}
