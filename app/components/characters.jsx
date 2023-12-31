"use client";

import { useGetAllCharactersQuery } from "../Redux/charactersSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { StarWarsButton } from "./button";
import { parse } from "url";
import { addBounty } from "../Redux/bountySlice";

// verificar se o personagem está na store
export function useCharacterInBountyList(number) {
  return useSelector((state) =>
    state.bounty.characters.some((bounty) => bounty.id === number),
  );
}

const speciesMapping = {
  "https://swapi.py4e.com/api/species/1/": "Human",
  "https://swapi.py4e.com/api/species/2/": "Droid",
  "https://swapi.py4e.com/api/species/3/": "Wookie",
  "https://swapi.py4e.com/api/species/4/": "Rodian",
  "https://swapi.py4e.com/api/species/5/": "Hutt",
  "https://swapi.py4e.com/api/species/6/": "Yoda's Specie",
  "": "Unknown",
};

export default function CharactersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  if (typeof document !== "undefined") {
    document.title = "Characters";
  }

  const { data: characters, error, isLoading } = useGetAllCharactersQuery(page);

  //para ter acesso ao id do personagem para verificar se estava na bounty list tive de fazer uma abordagem de fazer uma função acima para dar acesso aos dados, e outro return mais abaixo para prosseguir com o código e página

  const CharacterButton = ({ item, number }) => {
    const isInBountyList = useCharacterInBountyList(number);

    const handleBounty = (item, number) => {
      dispatch(addBounty({ name: item, id: number }));
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

    return (
      <div
        key={number}
        className="hover:transition hover:ease-in transition ease-in-out "
      >
        <Image
          src={characterImageMapping[item.name]}
          alt={item.name}
          width={120}
          height={120}
          className="mx-auto text-center -z-10 mt-[-2rem]"
        />
        <div className="bg-[#1a1a1a]">
          <div className="border-t mb-5"></div>

          <div className="ml-5  pb-2">
            <div className="mb-3 font-bold">{item.name}</div>
            <div className="mb-3">Specie: {speciesMapping[item.species]}</div>
            <div className="mb-3">Gender: {item.gender}</div>
          </div>

          <div className="grid grid-cols-2">
            <Link href={`/characterDetails/?id=${number}`}>
              <div className="w-50 bg-transparent cursor-pointer border-[#ffc107] text-center py-2 text-[#ffc107] hover:bg-[#ffc107] hover:text-black border hover:transition hover:ease-in-out transition ease-in">
                About
              </div>
            </Link>

            <div>
              {isInBountyList ? (
                <div className="w-50 bg-transparent border-white text-center py-2 text-white hover:border hover:bg-white hover:text-black border hover:transition hover:ease-in-out transition ease-in cursor-pointer">
                  In the List
                </div>
              ) : (
                <div
                  className="w-50 bg-transparent border-white text-center py-2 text-white hover:border hover:bg-white hover:text-black border hover:transition hover:ease-in-out transition ease-in cursor-pointer"
                  onClick={() => handleBounty(item.name, number)}
                >
                  Add Bounty
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="mx-auto text-center pt-[20vh] h-screen">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto text-center pt-[20vh] h-screen">
        Error: {error.message}
      </div>
    );
  }

  const filteredCharacters = characters.results.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedGender === "" ||
        item.gender.toLowerCase() === selectedGender.toLowerCase()) &&
      (selectedSpecies === "" ||
        speciesMapping[item.species] === selectedSpecies),
  );

  return (
    <>
      <div className="w-3/4 mx-auto text-center mt-[5vh]">
        <h1 className="mx-auto text-center text-3xl font-bold mb-12">
          Star Wars Characters
        </h1>

        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-2 pl-4 pr-10 focus:border-[#ffc107] focuse:border-2 rounded-none bg-[#1a1a1a] text-white"
          />

          <div className="text-black">
            <select
              className="mx-3 py-2 px-4 bg-[#1a1a1a] text-white"
              onChange={(e) => setSelectedGender(e.target.value)}
              value={selectedGender}
            >
              <option value="" defaultValue={""}>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="hermaphrodite">Hermaphrodite</option>
              <option value="n/a">N/A</option>
            </select>

            <select
              className="mx-3 py-2 px-4 bg-[#1a1a1a] text-white"
              onChange={(e) => setSelectedSpecies(e.target.value)}
              value={selectedSpecies}
            >
              <option value="" defaultValue={""}>
                Species
              </option>
              <option value="Human">Human</option>
              <option value="Droid">Droid</option>
              <option value="Wookie">Wookie</option>
              <option value="Rodian">Rodian</option>
              <option value="Yoda's Specie">Yoda&apos;s Specie</option>
              <option value="Hutt">Hutt</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-[10vh] grid grid-cols-5 gap-14 w-3/4 mx-auto">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((item, index) => {
            // URL parse
            const parsedUrl = parse(item.url, true);

            // Extração do nº do url
            const pathArray = parsedUrl.pathname.split("/");
            const number = pathArray[pathArray.length - 2];

            return <CharacterButton key={number} item={item} number={number} />;
          })
        ) : (
          <div className="text-center mx-auto">
            No matching characters found.
          </div>
        )}
      </div>

      <div className="text-center mx-auto mt-16 mb-48">
        <StarWarsButton onClick={() => setPage(1)}>1</StarWarsButton>
        <StarWarsButton onClick={() => setPage(2)}>2</StarWarsButton>
      </div>
    </>
  );
}
