var HelloWorld = artifacts.require("./HelloWorld.sol");
var Share = artifacts.require("./Share.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
  deployer.deploy(Share);
};
