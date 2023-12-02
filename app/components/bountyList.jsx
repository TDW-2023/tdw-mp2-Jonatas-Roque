 "use client";

import { useSelector } from 'react-redux';

const BountyList = () => {
  const bountyList = useSelector((state) => state.bounty);

  return (
    <ul id="bounty" className="mx-16">
      {/* {bountyList.map((bounty, index) => (
        <li key={index}>{bounty.name}</li>
        
      ))} */}
    </ul>
  );
};

export default BountyList; 