const { ethers } = require("ethers");
const { solidity } = require("ethereum-waffle");


describe("HelloWorld Contract", () => {
  let provider;
  let wallet;
  let helloWorld;

  beforeEach(async () => {
    provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    helloWorld = await new ethers.ContractFactory(HelloWorld.abi, HelloWorld.bytecode, wallet).deploy();
  });

  it("should have the correct greeting", async () => {
    expect(await helloWorld.greet()).to.equal("Hello World!");
  });
});
