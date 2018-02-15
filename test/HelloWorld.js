HelloWorld = artifacts.require('./HelloWorld.sol');

contract('VacationJS', function ([owner]) {
    let helloWorld;

    beforeEach('setup of contract', async function () {
        helloWorld = await HelloWorld.new(owner);
    });

    it('returns hello world', async function () {
        let value = await helloWorld.hello();
        console.log(value);
        assert.isTrue(await value == "hello world");
    });

});

