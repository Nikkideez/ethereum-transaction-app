import React from "react";
import { Link } from "react-scroll";

const ViewTransactions = () => {
  return (
    <div className="flex item-center justify-center cursor-pointer hover:text-green-2">
      <Link to="transactions" smooth={true} duration={1000}>
        VIEW TRANSACTIONS
      </Link>
    </div>
  );
};

export default ViewTransactions;
