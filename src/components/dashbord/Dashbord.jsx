import React, { Fragment } from 'react';
import s from "./dasboard.module.css";
import { MdDeleteForever } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
const users = [
    { id: 1, name: 'User One' },
    { id: 2, name: 'User Two' },
    { id: 3, name: 'User Three' },
];

export default function Dashboard() {
    const data = [
        {
            nom: 'Orange ',
            email: 'orange@gmail.com',
            numero: "0342290407",
            filiere: 'IGGLIA 1A',
        },
        {
            nom: 'moi ',
            email: 'moi@gmail.com',
            numero: "0331142032",
            filiere: 'IGGLIA 2A',
        },
      


    ];

    return (

        <Fragment>

            <div className={`${s.screen} d-flex  `}>

                <div className="container mx-auto">
                <h1 className={`${s.info} d-flex  `}>Information</h1>
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="">
                                <th className={`${s.titre} px-4 py-2 font-bold `}>Nom</th>
                                <th className={`${s.titre} px-4 py-2 font-bold `}>Email</th>
                                <th className={`${s.titre} px-4 py-2 font-bold `}>Telephone</th>
                                <th className={`${s.titre} px-4 py-2 font-bold `}>Filière</th>
                                <th className={`${s.titre} px-4 py-2 font-bold `}>Modification</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className="">
                                    <td className="px-4 py-2">{item.nom}</td>
                                    <td className="px-4 py-2">{item.email}</td>
                                    <td className="px-4 py-2">{item.numero}</td>
                                    <td className="px-4 py-2">{item.filiere}</td>
                                    <td className="py-2 px-4   flex items-center justify-center gap-2">
                                        <MdModeEditOutline className={`${s.voir}  `} size={25} />
                                        <MdDeleteForever className={`${s.delete}  `} size={25} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
};
