import React, { Fragment } from 'react';

export default function Trueedtsection1() {
    const scheduleData1 = [
        // Lundi à Mercredi
        {
            day: 'Lundi 17.06',
            slots: [
                { time: '7h15 à 9h15', subject: 'TD Programmation' },
                { time: '9h30 à 11h15', subject: 'Equations Différentielles' },
                { time: '12h30 à 14h', subject: 'Langage C' },
                { time: '14h à 15h30', subject: '' }
            ]
        },
        {
            day: 'Mardi 18.06',
            slots: [
                { time: '7h15 à 9h15', subject: 'SD/Java    ' },
                { time: '9h30 à 11h15', subject: 'CAE' },
                { time: '12h30 à 14h', subject: '' },
                { time: '14h à 15h30', subject: 'Examen TP Programmation' }
            ]
        },
        {
            day: 'Mercredi 19.06',
            slots: [
                { time: '7h15 à 9h15', subject: '' },
                { time: '9h30 à 11h15', subject: '' },
                { time: '12h30 à 14h', subject: '' },
                { time: '14h à 15h30', subject: '' }
            ]
        }
    ];

    const scheduleData2 = [
        // Jeudi à Samedi
        {
            day: 'Jeudi 20.06',
            slots: [
                { time: '7h15 à 9h15', subject: 'Comptabilité' },
                { time: '9h30 à 11h15', subject: 'Recherche Opérationnelle (IGGLIA2-ISAIA2)' },
                { time: '12h30 à 14h', subject: '' },
                { time: '14h à 15h30', subject: '' }
            ]
        },
        {
            day: 'Vendredi 21.06',
            slots: [
                { time: '7h15 à 9h15', subject: 'JavaScript' },
                { time: '9h30 à 11h15', subject: 'Technique Bancaire' },
                { time: '12h30 à 14h', subject: 'Merise ' },
                { time: '14h à 15h30', subject: '' }
            ]
        },
        {
            day: 'Samedi 22.06',
            slots: [
                { time: '7h15 à 9h15', subject: 'TD Programmation' },
                { time: '9h30 à 11h15', subject: 'PHP ' },
                { time: '12h30 à 14h', subject: '' },
                { time: '14h à 15h30', subject: '' }
            ]
        }
    ];

    const timeSlots = ['7h15 à 9h15', '9h30 à 11h15', '12h30 à 14h', '14h à 15h30'];

    return (
        <Fragment>

            <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
                <h1 className="text-3xl font-bold mb-4">IGLLIA</h1>


                <div className="space-y-8">


                    <div className="bg-white rounded-lg shadow overflow-hidden">

                        <table className="table-fixed w-full border-collapse">
                            <thead>
                                <tr className="bg-blue-600 text-white">
                                    <th className="w-1/5 px-4 py-2 border">Heure</th>
                                    {scheduleData1.map((day, index) => (
                                        <th key={index} className="w-1/5 px-4 py-2 border">{day.day}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {timeSlots.map((slot, slotIndex) => (
                                    <tr key={slotIndex}>
                                        <td className="bg-blue-200 px-4 py-2 border text-center font-bold">{slot}</td>
                                        {scheduleData1.map((day, dayIndex) => (
                                            <td key={dayIndex} className="px-4 py-2 border text-center">
                                                {day.slots[slotIndex].subject}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>


                    <div className="bg-white rounded-lg shadow overflow-hidden">

                        <table className="table-fixed w-full border-collapse">
                            <thead>
                                <tr className="bg-blue-600 text-white">
                                    <th className="w-1/5 px-4 py-2 border">Heure</th>
                                    {scheduleData2.map((day, index) => (
                                        <th key={index} className="w-1/5 px-4 py-2 border">{day.day}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {timeSlots.map((slot, slotIndex) => (
                                    <tr key={slotIndex}>
                                        <td className="bg-blue-200 px-4 py-2 border text-center font-bold">{slot}</td>
                                        {scheduleData2.map((day, dayIndex) => (
                                            <td key={dayIndex} className="px-4 py-2 border text-center">
                                                {day.slots[slotIndex].subject}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>


                </div>

            </div>


        </Fragment>
    );
}
