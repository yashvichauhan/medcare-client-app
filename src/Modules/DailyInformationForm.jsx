import React, { useState } from "react";
import { MdFavorite, MdWhatshot, MdOpacity, MdStraighten, MdDirectionsWalk } from "react-icons/md";

export default function DailyInformationForm() {
    const [pulseRate, setPulseRate] = useState(70);
    const [bloodPressure, setBloodPressure] = useState("120/80");
    const [weight, setWeight] = useState(150);
    const [temperature, setTemperature] = useState(98.6);
    const [respiratoryRate, setRespiratoryRate] = useState(18);

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", { pulseRate, bloodPressure, weight, temperature, respiratoryRate });
        setPulseRate(0);
        setBloodPressure("");
        setWeight(0);
        setTemperature(0);
        setRespiratoryRate(0);
    };
    
    return (
        <div  style={{width: '65%', margin: '50px auto'}}>
            <h2 className="text-2xl font-semibold mb-4 bg-indigo-600 text-white px-6 py-3 flex items-center justify-between">
                <span>Enter Daily Information</span>
                <MdWhatshot className="text-xl" />
            </h2>
            <form onSubmit={handleSubmit} className="px-6 py-4">
                <div className="mb-4 flex items-center">
                    <MdFavorite className="mr-2 text-indigo-600" />
                    <input
                        type="number"
                        id="pulseRate"
                        name="pulseRate"
                        value={pulseRate}
                        onChange={(e) => setPulseRate(e.target.value)}
                        placeholder="Pulse Rate"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <MdOpacity className="mr-2 text-indigo-600" />
                    <input
                        type="text"
                        id="bloodPressure"
                        name="bloodPressure"
                        value={bloodPressure}
                        onChange={(e) => setBloodPressure(e.target.value)}
                        placeholder="Blood Pressure"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <MdStraighten className="mr-2 text-indigo-600" />
                    <input
                        type="number"
                        id="weight"
                        name="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Weight"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <MdWhatshot className="mr-2 text-indigo-600" />
                    <input
                        type="number"
                        id="temperature"
                        name="temperature"
                        value={temperature}
                        onChange={(e) => setTemperature(e.target.value)}
                        placeholder="Temperature"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <MdDirectionsWalk className="mr-2 text-indigo-600" />
                    <input
                        type="number"
                        id="respiratoryRate"
                        name="respiratoryRate"
                        value={respiratoryRate}
                        onChange={(e) => setRespiratoryRate(e.target.value)}
                        placeholder="Respiratory Rate"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
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
