import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { useNavigate } from "react-router-dom";

export default function SymptomChecklistForm() {
    const [model, setModel] = useState(null);
    const [symptoms, setSymptoms] = useState({
        feverChills: false,
        cough: false,
        breathingDifficulty: false,
        fatigue: false,
        bodyAches: false,
        headache: false,
        tasteSmellLoss: false,
        soreThroat: false,
        congestionRunnyNose: false,
        nauseaVomiting: false,
        diarrhea: false
    });
    const [modelReady, setModelReady] = useState(false);

    const navigate = useNavigate();

    // Train the model
    useEffect(() => {
        async function trainModel() {
            const model = tf.sequential();
            model.add(tf.layers.dense({ inputShape: [11], units: 8, activation: 'relu' }));
            model.add(tf.layers.dense({ units: 4, activation: 'relu' }));
            model.add(tf.layers.dense({ units: 5, activation: 'softmax' }));
            model.compile({ optimizer: 'adam', loss: 'categoricalCrossentropy', metrics: ['accuracy'] });

            // Generate synthetic training data
            const { symptoms, labels } = generateData(1000);
            const xs = tf.tensor2d(symptoms);
            const ys = tf.tensor2d(labels);

            // Train the model
            await model.fit(xs, ys, { epochs: 50 });

            setModel(model);
            setModelReady(true);
        }

        trainModel();
    }, []);

    // Function to generate synthetic training data
    function generateData(numSamples) {
        const symptoms = [];
        const labels = [];
        for (let i = 0; i < numSamples; i++) {
            const symptomVector = [
                Math.round(Math.random()), // Fever or Chills
                Math.round(Math.random()), // Cough
                Math.round(Math.random()), // Shortness of breath or Difficulty breathing
                Math.round(Math.random()), // Fatigue
                Math.round(Math.random()), // Muscle or Body Aches
                Math.round(Math.random()), // Headache
                Math.round(Math.random()), // New loss of taste or smell
                Math.round(Math.random()), // Sore throat
                Math.round(Math.random()), // Congestion or Runny nose
                Math.round(Math.random()), // Nausea or Vomiting
                Math.round(Math.random())  // Diarrhea
            ];
            symptoms.push(symptomVector);

            // Simulate label based on symptoms
            const conditionIndex = Math.floor(Math.random() * 5); // Random condition index (0 to 4)
            const label = Array(5).fill(0);
            label[conditionIndex] = 1;
            labels.push(label);
        }
        return { symptoms, labels };
    }

    // Function to make predictions
    const predict = () => {
        if (!model) return;
        console.log('symptoms')
        console.log(symptoms);
        const symptomValues = Object.values(symptoms).map(value => value ? 1 : 0);
        console.log('symptom values->')
        console.log(symptomValues)
        const inputTensor = tf.tensor2d([symptomValues]);
        const prediction = model.predict(inputTensor);
        const conditionIndex = prediction.argMax(1).dataSync()[0];
        const conditions = ["Common Cold", "Flu", "Pneumonia", "Food Poisoning", "Allergies"];
        const predictedCondition = conditions[conditionIndex];
    
        navigate("/patient-dashboard", {state: predictedCondition});
    };

    // Event handler for checkbox changes
    const handleCheckboxChange = (symptom) => {
        setSymptoms(prevState => ({
            ...prevState,
            [symptom]: !prevState[symptom]
        }));
    };

     // Function to handle form submission
     const handleSubmit = (event) => {
        event.preventDefault();
        predict();

        setSymptoms({
            feverChills: false,
            cough: false,
            breathingDifficulty: false,
            fatigue: false,
            bodyAches: false,
            headache: false,
            tasteSmellLoss: false,
            soreThroat: false,
            congestionRunnyNose: false,
            nauseaVomiting: false,
            diarrhea: false
        }
        );
    };


    return (
        <div className="mt-8 px-6 py-0" style={{width: '55%', margin: '20px 100px'}}>
            <h2 className="text-2xl font-semibold mb-4">Symptom Checklist</h2>
            <h6>Please add all the symptoms you're experiencing here to get an insight on your condition.</h6>
            <br></br>
            <form onSubmit={handleSubmit}>
            {modelReady ? (
                <div>
                    {/* Checkbox inputs for symptoms */}
                    {Object.entries(symptoms).map(([symptom, checked]) => (
                        <div key={symptom}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => handleCheckboxChange(symptom)}
                                />
                                &nbsp;{symptom.replace(/([A-Z])/g, ' $1').trim()}
                            </label>
                           

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
                </div>
            
            ) : (
                <p>Loading AI model...</p>
            )}
            </form>
           
        </div>
    );
}
