"use client";

import { useGetAllCharactersQuery } from "../Redux/charactersSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { StarWarsButton } from "./button";
import { parse } from "url";
import { addBounty } from "../Redux/bountySlice";

export default function CharactersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const { data: characters, error, isLoading } = useGetAllCharactersQuery(page);


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

  const speciesMapping = {
    "https://swapi.py4e.com/api/species/1/": "Human",
    "https://swapi.py4e.com/api/species/2/": "Droid",
    "https://swapi.py4e.com/api/species/3/": "Wookie",
    "https://swapi.py4e.com/api/species/4/": "Rodian",
    "https://swapi.py4e.com/api/species/5/": "Hutt",
    "https://swapi.py4e.com/api/species/6/": "Yoda's Specie",
    "": "Unknown"
    

  };

  const filteredCharacters = characters.results.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedGender === "" ||
        item.gender.toLowerCase() === selectedGender.toLowerCase()) &&
      (selectedSpecies === "" ||
        speciesMapping[item.species] === selectedSpecies),
  );

  const characterImageMapping = {
    "Luke Skywalker": "/imgs/luke_2.png",
    "Darth Vader": "/imgs/darth.png",
    "C-3PO": "/imgs/c3p0_1.png",
    "R2-D2": "/imgs/r2d2_1.png",
    "Leia Organa": "/imgs/leia.png",
    "Owen Lars": "/imgs/owen.png",
    "Beru Whitesun lars": "/imgs/beru.png",
    "R5-D4": "/imgs/r5.png",
    "Biggs Darklighter": "/imgs/biggs.png",
    "Obi-Wan Kenobi": "/imgs/obi.png",
    "Anakin Skywalker": "/imgs/anakin.png",
    "Wilhuff Tarkin": "/imgs/tarkin.png",
    "Chewbacca":"/imgs/chewbacca.png",
    "Han Solo": "/imgs/hansolo.png",
    "Greedo": "/imgs/greedo.png",
    "Jabba Desilijic Tiure": "/imgs/jabba.png",
    "Wedge Antilles": "/imgs/wedge.png",
    "Jek Tono Porkins": "/imgs/porkins.png",
    "Yoda": "/imgs/yoda.png",
    "Palpatine":"/imgs/palpatine.png"
    
  };


  const handleBounty = (item, number) => {
    dispatch(addBounty(item))
    console.log(item)
  };


  return (
    <>
      <div className="w-3/4 mx-auto text-center mt-[10vh]">
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
              <option value="" defaultValue={""}>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="n/a">N/A</option>
            </select>

            <select
              className="mx-3 py-2 px-4 bg-[#1a1a1a] text-white"
              onChange={(e) => setSelectedSpecies(e.target.value)}
              value={selectedSpecies}
            >
              <option value="" defaultValue={""}>Species</option>
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
            // Using the url module to parse the URL
            const parsedUrl = parse(item.url, true);

            // Extracting the number from the pathname
            const pathArray = parsedUrl.pathname.split("/");
            const number = pathArray[pathArray.length - 2];

            return (
              <div
                key={number}
                className="hover:transition hover:ease-in transition ease-in-out"
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
                    <div className="mb-3">
                      Specie: {speciesMapping[item.species]}
                    </div>
                    <div className="mb-3">Gender: {item.gender}</div>
                  </div>

                  <div className="grid grid-cols-2">
                    <Link href={`/characterDetails/?id=${number}`}>
                      <div className="w-50 bg-transparent cursor-pointer border-[#ffc107] text-center py-2 text-[#ffc107] hover:bg-[#ffc107] hover:text-black border hover:transition hover:ease-in-out transition ease-in">
                        About
                      </div>
                    </Link>
                    <div id="addBounty">
                      {/* criar slicer para bounty, pegar no index/id e fazer consumo da data na navbar, tendo que envolver noutro provider e apiprovider (eventualmente guardar localmente) */}
                      <div className="w-50 bg-transparent border-white text-center py-2 text-white hover:border hover:bg-white hover:text-black border hover:transition hover:ease-in-out transition ease-in cursor-pointer" 
                      onClick={()=>handleBounty(item.name, number)}>
                        Add Bounty
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center mx-auto">
            No matching characters found.
          </div>
        )}
      </div>

      <div className="text-center mx-auto mt-16 ">
        <StarWarsButton onClick={() => setPage(1)}>1</StarWarsButton>
        <StarWarsButton onClick={() => setPage(2)}>2</StarWarsButton>
      </div>
    </>
  );
}
