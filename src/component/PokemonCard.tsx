"use client";

import Image from "next/image";
import PokemonTypeIcons from "./PokemonTypeIcons";
import { capitalizeFirstLetter, getImageById } from "@/utils/utils";

const PokemonCard = ({
  id,
  name,
  number,
  types,
}: {
  id: number;
  name: string;
  number: number;
  types: string[];
}) => {
  const firstType = types[0];
  console.log(PokemonTypeIcons)
  return (
    <div className={`flex rounded-xl bg-100-${firstType}`}>
      <div className="flex-1 flex flex-col justify-center pl-4">
        <span className="text-sm font-medium"># {number}</span>
        <h2 className="text-2xl font-pokedex">{capitalizeFirstLetter(name)}</h2>
        <div className="flex flex-row gap-1">
          {types.map((type, index) => (
            <div
              key={index}
              className={`inline-flex items-center gap-1 px-2 py-1 text-xm text-white rounded-full mt-2 font-medium bg-${type}`}
            >
              <span className="inline-flex align-center content-center rounded-full w-3 h-3">
                <Image
                  src={PokemonTypeIcons[type as keyof typeof PokemonTypeIcons]}
                  alt={`${type} Icon`}
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </span>
              {type}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 relative h-32">
        <Image
          src={getImageById(id.toString())}
          alt="PokemonImage"
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default PokemonCard;
