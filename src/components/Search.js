import React, { useState, useEffect } from "react";

function Search({ plants, setPlants, filteredPlants, setFilteredPlants, setSearch }) {

  // const [search, setSearch ] = useState('')
  
  // useEffect(() => {
    
  // })

  // const handleSearch = (e) => {
  //   const searchTerm = e.target.value
  //   setSearch(searchTerm)

  //   const filteredItems = plants.filter((plant) => 
  //     plant.name.toLowerCase().includes(search.toLowerCase())
  //   );

  //   console.log(search)
  //   setFilteredPlants(filteredItems)
  // }

  function handleSearch(e) {
    setSearch(e.target.value)
  }


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
