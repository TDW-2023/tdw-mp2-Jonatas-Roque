 "use client";

import { useSelector } from 'react-redux';
import Link from 'next/link';

const BountyList = () => {
  const bountyList = useSelector((state) => state.bounty.characters);

  return (
    <ul id="bounty" className="mx-16">
       {bountyList.map((bounty, index) => (
        <Link href={`/characterDetails?id=${bounty.id}`}><li key={bounty.id}>{bounty.name}</li></Link>
        
      ))} 
    </ul>
  );
};

export default BountyList; 