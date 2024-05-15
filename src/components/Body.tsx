import React from "react";
import { IoMoonOutline } from "react-icons/io5";
const Body = (): JSX.Element => {
  return (
    <div className="flex justify-between bg-white h-5/6 m-0.5 rounded-sm">
      <input className=""></input>
      <div className="flex font-bold pr-10 items-center">
        <IoMoonOutline className="h-5 w-5 m-1" />
        Dark mode
      </div>
    </div>
  );
};

export default Body;
