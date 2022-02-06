const main = async () => {
    const TransactionsV2 = await hre.ethers.getContractFactory("TransactionsV2");
    const transactionsV2 = await TransactionsV2.deploy();
  
    await transactionsV2.deployed();
  
    console.log("Transactions deployed to: ", transactionsV2.address);
  }
  
  const runMain = async () => {
    try {
      await main ();
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
  
  runMain();
  