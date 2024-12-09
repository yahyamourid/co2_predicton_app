import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [engineSize, setEngineSize] = useState(0);
  const [cylinders, setCylinders] = useState(0);
  const [fuelConsumptionCity, setFuelConsumptionCity] = useState(0);
  const [fuelConsumptionHwy, setFuelConsumptionHwy] = useState(0);
  const [fuelConsumptionComb, setFuelConsumptionComb] = useState(0);
  const [fuelConsumptionComb1, setFuelConsumptionComb1] = useState(0);
  const [fuelType, setFuelType] = useState("D");
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      Engine_Size: engineSize,
      Cylinders: cylinders,
      Fuel_Consumption_City: fuelConsumptionCity,
      Fuel_Consumption_Hwy: fuelConsumptionHwy,
      Fuel_Consumption_Comb: fuelConsumptionComb,
      Fuel_Consumption_Comb_1: fuelConsumptionComb1,
      Fuel_Type: fuelType,
    };

    try {
      const response = await axios.post("http://127.0.0.1:8000/predict", data);
      console.log(response);
      setPrediction(response.data.predicitons); 
      
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screem min-h-screen mx-auto p-6 bg-green-200 gap-10">
      <h1 className="text-3xl font-bold mb-4">CO2 Emission Prediction</h1>
      <form onSubmit={handleSubmit} className="flex flex-col bg-white w-1/2 p-6 space-y-4 rounded-lg shadow">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Engine Size (L)</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-0"
              value={engineSize}
              onChange={(e) => setEngineSize(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Cylinders</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={cylinders}
              onChange={(e) => setCylinders(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Fuel Consumption City (L/100 km)</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={fuelConsumptionCity}
              onChange={(e) => setFuelConsumptionCity(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Fuel Consumption Highway (L/100 km)</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={fuelConsumptionHwy}
              onChange={(e) => setFuelConsumptionHwy(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Fuel Consumption Combined (L/100 km)</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={fuelConsumptionComb}
              onChange={(e) => setFuelConsumptionComb(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Fuel Consumption Combined 1 (g/km)</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              value={fuelConsumptionComb1}
              onChange={(e) => setFuelConsumptionComb1(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Fuel Type</label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
          >
            <option value="D">Diesel</option>
            <option value="E">Ethanol</option>
            <option value="N">Natural Gas</option>
            <option value="X">Electric</option>
            <option value="Z">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded font-bold"
        >
          Predict CO2 Emissions
        </button>
      </form>

      {prediction !== null && (
        <div className="flex justify-between bg-white w-1/2 text-center px-12 py-3 rounded-lg gap-2 shadow">
          <h2 className="text-lg font-semibold">Predicted CO2 Emissions: </h2>
          <p className="text-lg font-semibold text-green-500">{prediction} g/km</p>
        </div>
      )}
    </div>
  );
};

export default App;
