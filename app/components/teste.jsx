"use client"

import { useGetSpecificCharacterQuery } from "../Redux/characterDetail";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";

export default function Teste(){

    const searchParams = useSearchParams()

    const id = searchParams.get('id')
    console.log(id)

    const { data: character, error, isLoading } = useGetSpecificCharacterQuery(id);
    const showPrevCharacterButton = parseInt(id) > 1;



    if (isLoading) {
        return <div className="mx-auto text-center pt-[30vh] h-[50vh]">Loading...</div>;
      }
    
      if (error) {
        return (
                <div className="mx-auto text-center pt-[30vh] h-[50vh]">
                    <div>Error: Missing character...</div>
                    <div className="text-yellow-600 mt-6 mx-auto text-center flex justify-center">
                    {showPrevCharacterButton && (
                    <Link href={`/characterDetails?id=${parseInt(id) - 1}`} className="mx-2 flex items-center transition ease-in-out hover:transition hover:ease-in hover:opacity-60"><BsArrowLeftShort/> <div>Prev Character</div></Link>
                )}
                <Link href={`/characterDetails?id=${parseInt(id)+1}`} className="mx-2 flex items-center transition ease-in-out hover:transition hover:ease-in hover:opacity-60"><div>Next Character </div><BsArrowRightShort/></Link> 
                    </div>
                    
                </div>     
        );
      }
    
      const speciesMapping = {
        "https://swapi.py4e.com/api/species/1/": "Human",
        "https://swapi.py4e.com/api/species/2/": "Droid",
        
      };

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
        "Obi-Wan Kenobi": "/imgs/obi.png"
    
      };
    
      const planetMapping = {
        "https://swapi.py4e.com/api/planets/1/": "Tatooine",
        "https://swapi.py4e.com/api/planets/2/": "Alderaan",
        "https://swapi.py4e.com/api/planets/8/": "Naboo",
        "https://swapi.py4e.com/api/planets/20/": "Stewjon",
      }
    
  

    return(
        <div className="text-4xl mx-auto text-center pt-[15vh] h-[50vh]">

        <div className="bg-[#1d1d1d] pr-4  w-[30%] mx-auto flex ">
            <Image src={characterImageMapping[character.name]} width={200} height={200} alt={character.name} className="bg-[#464646] left-0 px-2"/>
            <div className="flex-col text-left ml-14  my-auto">
                <div className="text-2xl font-semibold mb-4">{character.name}</div>
                <div className="text-lg font-light">Specie: {speciesMapping[character.species]}</div>
                <div className="text-lg font-light">Gender: {character.gender}</div>
                <div className="text-lg font-light">Height: {character.height} cm</div>
                <div className="text-lg font-light">Mass: {character.mass} kg</div>
                <div className="text-lg font-light">Homeworld: {planetMapping[character.homeworld]}</div>
                <div className="text-lg font-light">Birth Year: {character.birth_year}</div>
            
            </div>
            
        </div>
            
        <div className="text-[16px] mt-8 text-yellow-600 flex mx-auto justify-center">
                {showPrevCharacterButton && (
                    <Link href={`/characterDetails?id=${parseInt(id) - 1}`} className="mx-2 flex items-center transition ease-in-out hover:transition hover:ease-in hover:opacity-60"><BsArrowLeftShort/> <div>Prev Character</div></Link>
                )}
                <Link href={`/characterDetails?id=${parseInt(id)+1}`} className="mx-2 flex items-center transition ease-in-out hover:transition hover:ease-in hover:opacity-60"><div>Next Character </div><BsArrowRightShort/></Link>           
        </div>

        </div>
    )
}