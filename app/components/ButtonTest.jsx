import React from "react";
import { useDispatch } from "react-redux";
import { addBounty } from "../Redux/bountySlice";

const ButtonTest = () => {
  const dispatch = useDispatch();

  return <div onClick={() => dispatch(addBounty("OLA"))}>ButtonTest</div>;
};

export default ButtonTest;
