const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const YouWaveContractFactory = await hre.ethers.getContractFactory("YouWave");
  const YouWaveContract = await YouWaveContractFactory.deploy();
  await YouWaveContract.deployed();

  console.log("Contract deployed to: ", YouWaveContract.address);
  console.log("Contract deployed by: ", owner.address);

  let waveCount;
  waveCount = await YouWaveContract.getTotalWaves();

  let waveTxn = await YouWaveContract.wave();
  await waveTxn.wait();

  waveCount = await YouWaveContract.getTotalWaves();
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
