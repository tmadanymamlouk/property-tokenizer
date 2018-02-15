HelloWorld = artifacts.require('./HelloWorld.sol');

contract('HelloWorld', function ([owner]) {
    let helloWorld;

    beforeEach('setup of contract', async function () {
        helloWorld = await HelloWorld.new();
    });

    it('returns hello world', async function () {
        let value = await helloWorld.hello();
        console.log(value);
        assert.isTrue(await value == "hello world");
    });

});

