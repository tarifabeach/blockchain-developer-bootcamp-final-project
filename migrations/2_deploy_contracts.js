var sampleToken = artifacts.require("./sampleToken.sol");

module.exports = async function(deployer) {

await deployer.deploy(sampleToken);
}; 