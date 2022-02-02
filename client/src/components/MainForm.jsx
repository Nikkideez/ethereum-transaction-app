import React, { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { Loader } from ".";
import { TransactionContext } from "../context/TransactionContext";
// Function for the inputs
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-small white-glassmorphism"
  />
);

// Main component for transactions
const MainForm = () => {
  // Getting global value for the context (TransactionContext)
  const { connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    // When a form is submitted, page reloads. This prevents that from happening.
    e.preventDefault();
    // Check to make sure there are no missing fields
    if(!addressTo || !amount || !keyword || !message) return;
    // Function to send the transaction
    sendTransaction(); 
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col item-start justify-between md:p-20 py-12 px-4">
        <h1 className="text-3xl text-center">Welcome to CEND!</h1>
        {!currentAccount && (
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            Connect Wallet
          </button>
        )}
        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
              </div>
              <div>
                <p className="text-white font-light text-sm">Address</p>
                <p className="text-white font-semibold text-lg mt-1">
                  0xasdasd....asdasd
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
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
            <Input
              placeholder="Keyword"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
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
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
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
