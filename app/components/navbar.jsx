"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/imgs/swlogo.png";
import { useState, useEffect } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { TfiBookmark } from "react-icons/tfi";
import { BsChevronRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import BountyList from "./bountyList";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [favOpen, setFavOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleFavs = () => {
    setFavOpen(!favOpen);
  };

  /* const bountyData = useSelector((state) => state.bounty) */

  return (
    <nav className="bg-transparent top-0 z-50">
      <div className="flex items-center mx-5">
        <div>
          <button className="px-3 text-white" onClick={toggleMenu}>
            <TfiAlignJustify className="text-[30px] transition ease-in-out hover:transition hover:ease-in hover:scale-125" />
          </button>
        </div>

        <div className="flex mx-auto text-center items-center">
          <div className="border border-b border-gray-500 mr-14 ml-4 md:w-[300px] lg:w-[400px] xl:w-[700px]"></div>
          <Link href={"/"}>
            <Image
              src={logo}
              width={100}
              height={100}
              alt="star wars logo"
              className="text-center mx-auto transition ease-in-out hover:ease-in hover:transition hover:scale-110"
            />
          </Link>
          <div className="border border-b border-gray-500 ml-14 mr-4 md:w-[300px] lg:w-[400px] xl:w-[700px]"></div>
        </div>

        <div>
          <button className="px-3 text-white" onClick={toggleFavs}>
            <TfiBookmark className="text-[30px] transition ease-in-out hover:transition hover:ease-in hover:scale-125" />
          </button>
        </div>
      </div>

      <div
        className={`sidebar ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-[#111111] z-50 text-white h-screen w-[30rem] fixed top-0 left-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between mr-7 mt-5 items-center">
          <h3 className="text-2xl font-semibold mb-4 mt-1 ml-5">
            Travel to...
          </h3>

          <button className="pb-3 px-3 rounded-full" onClick={toggleMenu}>
            <TfiClose className="hover:scale-150 hover:transition hover:ease-out ease-in-out transition" />
          </button>
        </div>

        {/* <div className="border-t mx-5 border-slate-400"></div> */}

        <ul className=" text-xl">
          <Link
            href={"/"}
            onClick={toggleMenu}
            className="py-5 pl-10 border-t flex cursor-pointer justify-between items-center hover:transition  transition ease-in-out  hover:ease-in-out hover:bg-yellow-600"
          >
            <div>Home</div>
            <div className="pr-8">
              <BsChevronRight className="font-black text-[1.5rem]" />
            </div>
          </Link>
          <Link
            href={"/characters"}
            onClick={toggleMenu}
            className="py-5 pl-10 border-t flex cursor-pointer justify-between items-center hover:transition  transition ease-in-out hover:ease-in-out hover:bg-yellow-600"
          >
            <div>Characters</div>
            <div className="pr-8">
              <BsChevronRight className="font-black text-[1.5rem]" />
            </div>
          </Link>
          <li className="py-5 pl-10 border-t flex cursor-pointer justify-between items-center hover:transition transition ease-in-out hover:ease-in-out hover:bg-yellow-600">
            <div>Ships</div>
            <div className="pr-8">
              <BsChevronRight className="font-black text-[1.5rem]" />
            </div>
          </li>
          <li className="py-5 pl-10 border-b border-t flex cursor-pointer justify-between items-center hover:transition transition ease-in-out hover:ease-in-out hover:bg-yellow-600">
            <div>Planets</div>
            <div className="pr-8">
              <BsChevronRight className="font-black text-[1.5rem]" />
            </div>
          </li>
          <Link href={"/about"} className="py-5 pl-10 border-b border-t flex cursor-pointer justify-between items-center hover:transition transition ease-in-out hover:ease-in-out hover:bg-yellow-600">
            <div>About Project</div>
            <div className="pr-8">
              <BsChevronRight className="font-black text-[1.5rem]" />
            </div>
          </Link>
        </ul>
      </div>

      <div
        className={`sidebar ${
          favOpen ? "translate-x-0" : "translate-x-full"
        } bg-[#111111] z-50 text-white h-screen w-[30rem] fixed top-0 right-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between pr-7 mt-5 items-center border-b border-white">
          <h3 className="text-2xl font-semibold mb-4 mt-1 ml-10 ">
            Bounty List
          </h3>
          <button className="pb-3 px-2 rounded-full" onClick={toggleFavs}>
            <TfiClose className="hover:scale-150 hover:transition hover:ease-out ease-in-out transition" />
          </button>
        </div>

        <BountyList />
      </div>
    </nav>
  );
}
