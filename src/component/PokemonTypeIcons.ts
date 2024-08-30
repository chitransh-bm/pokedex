// Import your icons as done in your current setup
import BugIcon from "../../public/assets/images/pokemon-types/bug-icon.svg";
import DarkIcon from "../../public/assets/images/pokemon-types/dark-icon.svg";
import DragonIcon from "../../public/assets/images/pokemon-types/dragon-icon.svg";
import ElectricIcon from "../../public/assets/images/pokemon-types/electric-icon.svg";
import FairyIcon from "../../public/assets/images/pokemon-types/fairy-icon.svg";
import FightingIcon from "../../public/assets/images/pokemon-types/fighting-icon.svg";
import FireIcon from "../../public/assets/images/pokemon-types/fire-icon.svg";
import FlyingIcon from "../../public/assets/images/pokemon-types/flying-icon.svg";
import GhostIcon from "../../public/assets/images/pokemon-types/ghost-icon.svg";
import GrassIcon from "../../public/assets/images/pokemon-types/grass-icon.svg";
import GroundIcon from "../../public/assets/images/pokemon-types/ground-icon.svg";
import IceIcon from "../../public/assets/images/pokemon-types/ice-icon.svg";
import NormalIcon from "../../public/assets/images/pokemon-types/normal-icon.svg";
import PoisonIcon from "../../public/assets/images/pokemon-types/poison-icon.svg";
import PsychicIcon from "../../public/assets/images/pokemon-types/psychic-icon.svg";
import RockIcon from "../../public/assets/images/pokemon-types/rock-icon.svg";
import SteelIcon from "../../public/assets/images/pokemon-types/steel-icon.svg";
import WaterIcon from "../../public/assets/images/pokemon-types/water-icon.svg";

// Define the valid Pokémon types as a union of string literals
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
// Define the icons object with the correct type
const PokemonTypeIcons: Record<PokemonType, string> = {
  bug: BugIcon,
  dark: DarkIcon,
  dragon: DragonIcon,
  electric: ElectricIcon,
  fairy: FairyIcon,
  fighting: FightingIcon,
  fire: FireIcon,
  flying: FlyingIcon,
  ghost: GhostIcon,
  grass: GrassIcon,
  ground: GroundIcon,
  ice: IceIcon,
  normal: NormalIcon,
  poison: PoisonIcon,
  psychic: PsychicIcon,
  rock: RockIcon,
  steel: SteelIcon,
  water: WaterIcon,
};

export default PokemonTypeIcons;
