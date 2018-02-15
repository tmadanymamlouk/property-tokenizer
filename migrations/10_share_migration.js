var Share = artifacts.require("./Share.sol");

module.exports = function(deployer) {
  deployer.deploy(Share, "Elbphilharmonie", "ELB");
};
