// import React from "react";
// import { Link } from "react-router-dom";

// export default function PatientDashboard() {
//     // Dummy patient data (for demonstration)
//     const patientData = {
//         name: "John Doe",
//         age: 30,
//         gender: "Male",
//         email: "john.doe@example.com",
//         pulseRate: 70,
//         bloodPressure: "120/80",
//         weight: 150,
//         temperature: 98.6,
//         respiratoryRate: 18,
//         symptoms: "None",
//         // Add more fields as needed
//     };

//     return (
//         <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
//             <h2 className="text-2xl font-semibold mb-4">Patient Dashboard</h2>
//             <div className="mb-6">
//                 <div className="flex justify-between mb-4">
//                     <h3 className="text-lg font-medium">Patient Details</h3>
//                     <Link
//                         to="/edit-profile"
//                         className="text-indigo-600 hover:text-indigo-900"
//                     >
//                         Edit Profile
//                     </Link>
//                 </div>
//                 <div className="grid grid-cols-2 gap-y-2">
//                     <div>
//                         <p className="text-sm text-gray-600">Name:</p>
//                         <p>{patientData.name}</p>
//                     </div>
//                     <div>
//                         <p className="text-sm text-gray-600">Age:</p>
//                         <p>{patientData.age}</p>
//                     </div>
//                     <div>
//                         <p className="text-sm text-gray-600">Gender:</p>
//                         <p>{patientData.gender}</p>
//                     </div>
//                     <div>
//                         <p className="text-sm text-gray-600">Email:</p>
//                         <p>{patientData.email}</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="mb-6">
//                 <h3 className="text-lg font-medium mb-4">Daily Information</h3>
//                 <ul className="list-disc list-inside">
//                     <li>Pulse Rate: {patientData.pulseRate}</li>
//                     <li>Blood Pressure: {patientData.bloodPressure}</li>
//                     <li>Weight: {patientData.weight}</li>
//                     <li>Temperature: {patientData.temperature}</li>
//                     <li>Respiratory Rate: {patientData.respiratoryRate}</li>
//                 </ul>
//             </div>
//             <div className="mb-6">
//                 <h3 className="text-lg font-medium mb-2">Symptoms</h3>
//                 <p>{patientData.symptoms}</p>
//             </div>
//             <div className="flex justify-between">
//                 <Link
//                     to="/daily-information"
//                     className="py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                     Record Daily Info
//                 </Link>
//                 <Link
//                     to="/symptom-checklist"
//                     className="py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                     Log Symptoms
//                 </Link>
//             </div>
//         </div>
//     );
// }


import React from "react";
import { Link } from "react-router-dom";
import { FaUserEdit, FaHeartbeat, FaThermometerHalf, FaWeight, FaLungs, FaNotesMedical } from 'react-icons/fa';

export default function PatientDashboard() {
    const patientData = {
        name: "John Doe",
        age: 30,
        gender: "Male",
        email: "john.doe@example.com",
        pulseRate: 70,
        bloodPressure: "120/80",
        weight: 150,
        temperature: 98.6,
        respiratoryRate: 18,
        symptoms: "None",
    };

    return (
        <div className="mx-auto mt-8 p-6 rounded-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Patient Dashboard</h2>
            <div className="mb-6">
                <div className="flex justify-between mb-4">
                    <h3 className="text-lg font-medium text-blue-600">Patient Details <FaUserEdit /></h3>
                    {/* <Link
                        to="/edit-profile"
                        className="text-blue-500 hover:text-blue-700"
                    >
                        Edit Profile
                    </Link> */}
                </div>
                <div className="grid grid-cols-2 gap-y-2">
                    <div>
                        <p className="text-sm text-gray-600">Name:</p>
                        <p>{patientData.name}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Age:</p>
                        <p>{patientData.age}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Email:</p>
                        <p>{patientData.email}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Gender:</p>
                        <p>{patientData.gender}</p>    
                    </div>
                </div>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Daily Information</h3>
                <div className="flex flex-col justify-between">
                    <div className="flex items-center mb-2"><FaHeartbeat /> Pulse Rate: {patientData.pulseRate}</div>
                    <div className="flex items-center mb-2"><FaThermometerHalf /> Blood Pressure: {patientData.bloodPressure}</div>
                    <div className="flex items-center mb-2"><FaWeight /> Weight: {patientData.weight}</div>
                    <div className="flex items-center mb-2"><FaThermometerHalf /> Temperature: {patientData.temperature}</div>
                    <div className="flex items-center mb-2"><FaLungs /> Respiratory Rate: {patientData.respiratoryRate}</div>
                </div>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Symptoms <FaNotesMedical /></h3>
                <p>{patientData.symptoms}</p>
            </div>
            <div className="flex justify-between mt-6">
                <Link
                    to="/daily-information"
                    className="py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Record Daily Info
                </Link>
                <Link
                    to="/symptom-checklist"
                    className="py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Log Symptoms
                </Link>
            </div>
        </div>
    );
}
