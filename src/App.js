import React from "react";

import PokeCard from "./components/PokeCard";
import { mockPokemonData } from "./mock/pokeData";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Click on the Pokemon for magic to happen!</h1>
      <PokeCard {...mockPokemonData} />
    </div>
  );
}
