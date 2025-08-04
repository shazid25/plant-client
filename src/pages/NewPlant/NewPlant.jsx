import React from 'react'
import { useLoaderData } from 'react-router'
import MyPlant from '../MyPlant/MyPlant';

const NewPlant = () => {
    const newPlants = useLoaderData();
    console.log(newPlants);
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      {
        Plants.map(plant => <MyPlant key={plant._id}plant={plant}></MyPlant>)
      }
    </div>
    </div>
  )
}

export default NewPlant;


