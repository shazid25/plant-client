import React, { useEffect, useState } from 'react';

const Details = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('/plant.json')
      .then(res => res.json())
      .then(data => {
        setPlants(data);
      })
      .catch(err => {
        console.error('Error loading plant data:', err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        🌱 Plant Details
      </h2>

      {plants.length === 0 ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-52 object-cover rounded-lg mb-4"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/placeholder.png';
                }}
              />
              <h3 className="text-2xl font-semibold text-green-800 mb-2">{plant.name}</h3>
              <p className="text-gray-700"><strong>Type:</strong> {plant.type}</p>
              <p className="text-gray-700"><strong>Location:</strong> {plant.location}</p>
              <p className="text-gray-700"><strong>Watering:</strong> {plant.wateringFrequency}</p>
              <p className="text-gray-700"><strong>Sunlight:</strong> {plant.sunlight}</p>
              <p className="text-gray-700"><strong>Health Status:</strong> {plant.healthStatus}</p>
              <p className="text-gray-700"><strong>Last Watered:</strong> {plant.lastWatered}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Details;
