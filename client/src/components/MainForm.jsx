import React, { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { Loader } from ".";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

/* READ FIRST!!
- Color Pallette theme could be #f68741, #fcdf87, #ef0195, #1b96f3, #10133a (Neon Theme)
- Another Color Pallette theme could be #fa448c, #fec859, #43b5a0, #491d88, #331a38
- #191937, #E41376, #91CaEE
- Outline layout
- Change background color (reference palletes)
*/

// Function for the inputs
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 bg-transparent text-white text-small white-glassmorphism border-solid border-2 hover:border-yellow"
  />
);

// Main component for transactions
const MainForm = () => {
  // Getting global value for the context (TransactionContext)
  const {
    connectWallet,
    currentAccount,
    formData,
    // setFormData,
    handleChange,
    sendTransaction,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, message } = formData;

    // When a form is submitted, page reloads. This prevents that from happening.
    e.preventDefault();
    // Check to make sure there are no missing fields
    if (!addressTo || !amount || !message) return;
    // Function to send the transaction
    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col item-start justify-between py-12 px-4">
        <h1 className="text-9xl text-center">CEND</h1>
        <h2 className="text-center py-10">Ethereum transfer solution.</h2>
        <div className="flex flex-col flex-1 items-center justify-start w-full mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 w-72 w-full my-5 white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
              </div>
              <div>
                <p className="text-white font-light text-sm">Address</p>
                <p className="text-white font-semibold text-lg mt-1">
                  {currentAccount ? (
                    shortenAddress(currentAccount)
                  ) : (
                    <span>NO WALLET DETECTED</span>
                  )}
                </p>
              </div>
            </div>
          </div>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row w-full justify-center items-center my-5 mb-10 p-2 cursor-pointer hover:border-blue hover:shadow-blue border-solid border-2 border-green-2 rounded-full"
            >
              Connect Wallet
            </button>
          )}
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center border-solid border-2 border-pink-2 shadow-lg shadow-pink-2">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            {/* <Input
              placeholder="Keyword"
              name="keyword"
              type="text"
              handleChange={handleChange}
            /> */}
            <Input
              placeholder="Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />
            <div className="h-[1px] w-full bg-gray-400 my-2"></div>
            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 p-2 rounded-full cursor-pointer border-solid border-2 border-green-2 hover:border-blue disabled:border-grey disabled:text-grey disabled:cursor-default"
                disabled={!currentAccount}
              >
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainForm;
