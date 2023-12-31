"use client";

import { useGetSpecificCharacterQuery } from "../Redux/characterDetail";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import { StarWarsButton } from "./button";
import { useDispatch, useSelector } from "react-redux";
import { addBounty } from "../Redux/bountySlice";

export default function SpecificCharacterDetails() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const id = searchParams.get("id");
  //console.log(id);

  const {
    data: character,
    error,
    isLoading,
  } = useGetSpecificCharacterQuery(id);
  const showPrevCharacterButton = parseInt(id) > 1;
  const dontShowNextCharacterButton = parseInt(id) < 21;
  const isCharacterInBountyList = useSelector((state) =>
    state.bounty.characters.some((bounty) => bounty.id === id),
  );

  if (isLoading) {
    return (
      <div className="mx-auto text-center pt-[30vh] h-[50vh]">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto text-center pt-[30vh] h-[50vh]">
        <div>Error: Missing character...</div>
        <div className="text-[#ffc107] mt-6 mx-auto text-center flex justify-center">
          {showPrevCharacterButton && (
            <Link
              href={`/characterDetails?id=${parseInt(id) - 1}`}
              className="mx-2 flex items-center transition ease-in-out hover:transition hover:ease-in hover:opacity-60"
            >
              <BsArrowLeftShort /> <div>Prev Character</div>
            </Link>
          )}
          {dontShowNextCharacterButton && (
            <Link
              href={`/characterDetails?id=${parseInt(id) + 1}`}
              className="mx-2 flex items-center transition ease-in-out hover:transition hover:ease-in hover:opacity-60"
            >
              <div>Next Character </div>
              <BsArrowRightShort />
            </Link>
          )}
        </div>
        <StarWarsButton className="mt-5">
          <div className="mx-auto text-center">Return to Characters</div>
        </StarWarsButton>
      </div>
    );
  }

  const speciesMapping = {
    "https://swapi.py4e.com/api/species/1/": "Human",
    "https://swapi.py4e.com/api/species/2/": "Droid",
    "https://swapi.py4e.com/api/species/3/": "Wookie",
    "https://swapi.py4e.com/api/species/4/": "Rodian",
    "https://swapi.py4e.com/api/species/5/": "Hutt",
    "https://swapi.py4e.com/api/species/6/": "Yoda's Specie",
  };

  const characterImageMapping = {
    "Luke Skywalker": "/imgs/luke_2.webp",
    "Darth Vader": "/imgs/darth.webp",
    "C-3PO": "/imgs/c3p0_1.webp",
    "R2-D2": "/imgs/r2d2_1.webp",
    "Leia Organa": "/imgs/leia.webp",
    "Owen Lars": "/imgs/owen.webp",
    "Beru Whitesun lars": "/imgs/beru.webp",
    "R5-D4": "/imgs/r5.webp",
    "Biggs Darklighter": "/imgs/biggs.webp",
    "Obi-Wan Kenobi": "/imgs/obi.webp",
    "Anakin Skywalker": "/imgs/anakin.webp",
    "Wilhuff Tarkin": "/imgs/tarkin.webp",
    Chewbacca: "/imgs/chewbacca.webp",
    "Han Solo": "/imgs/hansolo.webp",
    Greedo: "/imgs/greedo.webp",
    "Jabba Desilijic Tiure": "/imgs/jabba.webp",
    "Wedge Antilles": "/imgs/wedge.webp",
    "Jek Tono Porkins": "/imgs/porkins.webp",
    Yoda: "/imgs/yoda.webp",
    Palpatine: "/imgs/palpatine.webp",
  };

  const planetMapping = {
    "https://swapi.py4e.com/api/planets/1/": "Tatooine",
    "https://swapi.py4e.com/api/planets/2/": "Alderaan",
    "https://swapi.py4e.com/api/planets/8/": "Naboo",
    "https://swapi.py4e.com/api/planets/20/": "Stewjon",
    "https://swapi.py4e.com/api/planets/14/": "Kashyyyk",
    "https://swapi.py4e.com/api/planets/21/": "Eriadu",
    "https://swapi.py4e.com/api/planets/22/": "Corellia",
    "https://swapi.py4e.com/api/planets/23/": "Rodia",
    "https://swapi.py4e.com/api/planets/24/": "Nal Hutta",
    "https://swapi.py4e.com/api/planets/26/": "Bestine IV",
    "https://swapi.py4e.com/api/planets/28/": "Unknown",
  };

  if (typeof document !== "undefined") {
    document.title = character.name;
  }

  return (
    <div className="text-4xl mx-auto text-center py-[20vh]">
      <div className="bg-[#1d1d1d] pr-4 w-[30%] mx-auto flex ">
        <Image
          src={characterImageMapping[character.name]}
          width={200}
          height={200}
          alt={character.name}
          className="bg-[#464646] left-0 px-2"
        />
        <div className="flex-col text-left ml-14  my-auto">
          <div className="text-2xl font-semibold mb-4">{character.name}</div>
          <div className="text-lg font-light">
            Specie: {speciesMapping[character.species]}
          </div>
          <div className="text-lg font-light">Gender: {character.gender}</div>
          <div className="text-lg font-light">
            Height: {character.height} cm
          </div>
          <div className="text-lg font-light">Mass: {character.mass} kg</div>
          <div className="text-lg font-light">
            Homeworld: {planetMapping[character.homeworld]}
          </div>
          <div className="text-lg font-light">
            Birth Year: {character.birth_year}
          </div>
        </div>
      </div>
      {isCharacterInBountyList ? (
        <div className="text-lg bg-[#161616ee] border border-white text-white w-[30%] mx-auto py-3">
          In Bounty List
        </div>
      ) : (
        <div
          onClick={() => dispatch(addBounty({ name: character.name, id: id }))}
          className="cursor-pointer text-lg bg-transparent border border-white text-white w-[30%] mx-auto py-3 hover:transition hover:bg-white hover:text-black transition ease-in-out hover:ease-in"
        >
          Add Bounty
        </div>
      )}
      <div className="text-[16px] mt-8 text-[#ffc107] flex mx-auto justify-center">
        {showPrevCharacterButton && (
          <Link
            href={`/characterDetails?id=${parseInt(id) - 1}`}
            className="mx-2 flex items-center transition ease-in-out hover:transition hover:ease-in hover:opacity-60"
          >
            <BsArrowLeftShort /> <div>Prev Character</div>
          </Link>
        )}
        {dontShowNextCharacterButton && (
          <Link
            href={`/characterDetails?id=${parseInt(id) + 1}`}
            className="mx-2 flex items-center transition ease-in-out hover:transition hover:ease-in hover:opacity-60"
          >
            <div>Next Character </div>
            <BsArrowRightShort />
          </Link>
        )}
      </div>
      <Link href={"/characters"}>
        <StarWarsButton className="mt-10">
          <div className="tmx-auto text-center">Return to Characters</div>
        </StarWarsButton>
      </Link>
    </div>
  );
}
