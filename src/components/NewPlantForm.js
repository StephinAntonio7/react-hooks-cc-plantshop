import React from "react";
import { useState } from 'react'

function NewPlantForm({setPlants}) {

  const [formData, setFormData] = useState( {
    name: '',
    image: '',
    price: ''
  } )

  function handleSubmit(event) {
    event.preventDefault()

    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify( formData )
    })
    .then(res => res.json())
    .then(newPlantObj => {
      setFormData({name: '', image: '', price: ''})
      setPlants(plants => [...plants, newPlantObj])
    })
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={ (event) => setFormData( {...formData, name: event.target.value} ) } />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={ (event) => setFormData( {...formData, image: event.target.value} ) } />
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={ (event) => setFormData( {...formData, price: event.target.value} ) } />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
