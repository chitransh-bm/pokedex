/* eslint-disable @next/next/no-img-element */
import DragonImage from "../../public/assets/images/pokemon-types/dragon.svg";

const NoPokemonFound = () => {
  return (
    <div>
      <img src={DragonImage} alt="Dragon image" />
      <h1>Sorry, No Pokemons found, please try again later.</h1>
    </div>
  );
};

export default NoPokemonFound;
