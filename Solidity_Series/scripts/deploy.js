
const hre = require("hardhat");

async function main() {
  
  const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
  const helloworld = await HelloWorld.deploy();
  await helloworld.deployed();
  console.log("deploying..");
  console.log("------------------------------");
  console.log("Hello world contract deployed at: ", helloworld.address);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
