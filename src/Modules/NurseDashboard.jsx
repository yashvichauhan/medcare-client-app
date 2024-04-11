// import React, { useState, useEffect } from "react";

// import { Link } from "react-router-dom";

// export default function NurseDashboard() {
    
//     const dummyVitalSigns = [
//         {
//             id: 1,
//             patient: {
//                 id: 1,
//                 name: "Patient 1"
//             },
//             bodyTemperature: 98.6,
//             heartRate: 70,
//             bloodPressure: "120/80",
//             respiratoryRate: 18
//         },
//         {
//             id: 2,
//             patient: {
//                 id: 2,
//                 name: "Patient 2"
//             },
//             bodyTemperature: 99.2,
//             heartRate: 75,
//             bloodPressure: "130/85",
//             respiratoryRate: 20
//         }
//     ];

//     return (
//         <>
//             <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//                 <div className="sm:mx-auto sm:w-full sm:max-w-screen-xl">
//                     <h2 className="mt-10 mb-6 text-center text-3xl font-bold leading-9 text-gray-900">
//                         Nurse Dashboard
//                     </h2>
//                     <div className="overflow-x-auto">
//                         <table className="w-full border-collapse table-auto">
//                             <thead>
//                                 <tr>
//                                     <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Patient Name</th>
//                                     <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Body Temperature (°F)</th>
//                                     <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Heart Rate (bpm)</th>
//                                     <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Blood Pressure (mmHg)</th>
//                                     <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Respiratory Rate (bpm)</th>
//                                     <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Record New Visit</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                             {dummyVitalSigns.map((vitalSign) => (
//                                     <tr key={vitalSign.id}>
//                                         <td className="border px-4 py-2">{vitalSign.patient.name}</td>
//                                         <td className="border px-4 py-2">{vitalSign.bodyTemperature}</td>
//                                         <td className="border px-4 py-2">{vitalSign.heartRate}</td>
//                                         <td className="border px-4 py-2">{vitalSign.bloodPressure}</td>
//                                         <td className="border px-4 py-2">{vitalSign.respiratoryRate}</td>
//                                         <td className="border px-4 py-2">
//                                             <Link
//                                                 to={`/record-visit`}
//                                                 className="text-indigo-600 hover:text-indigo-900"
//                                             >
//                                                 Record Visit
//                                             </Link>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                             {/* <tbody>
//                                 {patientData.map((patient) => (
//                                     <tr key={patient.id}>
//                                         <td className="border px-4 py-2">{patient.name}</td>
//                                         <td className="border px-4 py-2">{patient.bodyTemperature}</td>
//                                         <td className="border px-4 py-2">{patient.heartRate}</td>
//                                         <td className="border px-4 py-2">{patient.bloodPressure}</td>
//                                         <td className="border px-4 py-2">{patient.respiratoryRate}</td>
//                                         <td className="border px-4 py-2">
//                                             <Link
//                                                 to={`/record-visit/${patient.id}`} // Assuming you have a route for recording visits with the patient id as a parameter
//                                                 className="text-indigo-600 hover:text-indigo-900"
//                                             >
//                                                 Record Visit
//                                             </Link>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody> */}
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NurseDashboard() {
    
    const dummyVitalSigns = [
        {
            id: 1,
            patient: {
                id: 1,
                name: "Patient 1"
            },
            bodyTemperature: 98.6,
            heartRate: 70,
            bloodPressure: "120/80",
            respiratoryRate: 18
        },
        {
            id: 2,
            patient: {
                id: 2,
                name: "Patient 2"
            },
            bodyTemperature: 99.2,
            heartRate: 75,
            bloodPressure: "130/85",
            respiratoryRate: 20
        }
    ];

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-0 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-screen-xl">
                    <h2 className="mt-10 mb-6 text-center text-3xl font-bold leading-9 text-gray-900">
                        Nurse Dashboard
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse table-auto">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Patient Name</th>
                                    <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Body Temperature (°F)</th>
                                    <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Heart Rate (bpm)</th>
                                    <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Blood Pressure (mmHg)</th>
                                    <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Respiratory Rate (bpm)</th>
                                    <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyVitalSigns.map((vitalSign) => (
                                    <tr key={vitalSign.id}>
                                        <td className="border px-4 py-2">{vitalSign.patient.name}</td>
                                        <td className="border px-4 py-2">{vitalSign.bodyTemperature}</td>
                                        <td className="border px-4 py-2">{vitalSign.heartRate}</td>
                                        <td className="border px-4 py-2">{vitalSign.bloodPressure}</td>
                                        <td className="border px-4 py-2">{vitalSign.respiratoryRate}</td>
                                        <td className="border px-4 py-2">
                                            <Link
                                                to={{
                                                    pathname: `/previous-visit`,
                                                    state: { patientId: vitalSign.patient.id }
                                                }}
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                View Previous Visits
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="fixed bottom-4 right-4">
                        <Link
                            to="/record-visit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                            Record New Visit
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
