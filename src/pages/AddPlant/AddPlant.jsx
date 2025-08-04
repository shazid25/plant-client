import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AddPlant = () => {
  const [plantName, setPlantName] = useState('');
  const [plantType, setPlantType] = useState('');
  const [location, setLocation] = useState('');
  const [watering, setWatering] = useState('');
  const [sunlight, setSunlight] = useState('');
  const [fertilizer, setFertilizer] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [careNotes, setCareNotes] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPlant = Object.fromEntries(formData.entries());

    console.log(newPlant); // ✅ LOG the object, not formData()

    // send data to db

    fetch('http://localhost:3000/plants',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(data=>{
      console.log('after adding plant',data)
    })

    if (
      plantName &&
      plantType &&
      location &&
      watering &&
      sunlight &&
      fertilizer &&
      photoUrl &&
      careNotes
    ) {
      alert(`Plant "${plantName}" added successfully!`);

      // Reset fields
      setPlantName('');
      setPlantType('');
      setLocation('');
      setWatering('');
      setSunlight('');
      setFertilizer('');
      setPhotoUrl('');
      setCareNotes('');
    } else {
      alert('Please fill out all fields before submitting the form.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl" data-aos="fade-up">
        <h3 className="text-3xl font-bold text-primaryDark mb-8 text-center">
          <i className="fas fa-plus-circle text-green-600 mr-2"></i> Add New Plant
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Plant Name</label>
              <input
                name="plantName"
                type="text"
                placeholder="e.g., Monstera Deliciosa"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-100"
                value={plantName}
                onChange={(e) => setPlantName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Plant Type</label>
              <select
                name="plantType"
                value={plantType}
                onChange={(e) => setPlantType(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-100"
              >
                <option value="">Select plant type</option>
                {["Tropical", "Succulent", "Fern", "Bonsai", "Flowering"].map((type, i) => (
                  <option key={i} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Location</label>
              <select
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-100"
              >
                <option value="">Select location</option>
                {["Indoor", "Outdoor"].map((loc, i) => (
                  <option key={i} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Watering Frequency</label>
              <select
                name="watering"
                value={watering}
                onChange={(e) => setWatering(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-100"
              >
                <option value="">Select frequency</option>
                {["Daily", "Weekly", "Bi-weekly", "Monthly"].map((freq, i) => (
                  <option key={i} value={freq}>{freq}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Sunlight Requirements</label>
              <select
                name="sunlight"
                value={sunlight}
                onChange={(e) => setSunlight(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-100"
              >
                <option value="">Select sunlight</option>
                {["Low Light", "Medium Light", "Bright Indirect Light", "Direct Sunlight"].map((sun, i) => (
                  <option key={i} value={sun}>{sun}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Fertilizing Schedule</label>
              <select
                name="fertilizer"
                value={fertilizer}
                onChange={(e) => setFertilizer(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-100"
              >
                <option value="">Select schedule</option>
                {["Monthly", "Every 2 months", "Quarterly", "Twice a year"].map((f, i) => (
                  <option key={i} value={f}>{f}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Photo URL</label>
            <input
              name="photoUrl"
              type="url"
              placeholder="e.g., https://example.com/plant.jpg"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-100"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Care Notes</label>
            <textarea
              name="careNotes"
              rows="3"
              placeholder="Any special care instructions..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-100"
              value={careNotes}
              onChange={(e) => setCareNotes(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all flex items-center gap-2"
          >
            <i className="fas fa-save"></i> Save Plant
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPlant;
