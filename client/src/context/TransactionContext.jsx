import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

// This is accessing the etherium object in the browser that was installed with metamask
// This can be rewritten as const ethereum = window.ethereum
const { ethereum } = window;

//Fetching Ethereum Contract
const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({ provider, signer, transactionContract });
  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  // Loading state while transaction is happening
  const [isLoading, setIsLoading] = useState(false);
  // Hold the number transaction count
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
  // State to hold the connected account from metamask
  const [currentAccount, setCurrentAccount] = useState("");
  // State to hold fields in the form
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  // Handler to set the data
  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  // Checking to make sure wallet is connected on page load
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        // set the current account
        setCurrentAccount(accounts[0]);
        // Get all Transactions
      } else {
        console.log("no accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Connecting the account
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      // Get all the accounts from metamask
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      // Set the first account (account of choice) as the current account
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object.");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      // Get data from the form
      const { addressTo, amount, keyword, message } = formData;
      // Getting the smart contract
      const transactionContract = getEthereumContract();
      // Request to send money
      const parsedAmount = ethers.utils.parseEther(amount)
      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: currentAccount,
          to: addressTo,
          gas: '0x5208', // 21000 GWEI
          value: parsedAmount._hex, //0.00001
        }]
      })
      // Adding transaction to blockchain
      // transactionHash will also return a unique ID for the transaction
      console.log(addressTo, parsedAmount, message, keyword);
      console.log(transactionContract);
      const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);
      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();
      setIsLoading(false);
      console.log(`Success - ${transactionHash.hash}`);

      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
    } catch (error) {
      console.log(error);
    }
  };
  // Calling the check
  useEffect(() => {
    checkIfWalletIsConnected();
  });

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
