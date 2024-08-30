"use client";
import React from "react";

import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { trpc } from "@/utils/trpc";
import Container from "@/component/Container";
// import Searchbar from "@/component/Searchbar";
import LoadingPokemons from "@/component/LoadingPokemons";
import PokemonCard from "@/component/PokemonCard";
import Searchbar from "@/component/Searchbar";
import NoPokemonFound from "@/component/NoPokemonFound";
type PokemonType =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";
type Pokemon = {
  id: number;
  name: string;
  number: number;
  types: PokemonType[];
};
const isValidPokemonType = (type: string): type is PokemonType => {
  return [
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water",
  ].includes(type);
};
function Pokedex({ ...props }) {
  const { data: pokemons, isLoading, error } = trpc.getPokemons.useQuery();
  const validPokemons = pokemons?.map((pokemon) => ({
    ...pokemon,
    types: (pokemon.types ?? []).filter(isValidPokemonType), // Ensures types are only valid PokemonType
  })) as unknown as Pokemon[];
  console.log(validPokemons);
  return (
    <div>
      <Header />

      <Container>
        <Searchbar  />
        {isLoading ? (
          <LoadingPokemons count={25} />
        ) : validPokemons.length === 0 ? (
          <NoPokemonFound />
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {validPokemons?.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                number={pokemon.number}
                types={pokemon.types}
              />
            ))}
          </div>
        )}
      </Container>

      <Footer />
    </div>
  );
}

export default Pokedex;
