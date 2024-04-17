import React from "react";
import PlantCard from "./PlantCard";
import { useEffect } from "react";

function PlantList({plants, setPlants}) {

  // const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res =>res.json())
    .then(plantsArray => setPlants(plantsArray))
  }, [])

  const mappedPlants= plants.map(plant => <PlantCard key={plant.id} plants={plants} setPlants={setPlants} image={plant.image} name={plant.name} price={plant.price}/> )

  return (
    <ul className="cards">{mappedPlants}</ul>
  );
}

export default PlantList;
