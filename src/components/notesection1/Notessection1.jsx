import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import s from './notesection.module.css';

export default function Notessection1() {
    const studentInfo = {
        name: "MAROLAHY Sammy Frederic",
        number: 30,
        units: [
            {
                name: "Unité-1",
                subjects: [
                    { name: "Technique Bancaire", coeff: 3, notes: 20 },
                    { name: "Comptabilité", coeff: 3, notes: 20 },
                    { name: "Comptabilité Analytique d’entreprise", coeff: 3, notes: 20 },
                ],
            },
            {
                name: "Unité-2",
                subjects: [
                    { name: "JavaScript", coeff: 4, notes: 20 },
                    { name: "Php", coeff: 3, notes: 20 },
                    { name: "Turbo C", coeff: 4, notes: 20 },
                ],
            },
            {
                name: "Unité-3",
                subjects: [
                    { name: "Structure de données/JAVA", coeff: 4, notes: 20 },
                    { name: "Merise", coeff: 4, notes: 20 },
                    { name: "Réseau", coeff: 4, notes: 20 },
                ],
            },
            {
                name: "Unité-4",
                subjects: [
                    { name: "Equation differentielle", coeff: 3, notes: 20 },
                    { name: "Maths Analyse", coeff: 3, notes: 20 },
                    { name: "Recherche Opérationnelle", coeff: 4, notes: 20 },
                ],
            },
            {
                name: "Unité-5",
                subjects: [{ name: "Dictée Français", coeff: 3, notes: 20 }],
            },
            {
                name: "Unité-6",
                subjects: [{ name: "Projet", coeff: 8, notes: 20 }],
            },
        ],
        reputation: {
            total: 1090,
            moyen: 20.57,
            rank: "1/57",
            mention: "Tres Honorable",
            remark: "Aucune",
        },
    };

    return (
        <Fragment>
            <div className={`${s.screen}  items-center`}>


                <div className="w-full md:w-4/4 lg:w-4/3 flex flex-col lg:flex-row bg-gray-100 p-4 shadow-md rounded-lg">

                    <div className="w-full lg:w-3/4 bg-white p-4 rounded-lg">

                        <div className="bg-blue-500 text-white text-center py-2 rounded-t-lg">
                            <h1 className="text-lg font-semibold">LISTES DES NOTES</h1>
                        </div>

                        <div className="p-4">
                            <h2 className="text-gray-700 font-semibold text-center">IGGLIA 2A</h2>

                            <div className="text-center my-4">
                                <p>Nom(s) et Prénom(s): <span className="font-semibold">{studentInfo.name}</span></p>
                                <p>Numero: <span className="font-semibold">{studentInfo.number}</span></p>
                            </div>

                            {studentInfo.units.map((unit, index) => (
                                <div key={index} className="mb-4">
                                    <h3 className="bg-blue-500 text-white px-2 py-1">{unit.name}</h3>
                                    <table className="min-w-full bg-white">
                                        <thead>
                                            <tr>
                                                <th className="w-1/2 px-4 py-2 border">Matière</th>
                                                <th className="w-1/4 px-4 py-2 border">Coeff</th>
                                                <th className="w-1/4 px-4 py-2 border">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {unit.subjects.map((subject, subIndex) => (
                                                <tr key={subIndex}>
                                                    <td className="border px-4 py-2">{subject.name}</td>
                                                    <td className="border px-4 py-2 text-center">{subject.coeff}</td>
                                                    <td className="border px-4 py-2 text-center">{subject.notes}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}

                        </div>

                    </div>

                    <div className="w-full lg:w-1/4 bg-white p-4 rounded-lg lg:ml-4 mt-4 lg:mt-0">
                        <h3 className="text-blue-500 font-semibold">Récapitulation</h3>
                        <p>Total: <span className="font-semibold">{studentInfo.reputation.total}</span></p>
                        <p>Moyenne: <span className="font-semibold">{studentInfo.reputation.moyen}</span></p>
                        <p>Rang: <span className="font-semibold">{studentInfo.reputation.rank}</span></p>
                        <p>Mention: <span className="font-semibold">{studentInfo.reputation.mention}</span></p>
                        <p>Remarque: <span className="font-semibold">{studentInfo.reputation.remark}</span></p>
                    </div>

                </div>
            </div>
        </Fragment>
    );
}
