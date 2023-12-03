import Image from "next/image";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { TbApi } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <main >
    <div className="mx-auto w-[1050px]">
        <h1 className="mt-[5vh] text-3xl text-center font-bold ">About project</h1>
        <div className="mt-12 mx-10 flex grid-cols-2 bg-[#1f1f1f]">
          <div className="w-[55%] mx-6 py-9 px-3 my-auto">
              <h2 className="font-semibold text-xl text-[#ffc107]">What made me choose this theme/API</h2>
              <p className="mt-5">
                The main reason I chose to do this project on the theme of Star Wars and its API is because this is one of my favorite franchises.
                Ever since I was young, I&apos;ve had a particular fondness for the themes and lore presented in the films and animated series, so I thought it would be good to revisit some of this particular taste of mine and associate it with an academic project like this one.
              </p>

              <h2 className="font-semibold text-xl text-[#ffc107] mt-12">Functionalities</h2>
                <ul className="mt-3 text-md">   
                  <li className="mx-2">- See characters</li>
                  <li className="mx-2">- Character details</li>
                  <li className="mx-2">- Filtering & search</li>
                  <li className="mx-2">- Bounty List</li>
                </ul>


              <h2 className="font-semibold text-xl text-[#ffc107] mt-12">Technologies used</h2>
              <div className="flex justify-start mt-5">
              
              <SiNextdotjs className="mx-3" size={40}/>
              <TbBrandRedux className="mx-3" size={40}/>
              <TbApi className="mx-3" size={40}/>
              <SiTailwindcss className="mx-3" size={40}/>
              <FaGithub className="mx-3" size={40}/>
              </div>

              

          </div>


          <div className="h-full bg-[#313131] opacity-95">
            <Image src={"/imgs/jonatasr.png"} width={420} height={330}/>
            <div className="w-full text-center text-white font-semibold bg-[#181818]">
               Jónatas Roque
            </div>
           
          </div>
          
        </div>

        
          
          
        
      
    </div>
    </main>
  );
}
