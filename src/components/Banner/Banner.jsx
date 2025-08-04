import React, { useState } from 'react';
import { FaTint, FaFlask, FaCut, FaCheck, FaEdit, FaPlus } from 'react-icons/fa';

const Banner = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Water Monstera Deliciosa", due: "Today", icon: <FaTint /> },
    { id: 2, name: "Fertilize Bird of Paradise", due: "Tomorrow", icon: <FaFlask /> },
    { id: 3, name: "Prune Fiddle Leaf Fig", due: "In 3 days", icon: <FaCut /> }
  ]);

  const handleTaskComplete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <main className="py-15 bg-green-50 ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-green-800">Plant Care Dashboard</h2>
            <p className="text-lg text-gray-600">Welcome back! Your plants are thriving 🌿</p>
          </div>
          <button className="px-5 py-2.5 rounded-full bg-yellow-400 text-white font-medium hover:bg-yellow-500 transition duration-300 flex items-center gap-2">
            <FaPlus /> New Plant
          </button>

{/*           
<Link to="/add/yourPlant">
  <button className="px-5 py-2.5 rounded-full bg-yellow-400 text-white font-medium hover:bg-yellow-500 transition duration-300 flex items-center gap-2">
    <FaPlus /> New Plant
  </button>
</Link> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Plant Overview */}
          <div className="bg-white rounded-2xl shadow p-6 transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold text-green-800 mb-4">Plant Overview</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: 14, label: 'Total Plants' },
                { value: 5, label: 'Needs Care' },
                { value: 3, label: 'Upcoming Tasks' },
                { value: 4, label: 'Blooming Now' }
              ].map((stat, index) => (
                <div key={index} className="bg-green-100 rounded-xl p-4 text-center shadow-sm transition duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-green-700">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* My Plants */}
          <div className="bg-white rounded-2xl shadow p-6 transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold text-green-800 mb-4">My Plants</h3>
            <div className="flex flex-col gap-4">
              {[
                { name: "Monstera Deliciosa", type: "Indoor", status: "Healthy" },
                { name: "Bird of Paradise", type: "Outdoor", status: "Needs Water" },
                { name: "Fiddle Leaf Fig", type: "Indoor", status: "Healthy" }
              ].map((plant, index) => (
                <div key={index} className="flex items-center justify-between bg-green-100 p-4 rounded-xl transition duration-300 hover:scale-105">
                  <div>
                    <div className="font-semibold">{plant.name}</div>
                    <div className="text-sm text-gray-600">{plant.type}</div>
                  </div>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    plant.status === "Healthy"
                      ? "bg-green-200 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {plant.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tasks */}
          <div className="bg-white rounded-2xl shadow p-6 transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold text-green-800 mb-4">Upcoming Tasks</h3>
            <div className="space-y-4">
              {tasks.map(task => (
                <div key={task.id} className="flex items-center justify-between bg-green-100 p-4 rounded-xl transition duration-300 hover:scale-105">
                  <div className="flex items-center gap-3">
                    <div className="text-xl text-green-700">{task.icon}</div>
                    <div>
                      <div className="font-medium">{task.name}</div>
                      <div className="text-sm text-gray-600">Due: {task.due}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleTaskComplete(task.id)} className="w-8 h-8 flex items-center justify-center bg-white border border-green-300 rounded-full hover:bg-green-200 transition duration-300">
                      <FaCheck />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center bg-white border border-green-300 rounded-full hover:bg-green-200 transition duration-300">
                      <FaEdit />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;


