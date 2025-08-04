



// import React, { useEffect, useState } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const MyPlant = () => {
//   const [plants, setPlants] = useState([]);

//   useEffect(() => {
//     AOS.init({ duration: 1000 });

//     fetch('/plant.json')
//       .then(res => res.json())
//       .then(data => {
//         // Filter plants with id from 1 to 7
//         const filtered = data.filter(plant => plant.id >= 1 && plant.id <= 7);
//         console.log('Filtered plants:', filtered); // Debug log
//         setPlants(filtered);
//       })
//       .catch(err => {
//         console.error('Error fetching plant data:', err);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100 p-6">
//       <h2
//         className="text-3xl font-bold text-center text-green-700 mb-10"
//         data-aos="fade-down"
//       >
//         My Saved Plants 
//       </h2>

//       {plants.length === 0 ? (
//         <p className="text-center text-gray-600">Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {plants.map(plant => (
//             <div
//               key={plant.id}
//               className="bg-white rounded-2xl shadow-lg p-6"
//               data-aos="fade-up"
//             >
//               <img
//                 src={plant.image}
//                 alt={plant.name}
//                 className="w-full h-48 object-cover rounded-xl mb-4"
//                 onError={e => {
//                   e.target.onerror = null;
//                   e.target.src = '/images/placeholder.png';
//                 }}
//               />
//               <h3 className="text-xl font-bold text-green-700 mb-1">{plant.name}</h3>
//               <p className="text-gray-600"><strong>Type:</strong> {plant.type}</p>
//               <p className="text-gray-600"><strong>Location:</strong> {plant.location}</p>
//               <p className="text-gray-600"><strong>Watering:</strong> {plant.wateringFrequency}</p>
//               <p className="text-gray-600"><strong>Sunlight:</strong> {plant.sunlight}</p>
//               <p className="text-gray-600"><strong>Health:</strong> {plant.healthStatus}</p>
//               <p className="text-gray-600 mb-4"><strong>Last Watered:</strong> {plant.lastWatered}</p>

//               {/* View Details Button */}
//               <button
//                 className="w-full text-center bg-green-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition-all duration-300"
//               >
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyPlant;







import React from 'react'

const MyPlant = () => {
  return (
    <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
  )
}

export default MyPlant





