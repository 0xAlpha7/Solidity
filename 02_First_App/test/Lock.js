const { ethers } = require("ethers");
const { solidity } = require("ethereum-waffle");
const ABI = require("../artifacts/contracts/FirstApp.sol/Counter.json");

describe("Counter Contract", () => {
  let provider;
  let address;

  beforeEach(async () => {
    provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    const Counter = await hre.ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();
    address = counter.address;
  });
  const contract = new ethers.Contract(address, ABI, provider)

  it("should have the correct initial count", async () => {
    expect(await contract.get()).to.equal(0);
  });

  it("should be able to increment the count", async () => {
    await contract.inc();
    expect(await contract.get()).to.equal(1);
  });

  it("should be able to decrement the count", async () => {
    await contract.inc();
    await contract.dec();
    expect(await contract.get()).to.equal(0);
  });

  it("should throw an error when decrementing count below 0", async () => {
    try {
        await contract.dec();
        throw new Error("Should have thrown an error");
    } catch (error) {
        expect(error.message).to.include("revert");
    }
  });
});
