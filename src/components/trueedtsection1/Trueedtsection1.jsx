import React, { Fragment } from 'react';

export default function Trueedtsection1({emplois}) {

    const scheduleData1 = [
        // Lundi à Mercredi
        {
            day: 'Lundi',
            slots: [
                { time: '7h15 à 9h15', subject: 'TD Programmation' },
                { time: '9h30 à 11h15', subject: 'Equations Différentielles' },
                { time: '12h30 à 14h', subject: 'Langage C' },
                { time: '14h à 15h30', subject: '' }
            ]
        },
        {
            day: 'Mardi',
            slots: [
                { time: '7h15 à 9h15', subject: 'SD/Java    ' },
                { time: '9h30 à 11h15', subject: 'CAE' },
                { time: '12h30 à 14h', subject: '' },
                { time: '14h à 15h30', subject: 'Examen TP Programmation' }
            ]
        },
        {
            day: 'Mercredi',
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
            day: 'Jeudi',
            slots: [
                { time: '7h15 à 9h15', subject: 'Comptabilité' },
                { time: '9h30 à 11h15', subject: 'Recherche Opérationnelle (IGGLIA2-ISAIA2)' },
                { time: '12h30 à 14h', subject: '' },
                { time: '14h à 15h30', subject: '' }
            ]
        },
        {
            day: 'Vendredi',
            slots: [
                { time: '7h15 à 9h15', subject: 'JavaScript' },
                { time: '9h30 à 11h15', subject: 'Technique Bancaire' },
                { time: '12h30 à 14h', subject: 'Merise ' },
                { time: '14h à 15h30', subject: '' }
            ]
        },
        {
            day: 'Samedi',
            slots: [
                { time: '7h15 à 9h15', subject: 'TD Programmation' },
                { time: '9h30 à 11h15', subject: 'PHP ' },
                { time: '12h30 à 14h', subject: '' },
                { time: '14h à 15h30', subject: '' }
            ]
        }
    ];

   

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
                                
                                <tr>
                                    <td className="bg-blue-200 px-4 py-2 border text-center font-bold">7h15-9h15</td>
                                  
                                        <td className="px-4 py-2 border text-center">
                                        {emplois.lundi_7h15_9h15}
                                            
                                        </td>
                                        <td className="px-4 py-2 border text-center">
                                        {emplois.mardi_7h15_9h15}
                                            
                                        </td>
                                        
                                        <td className="px-4 py-2 border text-center">
                                         {emplois.mercredi_7h_9h15} 
                                            
                                        </td>
                                   
                                </tr>
                                <tr>
                                    <td className="bg-blue-200 px-4 py-2 border text-center font-bold">9h15-11h15</td>
                                  
                                        <td className="px-4 py-2 border text-center">
                                            {emplois.lundi_9h15_11h15}
                                        </td>
                                        <td className="px-4 py-2 border text-center">
                                        {emplois.mardi_9h15_11h15}
                                            
                                        </td>
                                        <td className="px-4 py-2 border text-center">
                                        {emplois.mercredi_9h15_11h15}
                                            
                                        </td>
                                   
                                </tr>
                                <tr>
                                    <td className="bg-blue-200 px-4 py-2 border text-center font-bold">12h30-14h</td>
                                  
                                        <td className="px-4 py-2 border text-center">
                                        {emplois.lundi_12h30_14h}
                                            
                                        </td>
                                        <td className="px-4 py-2 border text-center">
                                        {emplois.mardi_12h30_14h}
                                            
                                        </td>
                                        <td className="px-4 py-2 border text-center">
                                        {emplois.mercredi_12h30_14h}
                                            
                                        </td>
                                   
                                </tr>
                                <tr>
                                    <td className="bg-blue-200 px-4 py-2 border text-center font-bold">14h-15h30</td>
                                  
                                        <td className="px-4 py-2 border text-center">
                                        {emplois.lundi_14h_15h30}
                                            
                                        </td>

                                        <td className="px-4 py-2 border text-center">
                                        {emplois.mardi_14h_15h30}
                                            
                                        </td>
                                        <td className="px-4 py-2 border text-center">
                                        {emplois.mercredi_14h_15h30}
                                            
                                        </td>
                                   
                                </tr>           
                           
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
                                
                                    <tr>
                                        <td className="bg-blue-200 px-4 py-2 border text-center font-bold">7h15-9h15</td>
                                      
                                            <td className="px-4 py-2 border text-center">
                                            {emplois.jeudi_7h15_9h15}
                                                
                                            </td>
                                            <td className="px-4 py-2 border text-center">
                                            {emplois.vendredi_7h15_9h15}
                                                
                                            </td>
                                            <td className="px-4 py-2 border text-center">
                                            {emplois.samedi_7h15_9h15}
                                                
                                            </td>
                                       
                                    </tr>
                                    <tr>
                                        <td className="bg-blue-200 px-4 py-2 border text-center font-bold">9h15-11h15</td>
                                      
                                            <td className="px-4 py-2 border text-center">
                                                {emplois.jeudi_9h15_11h15}
                                            </td>
                                            <td className="px-4 py-2 border text-center">
                                                {emplois.vendredi_9h15_11h15}
                                                
                                            </td>
                                            <td className="px-4 py-2 border text-center">
                                                {emplois.samedi_9h15_11h15}
                                                
                                            </td>
                                       
                                    </tr>
                                    <tr>
                                        <td className="bg-blue-200 px-4 py-2 border text-center font-bold">12h30-14h</td>
                                      
                                            <td className="px-4 py-2 border text-center">
                                            {emplois.jeudi_12h30_14h}
                                                
                                            </td>
                                            <td className="px-4 py-2 border text-center">
                                            {emplois.vendredi_12h30_14h}
                                                
                                            </td>
                                       
                                    </tr>
                                    <tr>
                                        <td className="bg-blue-200 px-4 py-2 border text-center font-bold">14h-15h30</td>
                                      
                                            <td className="px-4 py-2 border text-center">
                                            {emplois.jeudi_14h_15h30}
                                                
                                            </td>

                                            <td className="px-4 py-2 border text-center">
                                            {emplois.vendredi_14h_15h30}
                                                
                                            </td>
                                       
                                    </tr>           
                               
                            </tbody>
                        </table>

                    </div>


                </div>

            </div>


        </Fragment>
    );
}
