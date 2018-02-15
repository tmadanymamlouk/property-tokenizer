pragma solidity ^0.4.17;

contract HelloWorld {

  address owner;

  function HelloWorld() public {
    owner = msg.sender;
  }

  function hello() public view returns (string) {
    return "hello world";
  }

}
