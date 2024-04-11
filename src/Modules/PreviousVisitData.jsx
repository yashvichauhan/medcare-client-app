import React, { useState, useEffect } from "react";

export default function PreviousVisitsPage({ patientId }) {
    const [previousVisits, setPreviousVisits] = useState([]);

    // Mock function to simulate fetching previous visits for a patient
    const fetchPreviousVisitsForPatient = async (patientId) => {
        // Dummy data for previous visits
        const dummyData = [
            { patientName: "Patient 1", bodyTemperature: 98.6, heartRate: 70, bloodPressure: "120/80", respiratoryRate: 18 },
            { patientName: "Patient 1", bodyTemperature: 99.2, heartRate: 75, bloodPressure: "130/85", respiratoryRate: 20 }
        ];
        // Simulate API call delay with setTimeout
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(dummyData);
            }, 1000);
        });
    };

    // Fetch previous visits for the patient
    useEffect(() => {
        const fetchPreviousVisits = async () => {
            try {
                // Fetch previous visits data for the patientId
                const data = await fetchPreviousVisitsForPatient(patientId);
                // Update state with fetched data
                setPreviousVisits(data);
            } catch (error) {
                console.error("Error fetching previous visits:", error);
            }
        };

        fetchPreviousVisits();
    }, [patientId]);

    return (
        <div className="container mx-auto px-4 py-3">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Previous Visits</h1>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Patient Name</th>
                            <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Body Temperature (°F)</th>
                            <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Heart Rate (bpm)</th>
                            <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Blood Pressure (mmHg)</th>
                            <th className="px-4 py-2 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Respiratory Rate (bpm)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {previousVisits.map((visit, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{visit.patientName}</td>
                                <td className="border px-4 py-2">{visit.bodyTemperature}</td>
                                <td className="border px-4 py-2">{visit.heartRate}</td>
                                <td className="border px-4 py-2">{visit.bloodPressure}</td>
                                <td className="border px-4 py-2">{visit.respiratoryRate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
