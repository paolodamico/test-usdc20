import { ethers } from "hardhat";

async function main() {

  const TestUSDC20 = await ethers.getContractFactory("TestUSDC20");
  const testUSDC20 = await TestUSDC20.deploy(BigInt(1000) * BigInt(10 ** 18));

  await testUSDC20.deployed();

  console.log(`Test USDC20 token deployed to ${testUSDC20.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
