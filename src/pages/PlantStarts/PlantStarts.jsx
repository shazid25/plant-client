import React, { useState, useEffect, useRef } from 'react';

// Placeholder logos (replace with local ones if you have them)
const plantLogo = 'https://cdn-icons-png.flaticon.com/512/2909/2909769.png';
const waterLogo = 'https://cdn-icons-png.flaticon.com/512/728/728093.png';
const sunlightLogo = 'https://cdn-icons-png.flaticon.com/512/869/869869.png';
const usersLogo = 'https://cdn-icons-png.flaticon.com/512/1077/1077063.png';

const CounterItem = ({ end, label, logo }) => {
  const [count, setCount] = useState(0);
  const duration = 2000;
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);
  const increment = end / totalFrames;
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let frame = 0;
          const counter = () => {
            frame++;
            const currentCount = Math.min(end, Math.floor(increment * frame));
            setCount(currentCount);
            if (frame < totalFrames) {
              requestAnimationFrame(counter);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(counter);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, increment, totalFrames]);

  return (
    <div
      ref={counterRef}
      className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md"
    >
      <div className="bg-green-100 rounded-full p-4 mb-4 flex items-center justify-center">
        <img src={logo} alt={label} className="w-10 h-10 object-contain" />
      </div>
      <div className="text-4xl font-bold text-green-600 mb-2">
        {count}+
      </div>
      <div className="text-gray-600 text-center">{label}</div>
    </div>
  );
};

const PlantStats = () => {
  const stats = [
    { value: 75, label: 'Plants Tracked', logo: plantLogo },
    { value: 150, label: 'Watering Reminders', logo: waterLogo },
    { value: 45, label: 'Sunlight Adjustments', logo: sunlightLogo },
    { value: 120, label: 'Registered Users', logo: usersLogo },
  ];

  return (
    <div className="bg-green-50 rounded-2xl mt-6 mb-6">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Helping You Care for Your Plants
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Track, manage, and nurture your green friends with smart reminders and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <CounterItem
              key={index}
              end={stat.value}
              label={stat.label}
              logo={stat.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantStats;
