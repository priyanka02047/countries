import React from "react";
import { IoMoonOutline } from "react-icons/io5";
const Header = () => {
  return (
    <div className="flex justify-between h-16">
      <div className="font-bold text-xl content-center pl-10">
        where in the world?
      </div>
      <div className="flex font-bold pr-10 items-center">
        <IoMoonOutline className="h-5 w-5 m-1" />
        Dark mode
      </div>
    </div>
  );
};

export default Header;
