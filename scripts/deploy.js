const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Balance: ", accountBalance.toString());

  const Token = await hre.ethers.getContractFactory("YouWave");
  const portal = await Token.deploy({
    value: hre.ethers.utils.parseEther("0.01"),
  });

  await portal.deployed();

  console.log("YouWave contract address: ", portal.address);
};

(async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
