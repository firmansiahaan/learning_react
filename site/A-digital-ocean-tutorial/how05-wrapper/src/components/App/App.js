import React from "react";
import animals from "./data"
import AnimalCard from './AnimalCard/AnimalCard';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      {animals.map((animal, i) =>
        <AnimalCard 
          diet={animal.diet}
          key={i}
          name={animal.name}
          size={animal.size}
          scientificName={animal.scientificName}
        />
      )}
    </div>
  );
}

export default App;
