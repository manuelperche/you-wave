const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const YouWaveContractFactory = await hre.ethers.getContractFactory("YouWave");
  const YouWaveContract = await YouWaveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.1"),
  });
  await YouWaveContract.deployed();

  console.log("Contract deployed to: ", YouWaveContract.address);
  console.log("Contract deployed by: ", owner.address);

  let waveCount;
  waveCount = await YouWaveContract.getTotalWaves();

  let contractBalance = await hre.ethers.provider.getBalance(YouWaveContract.address);
  console.log("Contract balance:", hre.ethers.utils.formatEther(contractBalance));

  let waveTxn = await YouWaveContract.wave("Wave #1");
  await waveTxn.wait();

  waveTxn = await YouWaveContract.wave("Wave #2");
  await waveTxn.wait();

  waveTxn = await YouWaveContract.connect(randomPerson).wave("Wave #3 from another person");
  await waveTxn.wait();

  contractBalance = await hre.ethers.provider.getBalance(YouWaveContract.address);
  console.log("Contract balance:", hre.ethers.utils.formatEther(contractBalance));

  let allWaves = await YouWaveContract.getAllWaves();
  console.log(allWaves);
  waveCount = await YouWaveContract.getTotalWaves();
  console.log(waveCount);
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
