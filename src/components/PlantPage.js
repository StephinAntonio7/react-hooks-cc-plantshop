import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  function createPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }
    const filteredPlants = plants.filter(plant =>
      plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm createPlant={createPlant} plants={plants} setPlants={setPlants} />
      <Search plants={plants} setPlants={setPlants} search={search} setSearch={setSearch}/>
      <PlantList plants={filteredPlants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;
