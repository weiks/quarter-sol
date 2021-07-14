
const Quarters = artifacts.require("Quarters");
const Migrations = artifacts.require("Migrations");
const Q2 = artifacts.require("Q2");

module.exports = async function (deployer) {
  deployer.deploy(Migrations);
  await deployer.deploy(Q2,"0x8e7b38b6365d9b70a3684be0431658e60d08ead5");
  const deployedQ2= await Q2.deployed();
  console.log(deployedQ2.address);

   await deployer.deploy(Quarters,deployedQ2.address,10000);
   const deployedQuater= await Quarters.deployed();
   console.log(deployedQuater.address)

   await deployedQuater.startStage(
    1000,
    web3.toWei(10000),
    web3.eth.blockNumber + 2,
    web3.eth.blockNumber + 5
  )
  // await q2.buyTokens({value: web3.toWei(1)})
  // await q2.buyTokens({value: web3.toWei(1)})
  // await q2.buyTokens({value: web3.toWei(1)})
  // await q2.disburse({value: web3.toWei(1)})
};
