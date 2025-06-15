const { ethers } = require("hardhat");

async function main() {
  const Hello = await ethers.getContractFactory("HelloWorld");

  const hello = await Hello.deploy();
  await hello.waitForDeployment(); // ✅ Gunakan ini, bukan .deployed()

  const greeting = await hello.greet();
  console.log("Greeting from contract:", greeting);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
