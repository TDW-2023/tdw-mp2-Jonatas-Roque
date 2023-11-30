"use client"

import { StarWarsButton } from "./button";
import Link from "next/link";



export default function Hero(){

    return(

        <main className="-z-10">

            <section className="text-center text-[3rem] pt-[30vh] w-[900px] mx-auto font-extrabold" style={{transform: "scaleX(-1)"}}>Explore here your favorite <span className="text-[#ffc107] stroke-black">Star Wars</span> Characters, Ships and Planets
            </section>

            <div className="flex justify-center mt-10" style={{transform: "scaleX(-1)"}} >
                <StarWarsButton><Link href={"/characters"}><div>Characters</div></Link></StarWarsButton>
                <StarWarsButton><Link href={"/ships"}><div>Ships</div></Link></StarWarsButton>
                <StarWarsButton><Link href={"/planets"}><div>Planets</div></Link></StarWarsButton>

            </div>
            
        </main>
    )
}