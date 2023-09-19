import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, filteredPlants, setFilteredPlants, search }) {

  // console.log(filteredPlants)

  const filteredItems = plants.filter((plant) => {
    if (search == '') {
      return true
    } else {
      return plant.name.toLowerCase().includes(search.toLowerCase())
    }
  });

  return (
    <ul className="cards">
      {filteredItems.map((plant) => (
        <PlantCard plant={plant} key={plant.id} />
      ))}
    </ul>
  );
}

export default PlantList;
