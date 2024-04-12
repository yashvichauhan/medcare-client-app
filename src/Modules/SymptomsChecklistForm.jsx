import React, { useState } from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md"; // Import MD icons
import { useNavigate } from "react-router-dom";

export default function SymptomChecklistForm() {
    // State variable to store selected symptoms
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);

    const navigate = useNavigate();

    // Dummy list of common signs and symptoms (for demonstration)
    const commonSymptoms = [
        "Fever or chills",
        "Cough",
        "Shortness of breath or difficulty breathing",
        "Fatigue",
        "Muscle or body aches",
        "Headache",
        "New loss of taste or smell",
        "Sore throat",
        "Congestion or runny nose",
        "Nausea or vomiting",
        "Diarrhea"
    ];

    // Function to handle selecting/deselecting symptoms
    const handleToggleSymptom = (symptom) => {
        if (selectedSymptoms.includes(symptom)) {
            setSelectedSymptoms(selectedSymptoms.filter(item => item !== symptom));
        } else {
            setSelectedSymptoms([...selectedSymptoms, symptom]);
        }
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform further actions here, such as sending the selected symptoms to a server
        console.log("Selected symptoms:", selectedSymptoms);
        navigate("/patient-dashboard"); // Redirect to the patient dashboard after submission
        // Reset selected symptoms after submission
        setSelectedSymptoms([]);
    };

    return (
        <div className="mt-8 px-6 py-0" style={{width: '55%', margin: '20px 100px'}}>
            <h2 className="text-2xl font-semibold mb-4">Symptom Checklist</h2>
            <h6>Please add all the symptoms you're experiencing here to get an insight on your condition.</h6>
            <br></br>
            <form onSubmit={handleSubmit}>
                {commonSymptoms.map((symptom, index) => (
                    <div key={index} className="flex items-center mb-3">
                        <label htmlFor={`symptom-${index}`}>
                        {selectedSymptoms.includes(symptom) ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                        </label>
                        <input
                        type="checkbox"
                        id={`symptom-${index}`}
                        value={symptom}
                        checked={selectedSymptoms.includes(symptom)}
                        onChange={() => handleToggleSymptom(symptom)}
                        className="mr-3"
                        style={{ display: "none" }} // Hide the default checkbox
                        />
                        <label htmlFor={`symptom-${index}`} className="text-sm font-medium text-gray-700">{symptom}</label>
                    </div>
                ))}

                <div className="mt-4">
                    <button
                        type="submit"
                        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
