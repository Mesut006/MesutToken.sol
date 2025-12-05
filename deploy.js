async function main() {
  const Token = await ethers.getContractFactory("MesutToken");
  const token = await Token.deploy();
  await token.deployed();
  console.log("MesutToken deployed at:", token.address);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
