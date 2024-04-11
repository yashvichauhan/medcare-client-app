import React from "react";

export default function RecordVisitForm({ patientId, patientName }) {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-bold leading-9 text-gray-900">
                    Record Visit for {patientName} (ID: {patientId})
                </h2>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="bodyTemperature" className="block text-sm font-medium leading-5 text-gray-700">
                            Body Temperature (°F)
                        </label>
                        <input
                            id="bodyTemperature"
                            name="bodyTemperature"
                            type="text"
                            autoComplete="off"
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="heartRate" className="block text-sm font-medium leading-5 text-gray-700">
                            Heart Rate (bpm)
                        </label>
                        <input
                            id="heartRate"
                            name="heartRate"
                            type="text"
                            autoComplete="off"
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="bloodPressure" className="block text-sm font-medium leading-5 text-gray-700">
                            Blood Pressure (mmHg)
                        </label>
                        <input
                            id="bloodPressure"
                            name="bloodPressure"
                            type="text"
                            autoComplete="off"
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="respiratoryRate" className="block text-sm font-medium leading-5 text-gray-700">
                            Respiratory Rate (bpm)
                        </label>
                        <input
                            id="respiratoryRate"
                            name="respiratoryRate"
                            type="text"
                            autoComplete="off"
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        >
                            Record
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
