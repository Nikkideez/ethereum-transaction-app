import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const Transactions = () => {
  const { allTransactions } = useContext(TransactionContext);
  return (
    <div className="flex flex-col text-center">
      <div>
        <h1>RECENT TRANSACTIONS</h1>
      </div>
      <div className="flex items-center content-center justify-center px-4 text-sm sm:text-base">
        <table className="table-auto">
          <thead>
            <tr>
              <th>Payer ---&gt; Receiver</th>
              <th>Amount</th>
              <th>Message</th>
              <th>Time(UTC/GMT +10:10)</th>
            </tr>
          </thead>
          <tbody>
            {allTransactions &&
              allTransactions
                .map((transaction, index) => (
                  <tr key={index}>
                    <td>
                      {shortenAddress(transaction[0])} -&gt;{" "}
                      {shortenAddress(transaction[1])}
                    </td>
                    <td>{parseInt(transaction[2]._hex) / 10 ** 18}</td>
                    <td>{transaction[3]}</td>
                    <td>
                      {new Date(
                        parseInt(transaction.timestamp._hex, 16) * 1000
                      ).toLocaleString()}
                    </td>
                  </tr>
                ))
                .reverse()}
          </tbody>
        </table>
        {/* {allTransactions &&
        allTransactions
        .map((transaction, index) => (
          <div key={index}>
          <h2>
          {shortenAddress(transaction[0])} -&gt;{" "}
          {shortenAddress(transaction[1])} (
            {parseInt(transaction[2]._hex) / 10 ** 18}) {transaction[3]}
            </h2>
            </div>
            ))
          .reverse()} */}
      </div>
    </div>
  );
};

export default Transactions;
