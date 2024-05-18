import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BackButton = (): JSX.Element => {
  return (
    <Link to="/" className="p-4 sm:p-10">
      <button className="flex dark:bg-gray-800 rounded-md min-w-24 max-w-24 p-2 m-10">
        {" "}
        <FaArrowLeftLong className="mt-1.5 mr-3" />
        Back
      </button>
    </Link>
  );
};

export default BackButton;
