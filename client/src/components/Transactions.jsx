import React, { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { convertDate } from "../utils/convertDate";

const Transactions = () => {
  const { allTransactions } = useContext(TransactionContext);
  const [numberTransactions, setNumberTransactions] = useState(5);
  const handleAllTransactions = () =>
    setNumberTransactions(allTransactions.length);
  const handleHideTransactions = () => setNumberTransactions(5);
  // allTransactions && console.log(allTransactions.length);
  // let numberTransactions = 2;

  return (
    <section id="transactions">
      <div className="flex flex-col text-center p-10">
        <div>
          <h1>TRANSACTIONS</h1>
        </div>
        <div className="flex justify-evenly px-4 text-sm sm:text-base">
          {allTransactions ? (
            <div>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-3">UTC/GMT +10:00</th>
                    <th className="px-4">Payer ---&gt; Receiver</th>
                    <th className="px-3">Amount</th>
                    <th className="px-3">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {allTransactions
                    .map((transaction, index) => (
                      <tr key={index}>
                        <td>{convertDate(transaction.timestamp._hex)}</td>
                        <td>
                          {shortenAddress(transaction[0])} -&gt;{" "}
                          {shortenAddress(transaction[1])}
                        </td>
                        <td>{parseInt(transaction[2]._hex) / 10 ** 18}</td>
                        <td>{transaction[3]}</td>
                      </tr>
                    ))
                    .reverse()
                    .slice(0, numberTransactions)}
                </tbody>
              </table>
              {numberTransactions === 5 ? (
                <button
                  className="text-green-2 hover:text-pink-2"
                  onClick={handleAllTransactions}
                >
                  View All Transactions
                </button>
              ) : (
                <button
                  className="text-green-2 hover:text-pink-2"
                  onClick={handleHideTransactions}
                >
                  Hide All Transactions
                </button>
              )}
            </div>
          ) : (
            <h1 className="text-pink-2">No available transactions</h1>
          )}

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
    </section>
  );
};

export default Transactions;
