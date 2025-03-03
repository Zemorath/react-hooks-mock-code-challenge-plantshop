import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState([])
  

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
      .then((r) => r.json())
      .then((plants) => setPlants(plants))
  }, []);

  return (
    <div className="app">
      <Header plants={plants} setPlants={setPlants}/>
      <PlantPage plants={plants} setPlants={setPlants}/>
    </div>
  );
}

export default App;
