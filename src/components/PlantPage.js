import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants, filteredPlants, setFilteredPlants }) {

  const [search, setSearch ] = useState('')
  
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search plants={plants} setPlants={setPlants} filteredPlants={filteredPlants} setFilteredPlants={setFilteredPlants} setSearch={setSearch}/>
      <PlantList plants={plants} setPlants={setPlants} filteredPlants={filteredPlants} setFilteredPlants={setFilteredPlants} search={search}/>
    </main>
  );
}

export default PlantPage;
