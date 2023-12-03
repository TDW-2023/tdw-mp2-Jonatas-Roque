import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-center bottom-0">
      <div className=" text-white">
        <div className="text-center mx-auto flex ">
          <div className="font-bold text-2xl py-5 bg-[#181818] h-full w-[20%]">
            Pages:
          </div>

          <div className="w-[80%] items-center my-auto">
            <ul className="mb-0 list-none flex justify-evenly">
              <li>
                <Link href={"/"} className="">
                  Homepage
                </Link>
              </li>
              <li>
                <Link href={"/characters"} className="">
                  Characters
                </Link>
              </li>
              <li>
                <Link href={"/ships"} className="">
                  Ships
                </Link>
              </li>
              <li>
                <Link href={"/planets"} className="">
                  Planets
                </Link>
              </li>
              <li>
                <Link href={"/about"} className="">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright: Jónatas Roque
      </div>
    </footer>
  );
}
