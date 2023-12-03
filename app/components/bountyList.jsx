"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
import { removeBounty } from "../Redux/bountySlice";
import { useDispatch } from "react-redux";

const BountyList = () => {
  const dispatch = useDispatch();

  const bountyList = useSelector((state) => state.bounty.characters);

  const handleRemoveBounty = (id) => {
    dispatch(removeBounty(id));
  };

  return (
    <div id="bounty" className="mx-16 mt-8">
      {bountyList.length > 0 ? (
        <ul>
          {bountyList.map((bounty, index) => (
            <div
              key={bounty.id}
              className="bg-[#1b1b1b] p-4 mb-3 flex justify-between"
            >
              <Link href={`/characterDetails?id=${bounty.id}`}>
                <li className="hover:text-[#a3a3a3] transition ease-in-out hover:transition hover:ease-in">
                  {bounty.name}
                </li>
              </Link>
              <div
                onClick={() => handleRemoveBounty(bounty.id)}
                className="cursor-pointer hover:text-[#a3a3a3] transition ease-in-out hover:transition hover:ease-in"
              >
                x
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <div className="text-[#a3a3a3] mt-5">
          There are no characters selected.
        </div>
      )}
    </div>
  );
};

export default BountyList;
