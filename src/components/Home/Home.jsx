import React from 'react'
import Banner from '../../components/Banner/Banner'
import Plants from '../Plants/Plants'
import AddPlant from '../../pages/AddPlant/AddPlant'
import PlantStats from '../../pages/PlantStarts/PlantStarts'
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Plants></Plants>
      <AddPlant></AddPlant>
      <PlantStats></PlantStats>
    </div>
  )
}

export default Home
