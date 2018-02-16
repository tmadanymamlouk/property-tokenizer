Share = artifacts.require('./Share.sol');

contract('Share', function ([owner]) {
    let shareContract;

    beforeEach('setup of contract', async function () {
        shareContract = await Share.new("ELB", "Elbphilharmonie");
    });

    it('returns correct total supply', async function () {
        let totalSupply = await shareContract.totalSupply();
        console.log(totalSupply);
        assert.isTrue(await totalSupply == 10000);
    });

});
