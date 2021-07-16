
const Quarters = artifacts.require("Quarters");
const Migrations = artifacts.require("Migrations");
const Q2 = artifacts.require("Q2");
const Caver = require('caver-js');
const caver = new Caver(new Caver.providers.HttpProvider('https://api.baobab.klaytn.net:8651'));


module.exports = async function (deployer) {
  deployer.deploy(Migrations);
  await deployer.deploy(Q2,"0x8e7b38b6365d9b70a3684be0431658e60d08ead5");
  const deployedQ2= await Q2.deployed();

  await deployer.deploy(Quarters,deployedQ2.address,10000);
  const deployedQuater= await Quarters.deployed();

  await deployedQ2.startStage(
    1000,
    1000,
    await caver.klay.getBlockNumber()+10,
    await caver.klay.getBlockNumber()+50
  )
};
