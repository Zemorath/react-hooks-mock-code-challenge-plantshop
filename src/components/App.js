import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState([])
  const [filteredPlants, setFilteredPlants] = useState([])
  

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
      .then((r) => r.json())
      .then((plants) => {
        setPlants(plants) 
        setFilteredPlants(plants)})
  }, []);

  return (
    <div className="app">
      <Header plants={plants} setPlants={setPlants}/>
      <PlantPage plants={plants} setPlants={setPlants} filteredPlants={filteredPlants} setFilteredPlants={setFilteredPlants}/>
    </div>
  );
}

export default App;
