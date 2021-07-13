// // const Quarters = artifacts.require("Quarters");
// // const Q2 = artifacts.require("Q2");

// module.exports = async function (deployer) {
//   console.log("test");
//   //  await deployer.deploy(Q2,"0x8e7b38b6365d9b70a3684be0431658e60d08ead5");
//   //  const deployedQ2= await Q2.deployed();
//   // console.log(deployedQ2.address);

//   // await deployer.deploy(Quarters,deployedQ2.address,10000);
//   // const deployedQuater= await Quarters.deployed();
//   // console.log(deployedQuater.address);
  
// };


const Migrations = artifacts.require("Migrations");
const Q2 = artifacts.require("Q2");

module.exports = async function (deployer) {
  deployer.deploy(Migrations);
  await deployer.deploy(Q2,"0x8e7b38b6365d9b70a3684be0431658e60d08ead5");
  const deployedQ2= await Q2.deployed();
  console.log(deployedQ2.address);
};
