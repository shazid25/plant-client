// import React, { useEffect, useState } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Plants = () => {
//   const [plants, setPlants] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(6);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true
//     });

//     fetch('/plant.json')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Failed to load plant data (${response.status})`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         if (!Array.isArray(data)) {
//           throw new Error('Plant data is not in the correct format');
//         }
//         setPlants(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error('Error loading plant data:', err);
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     AOS.refresh();
//   }, [visibleCount]);

//   const handleSeeMore = () => {
//     setVisibleCount(prev => prev + 12);
//   };

//   const getPlantImage = (plant) => {
//     if (plant.id <= 6) {
//       return plant.image;
//     }
//     return `https://source.unsplash.com/featured/300x300/?${encodeURIComponent(plant.name)}`;
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-green-50">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto mb-4"></div>
//           <p className="text-green-700 text-lg font-medium">Loading plants...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
//         <div className="bg-white p-8 rounded-xl shadow-md max-w-md text-center">
//           <div className="text-red-500 text-5xl mb-4">⚠️</div>
//           <h2 className="text-xl font-bold text-gray-800 mb-2">Error Loading Data</h2>
//           <p className="text-gray-600 mb-6">{error}</p>
//           <p className="text-sm text-gray-500">
//             Please check that the plant.json file exists in the public folder
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section className="py-16 bg-green-50 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 
//           className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12"
//           data-aos="fade-down"
//         >
//           🌿 Our Plant Collection
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {plants.slice(0, visibleCount).map((plant, index) => (
//             <div
//               key={plant.id}
//               data-aos="fade-up"
//               data-aos-delay={(index % 3) * 100}
//               className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={getPlantImage(plant)}
//                   alt={plant.name}
//                   className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
//                   onError={(e) => {
//                     e.target.src = `https://source.unsplash.com/featured/300x300/?plant,${encodeURIComponent(plant.type)}`;
//                   }}
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-green-800 mb-2">{plant.name}</h3>
//                 <div className="grid grid-cols-2 gap-3 text-sm mb-4">
//                   <div>
//                     <p className="text-gray-600">Type</p>
//                     <p className="font-medium">{plant.type}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-600">Location</p>
//                     <p className="font-medium">{plant.location}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-600">Watering</p>
//                     <p className="font-medium">{plant.wateringFrequency}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-600">Sunlight</p>
//                     <p className="font-medium">{plant.sunlight}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-600">Status</p>
//                     <p className={`font-medium ${
//                       plant.healthStatus === 'Healthy' 
//                         ? 'text-green-600' 
//                         : plant.healthStatus === 'Blooming' || plant.healthStatus === 'Fruiting'
//                           ? 'text-purple-600'
//                           : 'text-yellow-600'
//                     }`}>
//                       {plant.healthStatus}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-gray-600">Last Watered</p>
//                     <p className="font-medium">{plant.lastWatered}</p>
//                   </div>
//                 </div>

//                 {/* View Details Button */}
//                 <button
//                   className="mt-2 w-full text-center bg-green-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition-all duration-300"
//                 >
//                   View Details
//                 </button>

//               </div>
//             </div>
//           ))}
//         </div>

//         {visibleCount < plants.length && (
//           <div className="text-center mt-16" data-aos="fade-up">
//             <button
//               onClick={handleSeeMore}
//               className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-md"
//             >
//               View More Plants
//             </button>
//             <p className="text-gray-600 mt-4 text-sm">
//               Showing {Math.min(visibleCount, plants.length)} of {plants.length} plants
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Plants;



import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'; // ✅ Added Link import

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });

    fetch('/plant.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load plant data (${response.status})`);
        }
        return response.json();
      })
      .then(data => {
        if (!Array.isArray(data)) {
          throw new Error('Plant data is not in the correct format');
        }
        setPlants(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading plant data:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [visibleCount]);

  const handleSeeMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  const getPlantImage = (plant) => {
    if (plant.id <= 6) {
      return plant.image;
    }
    return `https://source.unsplash.com/featured/300x300/?${encodeURIComponent(plant.name)}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-green-700 text-lg font-medium">Loading plants...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
        <div className="bg-white p-8 rounded-xl shadow-md max-w-md text-center">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Error Loading Data</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <p className="text-sm text-gray-500">
            Please check that the plant.json file exists in the public folder
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12"
          data-aos="fade-down"
        >
          🌿 Our Plant Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.slice(0, visibleCount).map((plant, index) => (
            <div
              key={plant.id}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <img
                  src={getPlantImage(plant)}
                  alt={plant.name}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://source.unsplash.com/featured/300x300/?plant,${encodeURIComponent(plant.type)}`;
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2">{plant.name}</h3>
                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                  <div>
                    <p className="text-gray-600">Type</p>
                    <p className="font-medium">{plant.type}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="font-medium">{plant.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Watering</p>
                    <p className="font-medium">{plant.wateringFrequency}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Sunlight</p>
                    <p className="font-medium">{plant.sunlight}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Status</p>
                    <p className={`font-medium ${
                      plant.healthStatus === 'Healthy' 
                        ? 'text-green-600' 
                        : plant.healthStatus === 'Blooming' || plant.healthStatus === 'Fruiting'
                          ? 'text-purple-600'
                          : 'text-yellow-600'
                    }`}>
                      {plant.healthStatus}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Last Watered</p>
                    <p className="font-medium">{plant.lastWatered}</p>
                  </div>
                </div>

                {/* ✅ View Details Link */}
                <Link
                  to="/details"
                  className="mt-2 block w-full text-center bg-green-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition-all duration-300"
                >
                  View Details
                </Link>

              </div>
            </div>
          ))}
        </div>

        {visibleCount < plants.length && (
          <div className="text-center mt-16" data-aos="fade-up">
            <button
              onClick={handleSeeMore}
              className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              View More Plants
            </button>
            <p className="text-gray-600 mt-4 text-sm">
              Showing {Math.min(visibleCount, plants.length)} of {plants.length} plants
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Plants;
