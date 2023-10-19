import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {

  const [search, setSearch ] = useState('')
  
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search setSearch={setSearch}/>
      <PlantList plants={plants} search={search}/>
    </main>
  );
}

export default PlantPage;
