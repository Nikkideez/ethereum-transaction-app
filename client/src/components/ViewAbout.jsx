import React from "react";
import { Link } from "react-scroll";

const ViewAbout = () => {
  return (
    <div className="flex item-center justify-center cursor-pointer hover:text-green-2">
      <Link to="about" smooth={true} duration={1000}>
        ABOUT
      </Link>
    </div>
  );
};

export default ViewAbout;
