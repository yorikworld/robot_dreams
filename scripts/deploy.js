// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log('Deployer: ', deployer.address);

  const Contract = await hre.ethers.getContractFactory("SimpleStorage");
  const recipe = await Contract.deploy();
  await recipe.waitForDeployment();

  const contractAddr  = await recipe.getAddress();

  console.log("Contract is deployed to: ",contractAddr);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
